"use client"

import { BookmarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react"

export default function FavoritePill() {
    const [isFavorited, setFavorited] = useState(false);

    return (
        <button 
          className={`flex flex-row items-center justify-center gap-2 w-32 py-1.5 rounded-full border border-royalPurple/25 text-royalPurple ${isFavorited ? 'bg-royalPurple text-white' : ''}`}
          onClick={() => setFavorited(!isFavorited)}>
            <BookmarkIcon className="w-4 h-4" />
            <p className="text-xs">{isFavorited ? 'Unfavorite' : 'Favorite'}</p>
        </button>
    )
}