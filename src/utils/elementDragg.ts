import { ElementDragg, Status } from './types'

export const getStatusElementDragg = (
  elementDraggs: ElementDragg[],
  status: Status,
) => elementDraggs.filter((elementDrag) => elementDrag.status === status)

export const getElementDraggId = (elementDraggs: ElementDragg[], id: string) =>
  elementDraggs.find((elementDragg) => elementDragg.id === id)
