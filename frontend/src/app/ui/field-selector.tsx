"use client";

import { AdjustmentsVerticalIcon, BeakerIcon, BoltIcon, BugAntIcon, BuildingOfficeIcon, CalculatorIcon, ChartBarIcon, CogIcon, ComputerDesktopIcon, CpuChipIcon, CubeTransparentIcon, GlobeAmericasIcon, HeartIcon, LightBulbIcon, PaperAirplaneIcon, PresentationChartBarIcon, SparklesIcon, UserIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react"
import { FC, SVGProps, useState } from "react";
import FieldPill from "./field-pill";

type Field = [FC<SVGProps<SVGSVGElement>>, string, string]

export default function FieldSelector() {
    const { data } = useSession();
    const [fieldsChosen, setFieldsChosen] = useState<string[]>([]);
    const fields: Field[] = [
        [BugAntIcon, "Biology", "biology"],
        [BeakerIcon, "Chemistry", "chemistry"],
        [LightBulbIcon, "Physics", "physics"],
        [GlobeAmericasIcon, "Earth Science", "earth_science"],
        [SparklesIcon, "Astronomy", "astronomy"],
        [ComputerDesktopIcon, "Computer Science", "computer_science"],
        [CpuChipIcon, "Quantum Computing", "quantum_computing"],
        [AdjustmentsVerticalIcon, "Artificial Intelligence", "ai"],
        [BoltIcon, "Electrical Engineering", "electrical_engineering"],
        [CogIcon, "Mechanical Engineering", "mechanical_engineering"],
        [BuildingOfficeIcon, "Civil Engineering", "civil_engineering"],
        [BeakerIcon, "Chemical Engineering", "chemical_engineering"],
        [BugAntIcon, "Biomedical Engineering", "biomedical_engineering"],
        [CubeTransparentIcon, "Materials Science", "materials_science"],
        [CalculatorIcon, "Mathematics", "mathematics"],
        [ChartBarIcon, "Statistics", "statistics"],
        [ComputerDesktopIcon, "Theoretical CS", "theoretical_computer_science"],
        [PresentationChartBarIcon, "Data Science", "data_science"],
        [CpuChipIcon, "Systems Science", "systems_science"],
        [HeartIcon, "Medicine", "medicine"],
        [UserIcon, "Public Health", "public_health"],
        [BeakerIcon, "Biochemistry", "biochemistry"],
        [BugAntIcon, "Molecular Biology", "molecular_biology"],
        [UsersIcon, "Neuroscience", "neuroscience"],
        [HeartIcon, "Pharmacology", "pharmacology"]
    ]
    const modifyingFieldsChosen = (field: string, isRemoving: boolean) => {
        if (isRemoving) {
            setFieldsChosen(fieldsChosen.filter((value) => value != field))
        }
        else {
            setFieldsChosen([...fieldsChosen, field])
        }
    }

    return (
        <div className="flex flex-col w-full h-4/5 p-4">
            <h1 className="text-2xl font-medium">
                Welcome, {data?.user?.name?.split(/\s+/)[0]}!
            </h1>
            <h1 className="font-light">
                Choose at least <span className="font-bold">one</span> field that you're interested in to get started with Internia.
            </h1>
            <div className="grid grid-rows-5 grid-cols-5 w-full h-[40vh] mt-4">
                {
                    fields.map(
                        ([fieldIcon, fieldName, apiFieldName]) => (
                            <FieldPill 
                                key={fieldName} 
                                rawFieldName={apiFieldName} 
                                fieldName={fieldName} 
                                fieldIcon={fieldIcon} 
                                setFieldsChosen={modifyingFieldsChosen} />
                        )
                    )
                }
            </div>
            <button className="flex flex-row gap-3 items-center justify-center w-[37%] h-14 mt-4 rounded-xl bg-royalPurple hover:bg-royalPurple/85 text-white">
                <PaperAirplaneIcon className="w-4 h-4" />
                <h1 className="text-lg font-bold">Get Started</h1>
            </button>
        </div>
    )
}