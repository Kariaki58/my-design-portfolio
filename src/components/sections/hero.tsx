"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] w-full">
      <div className="absolute inset-0 w-full h-full animated-gradient -z-10" />
      <div className="container flex flex-col items-center justify-center h-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-foreground to-muted-foreground md:text-7xl font-headline"
          >
            I build stunning websites that convert visitors into customers.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-muted-foreground md:text-xl"
          >
            Full-stack web developer with a focus on performance, clean design,
            and business results.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row"
          >
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Hire Me</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </a>
      </div>
    </section>
  );
}
