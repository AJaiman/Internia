import Image from "next/image";
import { LongformProfessor } from "@/app/lib/types";
import ContactCard from "@/app/ui/professor/contact-card";
import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function ProfessorCard({ professor } : { professor: LongformProfessor}) {
    return (
        <div className="self-center w-[93.75%] h-3/4 mt-4">
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
                </div>
                <div className="flex flex-col justify-between w-1/3 h-full">
                    <ContactCard type={"Email"} contactInfo={"huange2007@gmail.com"} icon={EnvelopeIcon} />
                    <ContactCard type={"Phone Number"} contactInfo={"301-250-0553"} icon={PhoneIcon} />
                    <ContactCard type={"Link to University Profile"} contactInfo={"https://umd.edu/ioweruawioeruwoeiur"} icon={LinkIcon} isLink={true} />
                </div>
            </div>
            <div className="flex flex-row items-center justify-end w-full h-2/3">
                <div className="basis-2/5 h-3/4">
                    <h1 className="text-lg text-royalPurple font-bold">Description</h1>
                    <h1 className="text-lg text-royalPurple leading-loose">{ professor.description }</h1>
                </div>
            </div>
        </div>
    )
}