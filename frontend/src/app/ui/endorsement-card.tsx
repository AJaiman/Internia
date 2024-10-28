import Image from "next/image"

export default function EndorsementCard({
    name,
    description,
    quote,
    pathToImage,
    sizeOfCard
}: {
    name: string,
    description: string,
    quote: string,
    pathToImage: string,
    sizeOfCard: 'xs' | 'sm' | 'md' | 'lg'
}) {
    const sizeOfImage = 
        sizeOfCard == 'lg' ? 60 :
        sizeOfCard == 'md' ? 48 : 
        sizeOfCard == 'sm' ? 36 :
        sizeOfCard == 'xs' ? 24 :
        48

    const gapBetweenHeader = 
        sizeOfCard == 'lg' ? 'gap-6' :
        sizeOfCard == 'md' ? 'gap-4' :
        sizeOfCard == 'sm' || sizeOfCard == 'xs' ? 'gap-2' :
        'gap-4'

    const sizeOfLargeText =
        sizeOfCard == 'lg' ? 'text-lg' :
        sizeOfCard == 'md' ? 'text-base' : 
        sizeOfCard == 'sm' || sizeOfCard == 'xs' ? 'text-sm' :
        'text-base'

    const sizeOfSmallText = 
        sizeOfCard == 'lg' ? 'text-sm' :
        sizeOfCard == 'md' ? 'text-xs' :
        sizeOfCard == 'sm' ? 'text-[10px]' :
        sizeOfCard == 'xs' ? 'text-[9px]' :
        'text-sm'

    return (
        <>
            <div className={`flex flex-row items-center ${gapBetweenHeader} w-full basis-1/4`}>
                <Image src={pathToImage} alt="Picture of someone endorsing the website" className={`${sizeOfCard == 'xs' ? 'hidden' : ''} rounded-full aspect-square object-cover`} width={sizeOfImage} height={sizeOfImage} />
                <div className="flex flex-col items-start justify-start">
                    <h1 className={`${sizeOfLargeText} text-royalPurple font-semibold`}>{name}</h1>
                    <h1 className={`${sizeOfSmallText} text-royalPurple font-light whitespace-nowrap`}>{description}</h1>
                </div>
            </div>
            <p className={`font-light text-royalPurple ${sizeOfLargeText}`}>
                {quote}
            </p>
        </>
    )
}