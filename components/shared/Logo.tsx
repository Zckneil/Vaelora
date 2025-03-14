import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: number;
  color?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 48, color = 'currentColor', className = '' }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Outer glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feComposite in="blur" in2="SourceGraphic" operator="over" />
        </filter>
      </defs>

      {/* Background geometric shapes */}
      <motion.path
        d="M50 95L95 15H5L50 95Z"
        fill="rgba(255, 255, 255, 0.1)"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      />

      {/* Main "V" shape */}
      <motion.path
        d="M50 85L85 20H65L50 60L35 20H15L50 85Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Decorative lines */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.line
          x1="50"
          y1="60"
          x2="35"
          y2="20"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.5"
        />
        <motion.line
          x1="50"
          y1="60"
          x2="65"
          y2="20"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="2 4"
          opacity="0.5"
        />
      </motion.g>

      {/* Accent points */}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <circle cx="50" cy="85" r="2" fill={color} />
        <circle cx="50" cy="60" r="2" fill={color} />
        <circle cx="35" cy="20" r="2" fill={color} />
        <circle cx="65" cy="20" r="2" fill={color} />
      </motion.g>

      {/* Pulsing center point */}
      <motion.circle
        cx="50"
        cy="60"
        r="3"
        fill={color}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
};

export default Logo; 