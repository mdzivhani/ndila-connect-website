# Ndila Connect Services Website

A modern, professional website for Ndila Connect Services built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Mode Support** - Built-in light/dark theme switching
- **Contact Form** - Email form with file upload support
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Performance** - Optimized images, code splitting, fast load times
- **DevOps Best Practices** - Clean code, proper error handling, structured logging
- **Professional Design** - No AI-generated visuals, clean and minimal aesthetic

## Pages

- **Home** - Hero section, services overview, portfolio highlights, call-to-action
- **About** - Company mission, values, team expertise
- **Services** - Detailed service offerings (DevOps, Cloud, Development, Security, Observability)
- **Portfolio** - Case studies and past projects
- **Blog** - Technical insights and industry articles
- **Tenders & Compliance** - Company documentation, certifications, experience
- **Contact** - Contact form with file uploads for RFPs

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: Radix UI
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Email**: Nodemailer
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ndila-connect-website.git
cd ndila-connect-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Create environment configuration:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your configuration

### Development

Start the development server:
```bash
pnpm dev
```

### Build

Build for production:
```bash
pnpm build
pnpm start
```

### Linting

Run ESLint:
```bash
pnpm lint
```

## Deployment

### Vercel (Recommended)
```bash
vercel deploy --prod
```

### Azure Static Web Apps
Connect repository to Azure portal and configure build settings.

### Custom Server
```bash
pnpm build && pnpm start
```

## CI/CD

GitHub Actions workflows are configured in `.github/workflows/`:
- **test-and-build.yml**: Runs linting, type check, and build on PR
- **deploy.yml**: Builds and deploys to production on merge to main

## Documentation

See `.instructions` for detailed development standards and guidelines.

## License

MIT License - Built on template by Harami Mishra
