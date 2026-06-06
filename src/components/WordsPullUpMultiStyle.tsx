import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function WordsPullUpMultiStyle({ segments, className = "" }: { segments: { text: string; className?: string }[], className?: string }) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  // Flatten words into a single array
  const allWords = segments.flatMap((segment) => {
    const words = segment.text.trim().split(/\s+/).filter(Boolean);
    return words.map(word => ({ word, className: segment.className || "" }));
  });

  return (
    <span ref={containerRef} className={`inline-block ${className}`}>
      {allWords.map((item, i) => {
        return (
          <span key={i} className={`inline-block overflow-hidden mr-[0.3em] mb-[0.1em] align-bottom ${item.className}`}>
            <motion.span
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              {item.word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
