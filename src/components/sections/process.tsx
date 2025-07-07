"use client";

import { motion } from "framer-motion";
import { Search, PencilRuler, Code, Rocket } from "lucide-react";
import { SectionHeader } from "../section-header";

const processSteps = [
  {
    icon: Search,
    title: "Discovery",
    description: "We start by understanding your goals, audience, and project requirements to build a solid foundation.",
  },
  {
    icon: PencilRuler,
    title: "Design",
    description: "Next, I create wireframes and high-fidelity mockups, focusing on user experience and visual appeal.",
  },
  {
    icon: Code,
    title: "Development",
    description: "This is where the magic happens. I write clean, efficient code to bring the design to life.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "After rigorous testing, we deploy the site. I provide ongoing support to ensure everything runs smoothly.",
  },
];

const listVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5
    }
  },
};

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 sm:py-32">
      <div className="container">
        <SectionHeader
          title="My Process"
          subtitle="A streamlined approach to ensure your project is a success from start to finish."
          className="mb-16"
        />
        <div className="max-w-3xl mx-auto">
          <motion.ol
            className="relative border-l-2 border-accent/20"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {processSteps.map((step, index) => (
              <motion.li key={index} className="mb-10 ml-8" variants={itemVariants}>
                <span className="absolute flex items-center justify-center w-12 h-12 bg-card rounded-full -left-6 border-2 border-accent">
                  <step.icon className="w-6 h-6 text-accent" />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-foreground font-headline">
                  {step.title}
                </h3>
                <p className="text-base font-normal text-muted-foreground">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
