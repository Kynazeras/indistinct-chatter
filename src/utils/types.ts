export interface Movie {
  title: string
  director: Person
  actors: Person[]
  posterLink: string
  runtime?: number
  tmdbId?: string
  starRating?: number
}

export interface Person {
  name: string
}
