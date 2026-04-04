"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "../../utils/utils";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

const directionMap = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
  ...props
}: RevealProps) {
  const d = directionMap[direction];
  const initial = {
    opacity: 0,
    x: (d.x ?? 0) * distance,
    y: (d.y ?? 0) * distance,
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
