"use client";

import { FC, SVGProps, useState } from "react";

export default function FieldPill({ 
    fieldName,
    rawFieldName,
    fieldIcon: Icon,
    setFieldsChosen
} : { 
    fieldName: string, 
    rawFieldName: string,
    fieldIcon: FC<SVGProps<SVGSVGElement>>,
    setFieldsChosen: (field: string, isRemoving: boolean) => void
}) {
    const [isClicked, setClicked] = useState(false);
    
    return (
        <button 
            className={`flex flex-row items-center gap-3 pl-3 w-5/6 h-9 rounded-full border-royalPurple border ${isClicked ? 'bg-royalPurple border-none' : ''}`}
            onClick={() => {
                setClicked(!isClicked);
                setFieldsChosen(rawFieldName, isClicked);
            }}>
            <Icon className={`${isClicked ? 'text-white' : 'text-royalPurple'} w-4 h-4`} />
            <p className={`${isClicked ? 'text-white' : 'text-royalPurple'} font-medium text-xs`}>{fieldName}</p>
        </button>
    )
}