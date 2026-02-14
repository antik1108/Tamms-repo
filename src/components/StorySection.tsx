
import * as React from 'react';
import { motion } from 'framer-motion';

interface StorySectionProps {
  children: React.ReactNode;
  id: string;
  center?: boolean;
  className?: string;
}

const StorySection: React.FC<StorySectionProps> = ({ children, id, center, className = "" }) => {
  return (
    <section
      id={id}
      className={`min-h-screen w-full relative flex flex-col ${center ? 'items-center justify-center' : ''} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default StorySection;
