import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Technical Excellence",
    description:
      "Deep expertise in DevOps, cloud architecture, and modern software practices.",
  },
  {
    title: "Business Focused",
    description:
      "Solutions designed to reduce costs, improve efficiency, and enable growth.",
  },

  {
    title: "Reliable & Supportive",
    description:
      "24/7 support and proactive monitoring ensure your systems run smoothly.",
  },
  {
    title: "Security First",
    description:
      "Enterprise-grade security practices and compliance built into every solution.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              About Ndila Connect Services
            </h2>
          </ScrollView>
          <ScrollView>
            <p>
              Ndila Connect Services is a specialized consulting firm dedicated to helping enterprises
              design, build, and operate reliable, scalable, and secure digital infrastructure.
              With deep expertise in DevOps, cloud architecture, and enterprise software development,
              we partner with organizations to modernize their technology stack and optimize operations.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <div className="rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 aspect-[16/9] w-full flex items-center justify-center">
            <div className="text-gray-600 text-center">
              <p className="text-lg font-semibold">Team Photo</p>
              <p className="text-sm">[Professional team image]</p>
            </div>
          </div>
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
