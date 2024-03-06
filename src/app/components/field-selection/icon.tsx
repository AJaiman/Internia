"use client"

import React, { useState } from 'react';
import Image from 'next/image';

interface CircleProps {
  imageUrl: string;
  radius: number;
}

export default function Icon({ imageUrl, radius }: CircleProps): JSX.Element {
  const diameter = radius * 2;
  const [isHovered, setIsHovered] = useState(false);

  // Define inline styles for the circle
  const circleStyle = {
    width: `${diameter}px`,
    height: `${diameter}px`,
    borderRadius: '50%', // Ensure the div is a perfect circle
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: `${diameter*0.175}px`,
    backgroundColor: "#E2DDD5",
    boxShadow: isHovered ? '0 0 10px rgba(0, 0, 0, 0.2)' : 'none',
  };

  return (
    <div 
      style={circleStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image src={imageUrl} alt="Circle" width={diameter} height={diameter} />
    </div>
  );
}
