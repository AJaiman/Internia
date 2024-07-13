import React from "react";
import { FaRegFileAlt } from "react-icons/fa";

type CondensedPaperCardProps = {
    paperId: String
}

export default function CondensedPaperCard(props: CondensedPaperCardProps) {

    const name = props.paperId
    const description = "Dr. Kefter-Oobleck is a world-renowned paperessor in the field of Epigenetics, with multiple research articles in topics including the gen..."
    const fields = ["Biology", "Epigenetics"]
    var fieldsText = ""
    const authors = ["Dr. Kefter-Oobleck"]
    var authorsText = ""

    fields.forEach((currentValue, index, arr) => {
        fieldsText = fieldsText + currentValue + ", "
    })

    authors.forEach((currentValue, index, arr) => {
        authorsText = authorsText + currentValue + ", "
    })

    fieldsText = fieldsText.slice(0, -2)
    authorsText = authorsText.slice(0, -2)

    return (
        <span className="hover:drop-shadow-md transition duration-200 flex flex-row justify-between h-[9vh] items-center p-5 bg-orange-400 rounded-full mb-10">
            <div className="flex flex-row gap-3 items-center">
                <FaRegFileAlt size={40} />
                <div>
                    <b className="text-xl">{name}</b>
                    <p>Fields: <b>{fieldsText}</b></p>
                    <p>Written by <b>{authorsText}</b></p>
                </div>
            </div>

            <p className="w-1/4">{description}</p>
            <button className="bg-[#D9D9D9] drop-shadow-md active:drop-shadow-none w-32 h-10 rounded-full text-xl">Read</button>
        </span>
    )
}