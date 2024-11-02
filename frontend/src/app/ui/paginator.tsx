import React, { useState } from "react"
import { chunkArray } from "@/app/lib/utils";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function Paginator({ pageSize, children } : { pageSize: number, children: React.ReactNode}) {
    console.log(children);
    const childrenArray = React.Children.toArray(children);
    const chunkedChildren = chunkArray(childrenArray, pageSize);
    
    const [page, setPage] = useState(1);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= chunkedChildren.length) {
            setPage(page)
        }
    }

    return (
        <div className="w-full h-full space-y-4">
            <div className={`flex flex-col h-[85%] ${chunkedChildren[page - 1].length < pageSize ? 'justify-start gap-12': 'justify-between'}`}>
                {
                    ...chunkedChildren[page - 1]
                }
            </div>
            <div className="h-[5%] self-center flex flex-row items-center justify-center gap-3">
                <button onClick={() => handlePageChange(page - 1)}>
                    <ArrowLeftCircleIcon className="text-royalPurple hover:text-royalPurple/75 w-8 h-8" />
                </button>
                <p className="text-lg text-royalPurple font-semibold">Page {page} of {chunkedChildren.length}</p>
                <button onClick={() => handlePageChange(page + 1)}>
                    <ArrowRightCircleIcon className="text-royalPurple hover:text-royalPurple/75 w-8 h-8" />
                </button>
            </div>
        </div>
    )
}