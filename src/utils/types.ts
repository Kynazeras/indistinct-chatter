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

export interface Tag {
  name: string
  decription: string
  emoji: string
}
