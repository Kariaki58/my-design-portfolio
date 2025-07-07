import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ProjectsSection from '@/components/sections/projects';
import TestimonialsSection from '@/components/sections/testimonials';
import ProcessSection from '@/components/sections/process';
import AiInsightsSection from '@/components/sections/ai-insights';
import CtaSection from '@/components/sections/cta';
import ContactSection from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ProcessSection />
        <AiInsightsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
