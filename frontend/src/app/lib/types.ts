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