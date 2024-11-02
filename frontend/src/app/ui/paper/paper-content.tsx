export default function PaperContent({ content } : { content: string }) {
    return (
        <div className="w-full h-full overflow-y-auto border border-royalPurple/20 rounded-[6px] p-8">
            <p className="text-sm text-royalPurple">{content}</p>
        </div>
    )
}