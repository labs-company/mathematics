import { useContext } from 'react'
import { Context } from '../context/ContextDraggable'

export function useDraggableContext() {
  const context = useContext(Context)
  if (!context) {
    throw new Error(
      'para usar el hook usePost debe estar dentro de un contexto',
    )
  }
  return context
}
