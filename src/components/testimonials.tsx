import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollView } from "./scroll-view";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              About My Work
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              DevOps architect and cloud solutions specialist with hands-on experience 
              in enterprise infrastructure and automation. Passionate about delivering 
              reliable, scalable solutions that drive business success.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2">
            {/* Main Card - Professional Experience */}
            <Card className="grid grid-rows-[auto_1fr] gap-6 sm:col-span-2 sm:p-6 md:col-span-1">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/img/logo/mulaloScreenshot.png"
                    alt="Mulalo Dzivhani - DevOps Architect"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Mulalo Dzivhani</h3>
                    <p className="text-sm text-muted-foreground">
                      DevOps Architect & Cloud Solutions Specialist
                    </p>
                  </div>
                  <p className="text-sm">
                    Building and maintaining enterprise infrastructure with a focus on 
                    reliability, security, and scalability. Specialized in Kubernetes, 
                    CI/CD pipelines, and cloud architecture.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Side Card - Passion */}
            <Card className="grid grid-rows-[auto_1fr] gap-6 sm:p-6 md:col-span-1">
              <CardHeader className="p-0">
                <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/img/logo/BMWGermany.jpg"
                    alt="Professional Journey"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">Professional Journey</h3>
                    <p className="text-sm text-muted-foreground">
                      Experience & Expertise
                    </p>
                  </div>
                  <p className="text-sm">
                    Years of hands-on experience deploying and managing cloud infrastructure 
                    across AWS, Azure, and on-premises environments. Committed to automation, 
                    continuous improvement, and operational excellence.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
