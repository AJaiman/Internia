import { Bold } from "lucide-react";
import React from "react";

type CondensedProfCardProps = {
    profId: string
}

export default function CondensedProfCard(props: CondensedProfCardProps) {

    const name = props.profId
    const description = "Dr. Kefter-Oobleck is a world-renowned professor in the field of Epigenetics, with multiple research articles in topics including the gen..."
    const fields = ["Biology", "Epigenetics"]
    var fieldsText = ""
    const school = "UMD"
    const pfp = ""

    fields.forEach((currentValue, index, arr) => {
        fieldsText = fieldsText + currentValue + ", "
    })

    fieldsText = fieldsText.slice(0, -2)

    return (
        <span className="hover:drop-shadow-md transition duration-200 flex flex-row justify-between h-[8vh] items-center p-5 bg-orange-400 rounded-full">
            <div className="flex flex-row gap-3 items-center">
                <img src={pfp} alt="PFP" className="w-10 h-10 rounded-full cursor-pointer px-4" />
                <div>
                    <p>{name}</p>
                    <p>Professor in <b>{fieldsText}</b></p>
                    <p>Teaches at <b>{school}</b></p>
                </div>
            </div>

            <p className="w-1/4">{description}</p>
            <button className="bg-[#D9D9D9] drop-shadow-md active:drop-shadow-none w-32 h-10 rounded-full text-xl">Connect</button>
        </span>
    )
}