"use client"

import { BookmarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react"

export default function FavoritePill({ initialState = false, onFavorite, onUnfavorite } : { initialState?: boolean, onFavorite?: () => void, onUnfavorite?: () => void }) {
    const [isFavorited, setFavorited] = useState(initialState);

    return (
        <button 
          className={`flex flex-row items-center justify-center gap-2 w-32 py-1.5 rounded-full border border-royalPurple/50 text-royalPurple ${isFavorited ? 'bg-royalPurple text-white' : ''}`}
          onClick={() => {setFavorited(!isFavorited)
            if (isFavorited) {
                onUnfavorite?.()
            } else {
                onFavorite?.()
            }
          }}>
            <BookmarkIcon className="w-4 h-4" />
            <p className="text-xs">{isFavorited ? 'Unfavorite' : 'Favorite'}</p>
        </button>
    )
}