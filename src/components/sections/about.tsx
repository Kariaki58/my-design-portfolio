import Image from "next/image";
import { MotionWrapper } from "../motion-wrapper";
import { SectionHeader } from "../section-header";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeader title="About Me" className="mb-16"/>
        <div className="grid items-center gap-12 lg:grid-cols-2">
            <MotionWrapper>
              <div className="relative aspect-square w-full max-w-sm mx-auto">
                <Image
                  src="https://placehold.co/600x600.png"
                  alt="Stephen, the web developer"
                  width={600}
                  height={600}
                  className="rounded-full object-cover"
                  data-ai-hint="developer portrait"
                />
                 <div className="absolute inset-0 rounded-full border-2 border-accent -rotate-6 transition-transform group-hover:rotate-0" />
              </div>
            </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                I&apos;m Stephen, a passionate web developer with 3+ years of experience
                crafting pixel-perfect, conversion-driven websites. My journey into
                code started with a fascination for how things work on the internet,
                and it has since blossomed into a full-fledged career dedicated to
                building beautiful and functional digital experiences.
              </p>
              <p>
                I thrive on solving complex problems and turning ideas into reality.
                Using modern technologies like <span className="text-foreground font-medium">React, Next.js, and Tailwind CSS</span>,
                I focus on creating applications that are not only visually appealing
                but also highly performant and user-friendly. My goal is to help
                businesses elevate their online presence and achieve tangible results.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
}
