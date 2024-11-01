import { LongformPublication } from "@/app/lib/types";

// Type guards
export function isLongformPublication(result: any): result is LongformPublication {
    return "abstract" in result && "authors" in result && "yearPublished" in result;
}
