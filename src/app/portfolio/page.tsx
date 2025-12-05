import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PORTFOLIO_CONTENT } from '@/content/portfolio';
import FooterSection from '@/components/footer';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Portfolio - Case Studies | Ndila Connect Services',
  description: 'View our latest projects and case studies showcasing successful DevOps, cloud, and software solutions.',
  openGraph: {
    title: 'Portfolio - Case Studies | Ndila Connect Services',
    description: 'View our latest projects and case studies showcasing successful DevOps, cloud, and software solutions.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ndila.com'}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Our Portfolio</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real-world projects and case studies demonstrating our expertise in DevOps, 
              cloud architecture, and enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {PORTFOLIO_CONTENT.map((project) => (
              <div
                key={project.name}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <p className="text-sm">[Project Image]</p>
                    <p className="text-xs mt-2">{project.name}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Link href={project.url}>
                    <Button variant="outline" className="w-full">
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-12 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-gray-600 mb-6">
              Let&apos;s discuss how we can help you achieve your infrastructure and business goals.
            </p>
            <Link href="/contact">
              <Button size="lg">Start Your Project</Button>
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
