import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import type { FC } from "react";

const BentoGrid: FC = () => {
  const images = [
    "/marquee/3d-card.png",
    "/marquee/animated-modal.png",
    "/marquee/animated-testimonials.webp",
    "/marquee/tooltip.png",
    "/marquee/github-globe.png",
    "/marquee/glare-card.png",
    "/marquee/layout-grid.png",
    "/marquee/flip-text.png",
    "/marquee/hero-highlight.png",
    "/marquee/carousel.webp",
    "/marquee/vanish-input.png",
    "/marquee/shooting-stars.png",
    "/marquee/signup-form.png",
    "/3d-marquee-logo.png",
    "/marquee/spotlight-new.webp",
    "/marquee/spotlight.png",
    "/marquee/parallax-scroll.png",
    "/marquee/tabs.png",
    "/marquee/tracing-beam.png",
    "/marquee/typewriter.png",
    "/marquee/glowing-effect.webp",
    "/marquee/hover-border.png",
    "/marquee/infinite-cards.png",
    "/marquee/lamp.png",
    "/marquee/macbook-scroll.png",
    "/marquee/meteors.png",
    "/marquee/moving-border.png",
    "/marquee/multi-step-loader.png",
    "/marquee/vortex.png",
    "/marquee/wobble-card.png",
    "/marquee/world-map.webp",
  ];

  return (
    <div className="mx-auto w-full max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800 sm:rounded-2xl md:rounded-3xl sm:p-1 md:p-2 -mt-24 lg:-mt-32">
      <ThreeDMarquee images={images} />
    </div>
  );
};

export default BentoGrid;
