# Deployment Guide - Ndila Connect Services

This guide covers deploying the Ndila Connect Services website to production.

## Prerequisites

- GitHub repository created: `https://github.com/mdzivhani/ndila-connect-website`
- Git remote configured: `git@github.com:mdzivhani/ndila-connect-website.git`
- Local code pushed to main branch

## Recommended Deployment Options

### Option 1: Vercel (Recommended - Zero-Config)

Vercel is the optimal choice for Next.js applications with zero-configuration required.

#### Setup Steps:

1. **Connect to Vercel:**
   - Go to https://vercel.com
   - Sign in with your GitHub account
   - Click "New Project"
   - Select `ndila-connect-website` repository
   - Vercel auto-detects Next.js configuration

2. **Configure Environment Variables:**
   - In Vercel Dashboard > Settings > Environment Variables
   - Add the following from your `.env.local`:
     ```
     SMTP_HOST=smtp.gmail.com (or your email provider)
     SMTP_PORT=587
     SMTP_USER=your-email@gmail.com
     SMTP_PASS=your-app-specific-password
     SMTP_FROM=noreply@ndila.com
     CONTACT_EMAIL=contact@ndila.com
     NEXT_PUBLIC_SITE_URL=https://ndila.com (replace with your domain)
     ```

3. **Domain Setup:**
   - Point your domain (ndila.com) to Vercel nameservers
   - Or add custom domain in Vercel > Settings > Domains
   - Vercel automatically provisions SSL/TLS certificate

4. **Deploy:**
   - Push code to main branch
   - Vercel automatically builds and deploys
   - GitHub Actions workflow (test-and-build.yml) validates on PR

#### GitHub Actions Secrets Required for CI/CD:
```
VERCEL_TOKEN=your_vercel_token (from Vercel > Settings > Tokens)
```

---

### Option 2: Azure Static Web Apps

For enterprise deployments or existing Azure infrastructure.

#### Setup Steps:

1. **Create Azure Static Web App:**
   - Go to Azure Portal
   - Create new "Static Web App" resource
   - Connect to your GitHub repository
   - Select branch: `main`
   - Build preset: Next.js

2. **Configure Environment Variables:**
   - In Azure Portal > Settings > Configuration
   - Add same environment variables as Vercel

3. **Deploy:**
   - GitHub Actions workflow automatically created
   - Deployment URL provided by Azure
   - Connect custom domain to the deployment URL

#### GitHub Actions Secrets Required:
```
AZURE_SWA_TOKEN=your_deployment_token (from Azure > Deployment tokens)
```

---

### Option 3: Self-Hosted (Docker)

For maximum control and custom infrastructure.

#### Build Docker Image:
```bash
# Create Dockerfile
docker build -t ndila-website:latest .

# Run container
docker run -p 3000:3000 \
  -e SMTP_HOST=smtp.gmail.com \
  -e SMTP_PORT=587 \
  -e SMTP_USER=your-email@gmail.com \
  -e SMTP_PASS=your-app-password \
  -e CONTACT_EMAIL=contact@ndila.com \
  -e NEXT_PUBLIC_SITE_URL=https://ndila.com \
  ndila-website:latest
```

#### Deployment Options:
- AWS EC2/ECS
- Google Cloud Run
- Azure Container Instances
- On-premise servers

---

## Email Configuration

### Gmail Setup (Recommended for small deployments):

1. **Enable 2-Factor Authentication:**
   - Go to Google Account > Security
   - Enable 2-Step Verification

2. **Generate App Password:**
   - Go to Google Account > Security > App passwords
   - Select Mail and Windows Computer
   - Copy the generated password (16 characters)

