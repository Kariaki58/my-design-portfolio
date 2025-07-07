"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "../section-header";
import { MotionWrapper } from "../motion-wrapper";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechCorp",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=faces",
    hint: "professional woman portrait",
    quote:
      "Working with Stephen was a game-changer. He didn't just build a website; he built a conversion machine. Our online sales have doubled since the launch!",
  },
  {
    name: "Michael Chen",
    title: "Founder, Creative Minds",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces",
    hint: "professional man portrait",
    quote:
      "The attention to detail and creative input were outstanding. Stephen understood our vision perfectly and delivered a site that exceeded all our expectations.",
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director, InnovateX",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces",
    hint: "smiling woman portrait",
    quote:
      "Stephen is a true professional. The development process was smooth, communication was excellent, and the final product is both beautiful and highly functional.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background/50">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          title="What My Clients Say"
          subtitle="Real feedback from people I've had the pleasure to work with."
          className="mb-12 sm:mb-16"
        />
        <MotionWrapper>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 px-4">
                    <div className="p-1 h-full">
                      <Card className="h-full bg-card/50 backdrop-blur-sm">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={80}
                            height={80}
                            className="rounded-full mb-4 border-2 border-accent object-cover aspect-square"
                            data-ai-hint={testimonial.hint}
                          />
                          <p className="italic text-muted-foreground mb-4">
                            &ldquo;{testimonial.quote}&rdquo;
                          </p>
                          <p className="font-bold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-accent">{testimonial.title}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex absolute left-0 -translate-x-8 top-1/2 -translate-y-1/2" />
              <CarouselNext className="hidden sm:flex absolute right-0 translate-x-8 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}