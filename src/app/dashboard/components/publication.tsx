export default function Publication({ title, authors, year, link }: { title: string, authors: string, year: number, link: string }) {
    return (
        <div className="flex flex-col rounded-2xl p-4 bg-white">
            <p className="text-xl font-bold">{title}</p>
            <p className="text-lg">{authors}</p>
            <p className="text-lg">{year}</p>
            <button>🔻 More</button>
        </div>
    )
}