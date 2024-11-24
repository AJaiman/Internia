export default function PaperContent({ content } : { content: string }) {
    return (
        <div className="w-full h-full overflow-y-auto border border-royalPurple/20 rounded-[6px]">
            <iframe src={content} className="w-full h-full" />
        </div>
    )
}