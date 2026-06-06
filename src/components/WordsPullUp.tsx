import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function WordsPullUp({ text, className = "", showAsterisk = false }: { text: string, className?: string, showAsterisk?: boolean }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  const words = text.trim().split(/\s+/).filter(Boolean);

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-visible mr-[0.3em] last:mr-0 align-bottom">
          <motion.span
            className="inline-block relative"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {word}
            {showAsterisk && i === words.length - 1 && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] font-sans">*</span>
            )}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
