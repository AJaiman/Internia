import { LongformPublication } from "@/app/lib/types";

// Type guards
export function isLongformPublication(result: any): result is LongformPublication {
    return "abstract" in result && "authors" in result && "yearPublished" in result;
}

// Utility functions
export function chunkArray<T>(arr: T[], n: number): T[][] {
    const result: T[][] = [];
    
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    
    return result;
}