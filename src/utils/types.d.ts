export type Status = 'backlog' | 'done'

export interface ElementDragg {
  id: string
  content: string
  status: string
}

export interface BoardSections {
  [name: string]: ElementDragg[]
}
