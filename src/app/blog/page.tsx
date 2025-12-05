import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FooterSection from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blog & Insights - Ndila Connect Services',
  description: 'Technical insights, DevOps best practices, and industry trends.',
  openGraph: {
    title: 'Blog & Insights - Ndila Connect Services',
    description: 'Technical insights, DevOps best practices, and industry trends.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://ndila.com'}/blog`,
  },
};

const BLOG_POSTS = [
  {
    id: 1,
    title: 'Kubernetes Best Practices for Production',
    excerpt: 'Learn essential patterns for running Kubernetes in production environments securely and reliably.',
    date: '2024-12-01',
    author: 'Ndila Connect',
    slug: 'kubernetes-best-practices',
  },
  {
    id: 2,
    title: 'Multi-Cloud Strategy: Avoiding Vendor Lock-in',
    excerpt: 'How to design cloud architecture that provides flexibility across AWS, Azure, and GCP.',
    date: '2024-11-28',
    author: 'Ndila Connect',
    slug: 'multi-cloud-strategy',
  },
  {
    id: 3,
    title: 'Implementing Zero-Trust Security Architecture',
    excerpt: 'A comprehensive guide to modern security practices with identity verification and least privilege access.',
    date: '2024-11-15',
    author: 'Ndila Connect',
    slug: 'zero-trust-security',
  },
  {
    id: 4,
    title: 'CI/CD Pipeline Optimization: Reducing Deployment Time',
    excerpt: 'Strategies to accelerate your CI/CD workflows while maintaining code quality and reliability.',
    date: '2024-11-01',
    author: 'Ndila Connect',
    slug: 'cicd-optimization',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold">Insights & Articles</h1>
            <p className="text-lg text-gray-600">
              Technical guidance, DevOps best practices, and industry insights to help you succeed.
            </p>
          </div>

          <div className="space-y-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="border-b pb-8 hover:bg-gray-50 p-6 rounded-lg transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <h2 className="text-2xl font-bold hover:text-blue-600">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="border-t pt-12 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-600 mb-6">
              Get the latest DevOps insights and best practices delivered to your inbox.
            </p>
            <form className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 border rounded-lg"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
