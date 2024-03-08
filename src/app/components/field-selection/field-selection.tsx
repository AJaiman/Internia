'use client'

import Icon from "./icon";

export default function FieldSelection() {
    const plantIcon = Icon({ imageUrl: "/icons/plant.png", radius: 20 }); // Note: Use relative path here
    return (
        <>
            <div className="h-[50vh] w-[50vh] rounded-full grid grid-cols-5 grid-rows-5 gap-0 border border-black">
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
                <Icon imageUrl={"/icons/chip.png"} radius={25} />
            </div>
        </>
    );;
  }