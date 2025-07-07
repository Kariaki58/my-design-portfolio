"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "../section-header";
import { TechIcon } from "../icons";

const skills = {
  Frontend: ["HTML", "CSS", "Tailwind CSS", "React", "Next.js"],
  Backend: ["Node.js", "Express", "Firebase"],
  Tools: ["Git", "Figma", "Vercel"],
};

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

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.2, rotate: 10, transition: { duration: 0.2 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-background/50">
      <div className="container">
        <SectionHeader
          title="My Tech Stack"
          subtitle="Technologies I use to build modern, high-performance web applications."
          className="mb-16"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, techList], index) => (
            <motion.div
              key={category}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full text-center bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-accent font-headline">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-8">
                    {techList.map((tech) => (
                      <motion.div
                        key={tech}
                        variants={iconVariants}
                        initial="rest"
                        whileHover="hover"
                        className="flex flex-col items-center gap-2"
                      >
                        <div className="flex items-center justify-center h-16 text-primary">
                          <TechIcon name={tech} />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">{tech}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
