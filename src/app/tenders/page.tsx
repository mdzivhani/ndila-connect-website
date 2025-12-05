import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FooterSection from '@/components/footer';

export const metadata: Metadata = {
  title: 'Tenders & Compliance - Ndila Connect Services',
  description: 'Company profile, certifications, compliance documents, and tender responses.',
  openGraph: {
    title: 'Tenders & Compliance - Ndila Connect Services',
    description: 'Company profile, certifications, compliance documents, and tender responses.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ndila.com'}/tenders`,
  },
};

export default function TendersPage() {
  return (
    <main className="min-h-screen">
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Tenders & Compliance</h1>
            <p className="text-lg text-gray-600">
              Company documentation, certifications, and compliance information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Company Profile */}
            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Company Profile</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive company overview including mission, vision, team expertise, and company achievements.
              </p>
              <Button variant="outline" className="w-full">
                Download PDF
              </Button>
            </div>

            {/* CV/Resume */}
            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Founder CV & Experience</h3>
              <p className="text-gray-600 mb-6">
                Detailed curriculum vitae showcasing professional experience, skills, and career achievements.
              </p>
              <Button variant="outline" className="w-full">
                Download CV
              </Button>
            </div>

            {/* Certifications */}
            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Degrees & Certifications</h3>
              <p className="text-gray-600 mb-6">
                Professional certifications including AWS, Azure, Kubernetes, and industry-recognized qualifications.
              </p>
              <Button variant="outline" className="w-full">
                View Certificates
              </Button>
            </div>

            {/* Compliance */}
            <div className="border rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Compliance Documents</h3>
              <p className="text-gray-600 mb-6">
                SOC 2, ISO 27001, and other compliance certifications demonstrating our commitment to security.
              </p>
              <Button variant="outline" className="w-full">
                View Compliance
              </Button>
            </div>
          </div>

          <div className="border rounded-lg p-8 mb-12 bg-gray-50">
            <h3 className="text-2xl font-bold mb-6">Experience & Expertise</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-bold mb-2">Industries Served</h4>
                <p className="text-gray-600">
                  Financial Services • E-Commerce • Healthcare • SaaS • Telecommunications • Manufacturing
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-bold mb-2">Technology Expertise</h4>
                <p className="text-gray-600">
                  AWS • Azure • GCP • Kubernetes • Docker • Terraform • Jenkins • GitHub Actions • Ansible
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h4 className="font-bold mb-2">Compliance & Security</h4>
                <p className="text-gray-600">
                  SOC 2 Type II • ISO 27001 • HIPAA • PCI-DSS • GDPR • Zero-Trust Architecture
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Submit a Tender Response</h3>
            <p className="text-gray-600 mb-6">
              Have a tender or RFP? We'd love to discuss how we can support your project.
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
