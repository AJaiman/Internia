'use client'

import Icon from "./icon";

export default function FieldSelection() {
    const plantIcon = Icon({ imageUrl: "/icons/plant.png", radius: 20 }); // Note: Use relative path here
    return (
        <>
            {plantIcon}
        </>
    );;
  }