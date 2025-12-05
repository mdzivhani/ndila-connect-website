import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ndila Connect Services - DevOps & Cloud Solutions",
  description: "Professional DevOps, cloud infrastructure, application development, security compliance, and observability services for enterprises.",
  keywords: ["DevOps", "Cloud Infrastructure", "AWS", "Azure", "Kubernetes", "CI/CD"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ndila Connect Services",
              url: "https://ndila.com",
              logo: "https://ndila.com/images/ndila-logo.png",
              description: "Professional DevOps, cloud infrastructure, application development, security compliance, and observability services for enterprises.",
              sameAs: [
                "https://github.com/mdzivhani",
                "https://linkedin.com/company/ndila-connect-services",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "ZA",
                addressRegion: "South Africa",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Business",
                email: "info@ndila.com",
              },
              founder: {
                "@type": "Person",
                name: "Mulalo Dzivhani",
              },
              services: [
                {
                  "@type": "Service",
                  name: "DevOps & Automation",
                  description: "CI/CD pipelines, Infrastructure as Code, Kubernetes, deployment automation, and monitoring solutions.",
                },
                {
                  "@type": "Service",
                  name: "Cloud & Infrastructure",
                  description: "AWS, Azure, GCP, multi-cloud strategies, cost optimization, and cloud migration services.",
                },
                {
                  "@type": "Service",
                  name: "Application Development",
                  description: "Full-stack development, microservices, APIs, and modern application architecture.",
                },
                {
                  "@type": "Service",
                  name: "Security & Compliance",
                  description: "Security audits, SOC2, ISO27001 compliance, penetration testing, and security consulting.",
                },
                {
                  "@type": "Service",
                  name: "Observability & Support",
                  description: "Logging, metrics, tracing, 24/7 support, and operational excellence.",
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
