import { SectionHeader } from "../section-header";
import { ContactForm } from "../contact-form";
import { MotionWrapper } from "../motion-wrapper";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";

const socialLinks = [
  { icon: Mail, href: "mailto:kariakistephen809@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/kariakistephen58/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Kariaki58", label: "GitHub" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeader
          title="Get In Touch"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
          className="mb-16"
        />
        <MotionWrapper>
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="flex flex-col gap-6">
                <h3 className="text-xl font-semibold text-foreground font-headline">Connect with me</h3>
                <p className="text-muted-foreground">
                    I&apos;m active on social media. Feel free to connect, follow, or drop me a message.
                </p>
                <div className="flex flex-col gap-4">
                    {socialLinks.map(social => (
                        <Button key={social.label} variant="outline" asChild className="justify-start">
                            <a href={social.href} target="_blank" rel="noopener noreferrer">
                                <social.icon className="mr-2 h-4 w-4" />
                                {social.label}
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
