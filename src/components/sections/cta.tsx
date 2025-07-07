import { Button } from "@/components/ui/button";
import { MotionWrapper } from "../motion-wrapper";

export default function CtaSection() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden">
       <div className="absolute inset-0 w-full h-full animated-gradient-cta -z-10" />
      <div className="container">
        <MotionWrapper className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl font-headline">
            Ready to elevate your online presence?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Let&apos;s build something amazing together. Whether you have a specific
            project in mind or just want to discuss possibilities, I&apos;m here to
            help.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">Book a Free Consultation</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Send a Message</a>
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
