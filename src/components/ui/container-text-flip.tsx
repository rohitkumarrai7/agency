"use client";

import React, { useState, useEffect, useId } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["Startups", "Businesses", "Agencies", "Individuals"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef<HTMLDivElement>(null);

  const getMaxAvailableWidth = () => {
    const parent = textRef.current?.parentElement;
    if (parent?.clientWidth) return parent.clientWidth;
    return typeof window !== "undefined" ? window.innerWidth : 0;
  };

  const updateWidthForWord = () => {
    if (textRef.current) {
      const parent = textRef.current.parentElement as HTMLElement | null;
      const computed = parent ? window.getComputedStyle(parent) : null;
      const paddingLeft = computed ? parseFloat(computed.paddingLeft || "0") : 0;
      const paddingRight = computed ? parseFloat(computed.paddingRight || "0") : 0;
      const paddingTotal = paddingLeft + paddingRight;

      // Ensure the background pill extends past the last letter.
      const extraBreathingRoom = 12;
      const textWidth = textRef.current.scrollWidth + paddingTotal + extraBreathingRoom;
      const maxWidth = getMaxAvailableWidth();
      if (maxWidth) {
        setWidth(Math.min(textWidth, maxWidth));
      } else {
        setWidth(textWidth);
      }
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const onResize = () => updateWidthForWord();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.p
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block max-w-full rounded-lg px-4 py-1 text-center text-[clamp(2.5rem,10vw,4.5rem)] font-bold leading-none text-black sm:px-6 md:text-7xl dark:text-white",
        "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,0_4px_8px_#d1d5db]",
        "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),0_4px_8px_#00000052]",
        className,
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.p>
  );
}
