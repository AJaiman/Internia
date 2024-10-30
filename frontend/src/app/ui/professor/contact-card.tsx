import { FC, SVGProps } from 'react';

export default function ContactCard({
    type,
    contactInfo,
    isLink = false,
    icon: Icon
}: {
    type: string,
    contactInfo: string,
    isLink?: boolean,
    icon: FC<SVGProps<SVGSVGElement>>
}) {
    return (
        <div className="flex flex-row items-center gap-3 w-full basis-1/3 ">
            <Icon className="text-royalPurple w-10 h-10" />
            <h1 className="text-xs font-light">
                <span className="font-bold">{type}: </span>
                <br />
                {isLink ? <a href={contactInfo} className="underline hover:text-royalPurple/75">{contactInfo}</a> : contactInfo}
            </h1>
        </div>
    )
}