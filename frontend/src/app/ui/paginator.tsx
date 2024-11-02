import React, { useState } from "react"
import { chunkArray } from "@/app/lib/utils";

export default function Paginator({ pageSize, children } : { pageSize: number, children: React.ReactNode}) {
    const childrenArray = React.Children.toArray(children);
    const chunkedChildren = chunkArray(childrenArray, pageSize);
    
    const [page, setPage] = useState(1);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= chunkedChildren.length) {
            setPage(page)
        }
    }

    return (
    )
}