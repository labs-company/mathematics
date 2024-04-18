import { XCircle } from 'lucide-react'
import type { OperationConceptProps } from 'types'
import { useModal } from '../stores/modal'

export default function Modal({ concept }: OperationConceptProps) {
  const onClose = useModal(state => state.close)

  return (
    <dialog className="fixed top-1/2 bg-blue-400 shadow-md py-2 w-1/2 rounded-md" style={{ transform: 'translateY(-50%)' }} id="modal">
      <nav className="flex justify-end items-center px-2">
        <XCircle className="cursor-pointer size-10 text-white" onClick={onClose} />
      </nav>
      <article className="px-12 pb-5">
        <h2 className="text-4xl font-bold py-6">{concept.title}</h2>
        <p className="text-xl">{concept.description}</p>
      </article>
    </dialog>
  )
}
