"use client"

import React, { useState } from 'react';
import Image from 'next/image';

type CircleProps = {
  imageUrl: string;
  radius: number;
}

export default function Icon(props: CircleProps) {
  const diameter = props.radius * 2;

  return (
    <div style={{padding: (diameter*0.175)}} className={`h-fit w-fit rounded-full bg-[#E2DDD5] hover:drop-shadow-lg transition duration-400`}>
      <Image src={props.imageUrl} alt="Circle" width={diameter} height={diameter} />
    </div>
  );
}
