import { FC, SVGProps } from 'react';

export default function PaperCard({
    label,
    description,
    isLink = false,
    icon: Icon
}: {
    label: string,
    description: string,
    isLink?: boolean,
    icon: FC<SVGProps<SVGSVGElement>>
}) {
    return (
        <div className="flex flex-row items-center justify-start gap-6 w-full h-16 rounded-[8px] bg-mutedPurple border border-royalPurple/50">
            <div className="rounded-l-[8px] flex items-center justify-center w-16 h-16 bg-white/20">
                <Icon className="text-royalPurple w-9 h-9" />
            </div>
            <h1 className="text-lg font-light">
                <span className="font-bold">{label}: </span>
                {isLink ? <a href={description} className="underline hover:text-royalPurple/75">{description}</a> : description}
            </h1>
        </div>
    )
}