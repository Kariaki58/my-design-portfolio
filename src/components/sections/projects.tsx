"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { SectionHeader } from "../section-header";

const projects = [
  {
    name: "E-commerce Platform",
    description: "A full-featured e-commerce site with a custom CMS, increasing client conversion by 45%.",
    image: "https://placehold.co/600x400.png",
    hint: "online store",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    name: "SaaS Dashboard",
    description: "A data visualization dashboard for a SaaS product, leading to a 30% increase in user engagement.",
    image: "https://placehold.co/600x400.png",
    hint: "analytics dashboard",
    technologies: ["React", "Node.js", "Express", "D3.js"],
    link: "#",
  },
  {
    name: "Portfolio Website",
    description: "A personal portfolio for a designer, showcasing their work with a clean and modern interface.",
    image: "https://placehold.co/600x400.png",
    hint: "creative portfolio",
    technologies: ["Next.js", "Framer Motion", "Contentful"],
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeader
          title="My Work"
          subtitle="A selection of my best projects. See how I solve problems and deliver results."
          className="mb-16"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 border-2 border-transparent hover:border-accent hover:shadow-2xl hover:shadow-accent/20">
                <CardHeader className="p-0">
                  <div className="relative w-full aspect-video">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      data-ai-hint={project.hint}
                    />
                  </div>
                </CardHeader>
                <div className="flex flex-col flex-grow p-6">
                  <CardTitle className="text-xl font-bold font-headline">{project.name}</CardTitle>
                  <CardDescription className="mt-2 text-muted-foreground flex-grow">
                    {project.description}
                  </CardDescription>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <CardFooter className="p-6 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ExternalLink className="ml-2"/>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
