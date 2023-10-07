import React from 'react'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'

type SortableTaskItemProps = {
  children: React.ReactNode
  id: string | null
  disabled: boolean
}

export const SortableItem = ({
  children,
  id,
  disabled,
}: SortableTaskItemProps) => {
  if (!id) return null

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id, disabled })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0 : 1,
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  )
}
