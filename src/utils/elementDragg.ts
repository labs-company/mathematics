import type { ElementDragg, Status } from './types'

export function getStatusElementDragg(elementDraggs: ElementDragg[], status: Status) {
  return elementDraggs.filter(elementDrag => elementDrag.status === status)
}

export function getElementDraggId(elementDraggs: ElementDragg[], id: string) {
  return elementDraggs.find(elementDragg => elementDragg.id === id)
}
