import React from 'react';
import Tilt from 'react-tilt';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  options?: {
    reverse?: boolean;
    max?: number;
    perspective?: number;
    scale?: number;
    speed?: number;
    transition?: boolean;
    axis?: string | null;
    reset?: boolean;
    easing?: string;
  };
}

const TiltCard: React.FC<TiltCardProps> = ({ 
  children, 
  className = "",
  options = {}
}) => {
  const defaultOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.02,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    ...options
  };

  return (
    <Tilt className={className} options={defaultOptions}>
      {children}
    </Tilt>
  );
};

export default TiltCard;