import './App.css';
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect';
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { motion } from "motion/react";
import PillNav  from "@/components/ui/PillNav";
import LogoLoop from '@/components/ui/LogoLoop';
import BentoGrid from '@/components/ui/right-side-image-hero';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import ClickSpark from "@/components/ui/ClickSpark";
import FeaturesSectionDemo from '@/components/ui/features-section-demo-1';
import WorkflowSection from '@/components/ui/workflow-section';
import PreviousWorkSection from '@/components/ui/previous-work-section';
import StatsSection from '@/components/ui/stats-section';
import TestimonialsSection from '@/components/ui/testimonials-section';
import BookingSection from '@/components/ui/booking-section';
import Footer from '@/components/ui/footer';

const techLogos = [
  { node: <SiReact className="text-neutral-700 dark:text-neutral-300" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-neutral-700 dark:text-neutral-300" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-neutral-700 dark:text-neutral-300" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-neutral-700 dark:text-neutral-300" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export function ContainerTextFlipDemo() {
  return (
    <ContainerTextFlip
      words={["Startups", "Businesses", "Agencies", "Enterprises"]}
    />
  );
}

function App() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-neutral-50">
      <ClickSpark
        sparkColor='#000000'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Hero Section */}
        <section id="home" className="relative w-full overflow-x-hidden">
        {/* Background Ripple Effect - Top Half */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-1/2 flex items-start justify-center pt-10 sm:pt-12">
          <div className="animate-fade-in">
            <BackgroundRippleEffect rows={8} cols={27} cellSize={56} />
          </div>
        </div>

        <PillNav
          initialLoadAnimation
          className="custom-nav"
          logo="/divfixer logo.png"
          items={[
            { label: 'Home', href: '#home' },
            { label: 'About', href: '#about' },
            { label: 'Services', href: '#services' },
            { label: 'Contact', href: '#booking' }
          ]}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-svh items-start pt-28 sm:pt-32 md:pt-24 lg:items-center lg:pt-26">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2">
              {/* Left: Text */}
              <div className="min-w-0">
                <h1 className="text-left text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl leading-[1.2]! md:leading-[1.1]!">
                  AI Agents & Automation for
                  <div className="py-2 md:py-4">
                    <ContainerTextFlip />
                  </div>
                  That Drive Real Results
                </h1>
                <p className="mt-6 max-w-xl text-left text-base leading-relaxed text-neutral-600 sm:text-lg">
                  We build AI voice agents, intelligent automation workflows, and custom software
                  that help businesses scale faster—from 24/7 AI-powered calls to end-to-end process automation.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {/* Primary CTA - Book Call */}
                  <motion.button
                    onClick={() => handleScrollToSection('booking')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block rounded-lg px-6 py-3 text-center font-semibold text-white transition-all duration-300 ease-out
                      [background:linear-gradient(to_bottom,#000,#1a1a1a)]
                      shadow-[inset_0_-1px_#0a0a0a,inset_0_0_0_1px_#333,0_4px_8px_rgba(0,0,0,0.3)]
                      hover:shadow-[inset_0_-1px_#0a0a0a,inset_0_0_0_1px_#333,0_6px_12px_rgba(0,0,0,0.4)]
                      active:shadow-[inset_0_-1px_#0a0a0a,inset_0_0_0_1px_#333,0_2px_4px_rgba(0,0,0,0.2)]"
                  >
                    Book Call
                  </motion.button>

                  {/* Secondary - See our work */}
                  <motion.button
                    onClick={() => handleScrollToSection('work')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block rounded-lg px-6 py-3 text-center font-semibold text-neutral-900 transition-all duration-300 ease-out
                      [background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]
                      shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,0_4px_8px_#d1d5db]
                      hover:shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,0_6px_12px_#bfdbfe]
                      dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]
                      dark:text-white
                      dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),0_4px_8px_#00000052]
                      dark:hover:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),0_6px_12px_rgba(59,130,246,0.3)]"
                  >
                    See our work
                  </motion.button>
                </div>

                {/* Logo loop (horizontal) */}
                <div className="relative mt-10 h-30 w-full overflow-hidden sm:h-40 md:h-50">
                  <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="left"
                    logoHeight={48}
                    gap={40}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Technology partners"
                  />
                </div>
              </div>

              {/* Right: Bento Grid */}
              <div className="flex min-w-0 justify-center lg:justify-end">
                <BentoGrid />
              </div>
            </div>
          </div>
        </div>
      </section>

        <section id="services">
          <FeaturesSectionDemo />
        </section>

        <section id="about">
          <WorkflowSection />
        </section>

        <PreviousWorkSection />

        <StatsSection />

        <TestimonialsSection />

        <BookingSection />

        <Footer />

      </ClickSpark>
      
    </div>
  )
}

export default App