import { Metadata } from 'next';
import AboutUsSection from "@/components/sections/home/about-section";
import HeroSection from "@/components/sections/home/hero-section";
import PortfolioSection from "@/components/sections/home/portfolio-section";
import ServicesSection2 from "@/components/sections/home/services-2";
import StatsSection from "@/components/sections/home/stats";
import Testimonials from "@/components/testimonials";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/contact";

export const metadata: Metadata = {
  title: 'Ndila Connect Services - DevOps & Cloud Solutions',
  description: 'Professional DevOps, cloud infrastructure, application development, security compliance, and observability services for enterprises.',
  openGraph: {
    title: 'Ndila Connect Services - DevOps & Cloud Solutions',
    description: 'Enterprise DevOps and cloud infrastructure solutions',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ndila.com',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutUsSection />
      <ServicesSection2 />
      <PortfolioSection />
      <StatsSection />
      <Testimonials />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
