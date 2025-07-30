import React from 'react';
import { motion } from 'framer-motion';

interface GlowingBorderProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
}

const GlowingBorder: React.FC<GlowingBorderProps> = ({
  children,
  className = "",
  glowColor = "blue",
  borderRadius = "rounded-xl"
}) => {
  const glowColors = {
    blue: "shadow-blue-500/50 border-blue-500/50",
    purple: "shadow-purple-500/50 border-purple-500/50",
    green: "shadow-green-500/50 border-green-500/50",
    pink: "shadow-pink-500/50 border-pink-500/50",
    cyan: "shadow-cyan-500/50 border-cyan-500/50",
  };

  return (
    <motion.div
      className={`relative ${borderRadius} ${className}`}
      whileHover={{
        boxShadow: `0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)`,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`absolute inset-0 ${borderRadius} border-2 ${glowColors[glowColor as keyof typeof glowColors] || glowColors.blue} opacity-0`}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowingBorder;