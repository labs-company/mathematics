import { create } from 'zustand'

interface ModalState {
  open: () => void
  close: () => void
}

export const useModal = create<ModalState>(() => ({
  open: () => {
    const dialogElement: HTMLDialogElement | null = document.querySelector('#modal')
    dialogElement!.showModal()
  },

  close: () => {
    const dialogElement: HTMLDialogElement | null = document.querySelector('#modal')
    dialogElement!.close()
  },
}))
