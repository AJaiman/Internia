"use client";

import { AdjustmentsVerticalIcon, BeakerIcon, BoltIcon, BugAntIcon, BuildingOfficeIcon, CalculatorIcon, ChartBarIcon, CogIcon, ComputerDesktopIcon, CpuChipIcon, CubeTransparentIcon, GlobeAmericasIcon, HeartIcon, LightBulbIcon, PaperAirplaneIcon, PresentationChartBarIcon, SparklesIcon, UserIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react"
import { FC, SVGProps, useState } from "react";
import { useRouter } from "next/navigation";
import BubbleField from "../ui/BubbleField";
import SpinnerIcon from "../ui/spinner";

type Field = [FC<SVGProps<SVGSVGElement>>, string, string]

export default function InterestSelection() {
    const { data: session } = useSession();
    const [fieldsChosen, setFieldsChosen] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
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

    const handleGetStarted = async () => {
        if (fieldsChosen.length === 0) {
            alert("Please select at least one field of interest");
            return;
        }

        setIsLoading(true);
        try {
            // Update user interests
            const interestsResponse = await fetch(`http://localhost:8000/user/interests/${session?.user?.email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fieldsChosen)
            });

            if (!interestsResponse.ok) {
                throw new Error('Failed to update interests');
            }

            // Get initial recommendations
            const recommendationsResponse = await fetch(`http://localhost:8000/paper/recommendations/${session?.user?.email}`);
            
            if (!recommendationsResponse.ok) {
                throw new Error('Failed to get recommendations');
            }

            // Set the cookie for selected interests
            document.cookie = 'selectedInterests=true; path=/; max-age=31536000; SameSite=Lax';
            localStorage.setItem('selectedInterests', 'true');

            // Use router.push instead of window.location.href
            router.push('/dashboard');

        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <SpinnerIcon size="64" />
                <h2 className="mt-4 text-xl font-medium">Setting up your preferences...</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center w-full min-h-screen p-8">
            <div className="text-center mt-8">
                <h1 className="text-4xl font-medium mb-2">
                    Welcome, <span className="font-black">{session?.user?.name?.split(/\s+/)[0]}</span>!
                </h1>
                <h2 className="text-lg font-light">
                    Choose at least <span className="font-bold">one</span> field that interests you
                </h2>
            </div>
            
            <div className="flex-1 w-full mb-24">
                <BubbleField 
                    fields={fields} 
                    fieldsChosen={fieldsChosen} 
                    setFieldsChosen={modifyingFieldsChosen} 
                />
            </div>

            <button 
                onClick={handleGetStarted} 
                className="fixed bottom-8 flex flex-row gap-3 items-center justify-center w-[300px] h-14 rounded-xl bg-royalPurple hover:bg-royalPurple/85 text-white transform transition-all duration-300 hover:scale-105"
                disabled={isLoading}
            >
                {isLoading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
                ) : (
                    <>
                        <PaperAirplaneIcon className="w-4 h-4" />
                        <h1 className="text-lg font-bold">Get Started</h1>
                    </>
                )}
            </button>
        </div>
    );
}