import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FooterSection from '@/components/footer';

export const metadata: Metadata = {
  title: 'About Ndila Connect Services',
  description: 'Learn about our expertise in DevOps, cloud infrastructure, and enterprise solutions.',
  openGraph: {
    title: 'About Ndila Connect Services',
    description: 'Enterprise DevOps and cloud infrastructure consulting',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ndila.com'}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">About Ndila Connect Services</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ndila Connect Services is a specialized consulting firm dedicated to helping enterprises 
              design, build, and operate reliable, scalable, and secure digital infrastructure. 
              With deep expertise in DevOps, cloud architecture, and enterprise software development, 
              we partner with organizations to modernize their technology stack and optimize operations.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-600">
                To empower organizations with best-in-class DevOps practices, cloud-native architecture, 
                and automation solutions that drive business agility, reduce operational overhead, and 
                enable continuous delivery at scale.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-2xl font-bold mb-3">Our Expertise</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Enterprise DevOps platform design and implementation</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Multi-cloud architecture (AWS, Azure, GCP)</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Kubernetes and container orchestration</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Security compliance and governance</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span>Observability and incident management</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h2 className="text-2xl font-bold mb-3">Why Partner With Us</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Proven Track Record:</strong> Successfully delivered enterprise projects across multiple industries</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Technical Depth:</strong> Expert-level knowledge across the entire DevOps and cloud ecosystem</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Business Focused:</strong> Solutions designed to improve efficiency, reduce costs, and enable growth</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  <span><strong>Long-term Partnership:</strong> We invest in understanding your business goals and success</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 pt-8">
            <Link href="/contact">
              <Button size="lg">Get In Touch</Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="outline" size="lg">View Our Work</Button>
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
