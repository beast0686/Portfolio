import React from 'react';
import { motion } from 'framer-motion';

const ProfileFloatingElements: React.FC = () => {
  // Specific elements around the profile picture
  const profileElements = [
    { id: 1, size: 30, angle: 0, radius: 200, color: 'from-blue-400 to-cyan-400' },
    { id: 2, size: 25, angle: 60, radius: 180, color: 'from-purple-400 to-pink-400' },
    { id: 3, size: 35, angle: 120, radius: 220, color: 'from-green-400 to-blue-400' },
    { id: 4, size: 20, angle: 180, radius: 160, color: 'from-yellow-400 to-orange-400' },
    { id: 5, size: 28, angle: 240, radius: 200, color: 'from-indigo-400 to-purple-400' },
    { id: 6, size: 32, angle: 300, radius: 190, color: 'from-pink-400 to-red-400' },
  ];

  return (
      <div className="absolute inset-0 pointer-events-none">
        {profileElements.map((element, index) => (
            <motion.div
                key={element.id}
                className="absolute top-1/2 left-1/2 pointer-events-auto"
                style={{
                  width: element.size,
                  height: element.size,
                }}
                animate={{
                  rotate: [element.angle, element.angle + 360],
                  x: [
                    Math.cos((element.angle * Math.PI) / 180) * element.radius,
                    Math.cos(((element.angle + 360) * Math.PI) / 180) * element.radius,
                  ],
                  y: [
                    Math.sin((element.angle * Math.PI) / 180) * element.radius,
                    Math.sin(((element.angle + 360) * Math.PI) / 180) * element.radius,
                  ],
                }}
                transition={{
                  duration: 20 + index * 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.8,
                  transition: { duration: 0.3 }
                }}
            >
              <motion.div
                  className={`w-full h-full rounded-full bg-gradient-to-r ${element.color} opacity-20 backdrop-blur-sm border border-white/20`}
                  whileHover={{
                    opacity: 0.6,
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
                    rotate: 180,
                  }}
                  transition={{ duration: 0.3 }}
              />
            </motion.div>
        ))}
      </div>
  );
};

export default ProfileFloatingElements;