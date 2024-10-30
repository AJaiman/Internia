import { Professor } from "@/app/lib/types";

export default function AuthorCard({ professor, pathToImage } : { professor: Professor, pathToImage: string}) {
    return (
        <div 
          className="flex-shrink-0 w-1/3 h-[95%] bg-white rounded-[6px] bg-cover bg-center"
          style={{backgroundImage: `url('${pathToImage}')`}}>
            <div className="flex flex-col items-start justify-around py-3 pl-4 bg-royalPurple/80 w-full h-full rounded-[6px]">
                <div>
                    <h1 className={`font-semibold text-white text-base`}>{professor.name}</h1>
                    <h3 className="text-white text-sm">{professor.university}</h3>
                </div>
                <div>
                    <h1 className={`font-black text-white text-3xl ${professor.match > 0.9 ? 'glow-text' : ''}`}>{professor.match * 100}%</h1>
                    <p className="font-light text-white -mt-1">match</p>
                </div>
            </div>
        </div>
    )
}