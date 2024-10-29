import Paper from "@/app/ui/home/paper";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Page() {
    const isRecommendingPaper = true;  // Update later

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-24">
            <div className="relative w-3/4 h-12">
                <input 
                    className="w-full h-full bg-royalPurple/10 rounded-[8px] border border-royalPurple/25 pl-12 placeholder-royalPurple/50 text-royalPurple placeholder:italic focus:outline-none"
                    placeholder="Search for professors, pages, etc." />
                <MagnifyingGlassIcon className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6 text-royalPurple" />
            </div>
            <div className="flex flex-col w-4/5 h-3/4 py-4">
                <Paper
                    name="Effect of Chipotle on Obesity in the United States"
                    isRecommended={true} />
            </div>
        </div>
    )
}