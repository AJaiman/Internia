export default function PaperContent({ content } : { content: string }) {
    return (
        <div className="w-full h-full overflow-y-auto bg-white/50 border border-royalPurple/30 rounded-[6px] p-8">
            <p className="text-sm text-royalPurple">{content}</p>
        </div>
    )
}