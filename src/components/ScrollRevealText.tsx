import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

function AnimatedChar({ char, progress, scrollYProgress }: { char: string, progress: number, scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, progress - 0.1), Math.min(1, progress + 0.05)],
    [0.2, 1]
  );
  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
}

export function ScrollRevealText({ text, className = "" }: { text: string, className?: string }) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const chars = text.split('');

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => (
        <AnimatedChar 
          key={i} 
          char={char} 
          progress={i / chars.length} 
          scrollYProgress={scrollYProgress} 
        />
      ))}
    </p>
  );
}
