
export type Status = 'backlog' | 'done'

export type ElementDragg = {
    id: string
    content: string
    status: string
}

export type BoardSections = {
    [name: string]: ElementDragg[]
}