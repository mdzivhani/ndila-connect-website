import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SERVICES_LIST } from '@/content/services';
import FooterSection from '@/components/footer';
import { ScrollView } from '@/components/scroll-view';

export const metadata: Metadata = {
  title: 'Services - Ndila Connect Services',
  description: 'DevOps, Cloud Infrastructure, Application Development, Security & Compliance, and Observability solutions.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive DevOps, cloud, and software solutions tailored to your business needs.
              From infrastructure design to 24/7 operational support.
            </p>
          </div>

          <div className="space-y-12">
            {SERVICES_LIST.map((service, index) => (
              <div key={service.name} className="border-b pb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold mb-3">{service.name}</h2>
                    <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Link href={service.url} className="w-full">
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help optimize your infrastructure and operations.
            </p>
            <Link href="/contact">
              <Button size="lg">Request a Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
