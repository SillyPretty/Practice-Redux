export interface IItem {
  id: number
  filter: string[]
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

export interface ICard {
  card: IItem
}
