import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const UPLOAD_DIR = '/tmp/uploads';

// Ensure upload directory exists
async function ensureUploadDir() {
  if (!existsSync(UPLOAD_DIR)) {
    await mkdir(UPLOAD_DIR, { recursive: true });
  }
}

// Initialize email transporter
function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// Validate form input
function validateForm(data: Record<string, any>) {
  const errors: string[] = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address required');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  return errors;
}

// Log errors with context
function logError(context: string, error: any) {
  const timestamp = new Date().toISOString();
  const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
  console.error(`[${timestamp}] ${context}: ${errorMessage}`);
}

export async function POST(request: NextRequest) {
  try {
    // Ensure upload directory exists
    await ensureUploadDir();

    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;
    const file = formData.get('file') as File | null;

    // Validate input
    const errors = validateForm({ name, email, message });
    if (errors.length > 0) {
      return NextResponse.json(
        { errors },
        { status: 400 }
      );
    }

    // Handle file upload if present
    let attachments: any[] = [];
    let fileInfo = '';

    if (file) {
      try {
        const buffer = await file.arrayBuffer();
        const filename = `${Date.now()}_${file.name.replace(/[^a-z0-9.-]/gi, '_')}`;
        const filepath = join(UPLOAD_DIR, filename);

        await writeFile(filepath, Buffer.from(buffer));

        attachments = [
          {
            filename: file.name,
            path: filepath,
          },
        ];

        fileInfo = `\nAttached document: ${file.name}`;
      } catch (err) {
        logError('File upload', err);
        return NextResponse.json(
          { error: 'Failed to process file upload' },
          { status: 400 }
        );
      }
    }

    // Send email
    try {
      const transporter = getTransporter();

      const mailOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          ${fileInfo ? `<p><em>${fileInfo}</em></p>` : ''}
        `,
        text: `
          Name: ${name}
          Email: ${email}
          ${company ? `Company: ${company}` : ''}
          
          Message:
          ${message}
          ${fileInfo}
        `,
        attachments,
      };

      await transporter.sendMail(mailOptions);

      // Send confirmation email to user
      const confirmationOptions = {
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: 'We Received Your Message - Ndila Connect Services',
        html: `
          <h2>Thank You for Reaching Out</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you as soon as possible, typically within 1-2 business days.</p>
          <p>If you have any urgent concerns, please feel free to call us directly.</p>
          <p>Best regards,<br>Ndila Connect Services Team</p>
        `,
      };

      await transporter.sendMail(confirmationOptions);

      return NextResponse.json(
        { success: true, message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (err) {
      logError('Email send', err);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }
  } catch (err) {
    logError('Contact form submission', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
