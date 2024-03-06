'use client'

import Icon from "./icon";

export default function FieldSelection() {
    const plantIcon = Icon({ imageUrl: "/icons/plant.png", radius: 45 }); // Note: Use relative path here
    return (
        <>
            <Icon imageUrl="/icons/plant.png" radius={45}/>
            {plantIcon}
        </>
    );;
  }