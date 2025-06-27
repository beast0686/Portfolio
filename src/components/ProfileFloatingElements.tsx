import React from 'react';
import { motion } from 'framer-motion';

const ProfileFloatingElements: React.FC = () => {
  // Wave ring configurations
  const waveRings = [
    { id: 1, size: 120, delay: 0, color: 'from-blue-500/30 to-cyan-500/20' },
    { id: 2, size: 140, delay: 0.5, color: 'from-purple-500/30 to-pink-500/20' },
    { id: 3, size: 160, delay: 1, color: 'from-indigo-500/30 to-blue-500/20' },
  ];

  return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          {/* Profile Picture Placeholder */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />

          {/* Wave Rings */}
          {waveRings.map((ring) => (
              <motion.div
                  key={ring.id}
                  className={`absolute inset-0 rounded-full bg-gradient-to-r ${ring.color} border border-white/10 pointer-events-auto`}
                  style={{
                    width: ring.size,
                    height: ring.size,
                    margin: `calc(-${ring.size / 2}px + 50%)`, // Center the rings
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4 + ring.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: ring.delay,
                    times: [0, 0.5, 1],
                  }}
                  whileHover={{
                    scale: 1.3,
                    opacity: 0.7,
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                    transition: { duration: 0.3 },
                  }}
                  onClick={() => {
                    // Trigger ripple effect on click
                    return {
                      scale: [1.2, 1.4, 1.2],
                      opacity: [0.7, 0.9, 0.7],
                      transition: { duration: 0.6, times: [0, 0.5, 1] },
                    };
                  }}
              />
          ))}
        </div>
      </div>
  );
};

export default ProfileFloatingElements;