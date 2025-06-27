import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  // Generate random positions and animation properties for floating elements
  const elements = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20, // 20-60px
    initialX: Math.random() * 100, // 0-100%
    initialY: Math.random() * 100, // 0-100%
    duration: Math.random() * 20 + 15, // 15-35s
    delay: Math.random() * 5, // 0-5s delay
    opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4 opacity
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute pointer-events-auto"
          style={{
            left: `${element.initialX}%`,
            top: `${element.initialY}%`,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            ease: "linear",
            delay: element.delay,
          }}
          whileHover={{
            scale: 1.5,
            opacity: 0.8,
            transition: { duration: 0.3 }
          }}
        >
          <motion.div
            className="rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-white/10"
            style={{
              width: element.size,
              height: element.size,
              opacity: element.opacity,
            }}
            whileHover={{
              background: "linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(139, 92, 246, 0.4))",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;