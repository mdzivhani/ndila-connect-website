import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Ndila Connect Services',
  description: 'Get in touch with our team. Submit an inquiry or request for proposal.',
  openGraph: {
    title: 'Contact Us - Ndila Connect Services',
    description: 'Get in touch with our team. Submit an inquiry or request for proposal.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ndila.com'}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
