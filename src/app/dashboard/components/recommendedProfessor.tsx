import Link from "next/link";

export default function RecommendedProfessorCard({name, school, matchPercentage}: {name: string, school: string, matchPercentage: number}) {
    return (
        <Link href="dashboard/professor" className="flex flex-col hover:bg-gray-100 p-3 rounded-2xl">
            <div className="flex font-bold justify-between">
                <p>{name}</p>
                <p>{school}</p>
            </div>
            <div className="flex items-center">
                <p>{matchPercentage}% match</p>
                <div className="bg-gray-200 rounded-2xl flex w-full h-8">
                    <div className={`bg-green-800 rounded-2xl flex w-[${matchPercentage}%]`}></div>
                </div>
            </div>
        </Link>
    )
}