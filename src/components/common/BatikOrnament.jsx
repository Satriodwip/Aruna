import React from 'react';
import { motion } from 'framer-motion';

export default function BatikOrnament({
  position = 'left', // 'left', 'right'
  color = 'green', // 'green', 'gold', 'dark'
  size = 140,
  className = '',
}) {
  const colorMap = {
    green: {
      fill: '#10B981',
      stroke: '#059669',
      center: '#FDE047',
    },
    gold: {
      fill: '#F59E0B',
      stroke: '#D97706',
      center: '#FEF08A',
    },
    dark: {
      fill: '#0F172A',
      stroke: '#334155',
      center: '#F59E0B',
    },
  };

  const scheme = colorMap[color] || colorMap.green;

  return (
    <motion.div
      animate={{
        rotate: position === 'left' ? [0, 18, -12, 0] : [0, -18, 12, 0],
        y: [0, -14, 14, 0],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      className={`pointer-events-none drop-shadow-xl z-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* 8-Petal Traditional Kawung & Truntum Hybrid Flower */}
        <circle cx="50" cy="50" r="46" fill={scheme.fill} fillOpacity="0.15" />
        
        {/* Petals */}
        <path d="M50 8C58 24 76 42 92 50C76 58 58 76 50 92C42 76 24 58 8 50C24 42 42 24 50 8Z" fill={scheme.fill} fillOpacity="0.85" stroke={scheme.stroke} strokeWidth="2"/>
        <path d="M50 20C55 32 68 45 80 50C68 55 55 68 50 80C45 68 32 55 20 50C32 45 45 32 50 20Z" fill={scheme.center} fillOpacity="0.9" />
        
        {/* Corner Petals */}
        <path d="M20 20C34 32 45 45 50 50C45 55 34 68 20 80C20 66 20 34 20 20Z" fill={scheme.fill} fillOpacity="0.4" />
        <path d="M80 20C66 32 55 45 50 50C55 55 66 68 80 80C80 66 80 34 80 20Z" fill={scheme.fill} fillOpacity="0.4" />
        
        {/* Center Golden Core */}
        <circle cx="50" cy="50" r="10" fill={scheme.center} stroke={scheme.stroke} strokeWidth="1.5" />
        <circle cx="50" cy="50" r="4" fill={scheme.fill} />
      </svg>
    </motion.div>
  );
}
