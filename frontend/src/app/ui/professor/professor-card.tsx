import Image from "next/image";
import { LongformProfessor, Publication } from "@/app/lib/types";
import ContactCard from "@/app/ui/professor/contact-card";
import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@heroicons/react/24/solid";
import PublicationCard from "@/app/ui/professor/publication-card";
import FavoritePill from "@/app/ui/favorite-pill";

export default function ProfessorCard({ professor } : { professor: LongformProfessor}) {
    const publications: Publication[] = [
        {
            name: "The Effect of Chipotle on the Obesity of Americans",
            authors: [{name: "Shayaan Wadkar", match: 0.97, university: "UMD"}, {name: "Eric Huang", match: 0.97, university: "UMD"}, {name: "Arav Jaiman", match: 0.97, university: "UMD"}],
            yearPublished: 2024
        },
        {
            name: "The Effect of Chipotle on the Obesity of Americans",
            authors: [{name: "Shayaan Wadkar", match: 0.97, university: "UMD"}, {name: "Eric Huang", match: 0.97, university: "UMD"}, {name: "Arav Jaiman", match: 0.97, university: "UMD"}],
            yearPublished: 2024
        },
        {
            name: "The Effect of Chipotle on the Obesity of Americans",
            authors: [{name: "Shayaan Wadkar", match: 0.97, university: "UMD"}, {name: "Eric Huang", match: 0.97, university: "UMD"}, {name: "Arav Jaiman", match: 0.97, university: "UMD"}],
            yearPublished: 2024
        }
    ]

    return (
        <div className="flex flex-col items-center justify-between self-center w-[93.75%] h-full mt-4">
            <div className="flex flex-row items-center gap-16 w-full h-1/3">
                {/** Eventually, we're going to need to find a way to get the image of each professor */}
                <Image 
                    src="/eric_sehaj.png" 
                    alt="Picture of professor" 
                    width={208} 
                    height={208} 
                    className="w-52 h-52 border-2 border-royalPurple/50 aspect-square object-cover rounded-[6px]" />
                <div className="flex flex-col items-start justify-around w-1/3 h-full">
                    <div>
                        <h1 className="font-black text-royalPurple text-5xl">{professor.name}</h1>
                        <h1 className="text-royalPurple text-lg">{professor.type}</h1>
                    </div>
                    <div>
                        <h1 className="font-light text-royalPurple text-base">Professor at the <span className="font-medium">{professor.fullUniversity}</span></h1>
                        <h1 className="font-light text-royalPurple text-base">
                            Serves in the <span className="font-medium">Department of {professor.department}</span>
                        </h1>
                    </div>
                    <FavoritePill />
                </div>
                <div className="flex flex-col justify-between w-1/3 h-full">
                    <ContactCard type={"Email"} contactInfo={"huange2007@gmail.com"} icon={EnvelopeIcon} />
                    <ContactCard type={"Phone Number"} contactInfo={"301-250-0553"} icon={PhoneIcon} />
                    <ContactCard type={"Link to University Profile"} contactInfo={"https://umd.edu/ioweruawioeruwoeiur"} icon={LinkIcon} isLink={true} />
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-12 w-full h-2/3 mt-14">
                <div className="flex flex-col justify-center p-5 basis-3/5 h-full bg-royalPurple/10 rounded-xl">
                    <div className="h-[15%]">
                        <h1 className="text-2xl text-royalPurple font-bold">Publications</h1>
                    </div>
                    <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
                        {
                            publications.map((publication) => <PublicationCard key={publication.name} publication={publication}/>)
                        }
                    </div>
                </div>
                <div className="basis-2/5 h-full">
                    <h1 className="text-lg text-royalPurple font-bold">Description</h1>
                    <div className="h-[95%] overflow-y-auto">
                        <h1 className="text-lg text-royalPurple leading-[1.8]">{ professor.description }</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}