"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useCallback, useRef } from "react";
import type { ReactNode } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string | ReactNode;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [isDuplicated, setIsDuplicated] = useState(false);
  const isHoveredRef = useRef(false);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef(0);
  const lastTimeRef = useRef<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getSpeedValue = useCallback(() => {
    if (speed === "fast") return 50; // pixels per second
    if (speed === "normal") return 30;
    return 20; // slow
  }, [speed]);

  // Use requestAnimationFrame for smooth animation that works on mobile
  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current || isDuplicated) return;

    // Duplicate items for seamless loop
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem);
      }
    });

    setIsDuplicated(true);
  }, [isDuplicated]);

  // Animation loop using requestAnimationFrame
  useEffect(() => {
    if (!scrollerRef.current || !isDuplicated) return;

    const speedValue = getSpeedValue();
    const scrollerElement = scrollerRef.current;

    const animate = (currentTime: number) => {
      if (!scrollerElement) return;

      if (lastTimeRef.current === 0) {
        lastTimeRef.current = currentTime;
      }

      const deltaTime = (currentTime - lastTimeRef.current) / 1000; // Convert to seconds
      lastTimeRef.current = currentTime;

      // Check hover state using ref instead of state to avoid re-renders
      const shouldPause = !isMobile && pauseOnHover && isHoveredRef.current;
      
      if (!shouldPause) {
        const movement = speedValue * deltaTime;
        if (direction === "left") {
          positionRef.current -= movement;
        } else {
          positionRef.current += movement;
        }

        // Get the width of the original content (half since we duplicated)
        const contentWidth = scrollerElement.scrollWidth / 2;

        // Reset position for seamless loop
        if (direction === "left" && positionRef.current <= -contentWidth) {
          positionRef.current += contentWidth;
        } else if (direction === "right" && positionRef.current >= 0) {
          positionRef.current -= contentWidth;
        }

        scrollerElement.style.transform = `translate3d(${positionRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [direction, getSpeedValue, isDuplicated, isMobile, pauseOnHover]);

  // Handle visibility change - restart animation when page becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        lastTimeRef.current = 0; // Reset time to prevent jumps
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => {
        if (!isMobile && pauseOnHover) {
          isHoveredRef.current = true;
        }
      }}
      onMouseLeave={() => {
        if (!isMobile && pauseOnHover) {
          isHoveredRef.current = false;
        }
      }}
      onTouchStart={(e) => {
        // Prevent touch from triggering hover states on mobile
        e.currentTarget.style.pointerEvents = 'auto';
      }}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
        )}
        style={{
          willChange: "transform",
        }}
      >
        {items.map((item) => (
          <li
            className="relative w-87.5 max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-112.5 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%+4px)] w-[calc(100%+4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
