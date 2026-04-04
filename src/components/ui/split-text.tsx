"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "../../utils/utils";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const wordVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export function SplitText({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  stagger = 0.08,
}: SplitTextProps) {
  const MotionTag = motion.create(Tag);
  const words = text.split(" ");

  return (
    <MotionTag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      animate="visible"
      custom={stagger}
      variants={containerVariants}
      transition={{ delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.25em] inline-block"
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}

/* Scroll-triggered variant */
export function SplitTextInView({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.06,
}: SplitTextProps) {
  const MotionTag = motion.create(Tag);
  const words = text.split(" ");

  return (
    <MotionTag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={stagger}
      variants={containerVariants}
      transition={{ delayChildren: delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="mr-[0.25em] inline-block"
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