3. **Configure Environment:**
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx (app-specific password)
   SMTP_FROM=your-email@gmail.com
   CONTACT_EMAIL=contact@ndila.com
   ```

### Custom Email Provider:

For production, consider:
- SendGrid
- AWS SES
- Mailgun
- MailerSend

Update SMTP settings accordingly in environment variables.

---

## CI/CD Pipeline

The repository includes GitHub Actions workflows:

### test-and-build.yml
- Runs on Pull Requests to main/dev
- Validates:
  - ESLint checks
  - TypeScript compilation
  - Next.js build
- Prevents broken code from merging

### deploy.yml
- Runs on main branch pushes
- Three deployment options:
  1. **Vercel** (default, uncomment VERCEL_TOKEN)
  2. **Azure Static Web Apps** (uncomment AZURE_SWA_TOKEN)
  3. **Custom Server SSH** (uncomment SSH_* secrets)

#### Configure GitHub Secrets:
1. Go to GitHub > Settings > Secrets and Variables > Actions
2. Add deployment token:
   - `VERCEL_TOKEN` for Vercel
   - Or `AZURE_SWA_TOKEN` for Azure
   - Or `SSH_*` for custom server

---

## Pre-Deployment Checklist

- [x] Code builds successfully: `pnpm run build`
- [x] No TypeScript errors: `pnpm run type-check`
- [x] ESLint passes: `pnpm run lint`
- [x] Environment variables configured
- [x] Email provider credentials verified
- [x] Domain registered and DNS configured
- [x] GitHub repository created and code pushed
- [x] GitHub Actions secrets configured

---

## Post-Deployment Verification

1. **Site Accessibility:**
   ```bash
   curl https://ndila.com
   ```

2. **SEO Verification:**
   - Check sitemap: https://ndila.com/sitemap.xml
   - Verify robots.txt: https://ndila.com/robots.txt
   - Test Open Graph tags: https://www.opengraphcheck.com

3. **Form Testing:**
   - Test contact form with valid/invalid data
   - Verify email reception (admin + user confirmation)
   - Test file upload functionality

4. **Performance:**
   - Run Lighthouse: Chrome DevTools > Lighthouse
   - Monitor with Google Search Console
   - Set up analytics if desired

5. **Security:**
   - Enable HTTPS (automatic with Vercel/Azure)
   - Configure CSP headers (if needed)
   - Enable rate limiting on API endpoints

---

## Monitoring & Maintenance

### Recommended Tools:
- **Vercel Analytics:** https://vercel.com/analytics
- **Google Search Console:** https://search.google.com/search-console
- **Google Analytics:** https://analytics.google.com
- **Sentry:** Error tracking https://sentry.io
- **UptimeRobot:** Uptime monitoring https://uptimerobot.com

### Regular Maintenance:
- Update dependencies monthly: `pnpm update`
- Review server logs weekly
- Monitor form submissions
- Check email delivery
- Update content quarterly

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm run build
```

### Email Not Sending
- Check SMTP credentials in environment variables
- Verify "Less Secure Apps" enabled (Gmail)
- Check firewall for SMTP port 587
- Review email logs in `/tmp/contact-logs/` (local)

### SEO Issues
- Verify sitemap generation: https://ndila.com/sitemap.xml
- Test with Google's Rich Result Tester
- Submit sitemap to Google Search Console
- Check robots.txt rules: https://ndila.com/robots.txt

### Performance Issues
- Check Next.js bundle analysis: `pnpm run build --analyze`
- Enable Vercel Analytics for insights
- Use Chrome DevTools Performance tab
- Optimize images with Next.js Image component

---

## Support

For additional help:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Deployment: https://vercel.com/docs/frameworks/nextjs
- Azure Static Web Apps: https://learn.microsoft.com/azure/static-web-apps
- GitHub Actions: https://docs.github.com/actions

---

## Rollback Procedure

If deployment has issues:

### Vercel:
1. Go to Vercel > Deployments
2. Find previous successful deployment
3. Click "Promote to Production"

### Azure:
1. Go to Azure > Static Web Apps > Deployments
2. Select previous successful deployment
3. Click "Promote to production"

### Self-Hosted:
1. Stop current container: `docker stop <container-id>`
2. Start previous version: `docker run ... <image:previous-tag>`
3. Or revert git: `git revert <commit-hash>` and redeploy

---

Last Updated: December 2025
