// Schemas
export type Professor = {
    name: string,
    university: string,
    match: number
}

export type LongformProfessor = Professor & {
  fullUniversity: string,
  department: string,
  type: string,
  description: string
}

export type Publication = {
  name: string,
  authors: Professor[],
  yearPublished: number
}

export type LongformPublication = Publication & {
  abstract: string,
  content: string,
  semanticLink: string,
  fullDate: string 
  link: string,
  match: number,
  id: string,
  isSaved?: boolean
}


// Types for the application itself to deal with the schemas
export type SearchResult = {
  match: number,
  result: LongformPublication | LongformProfessor
}