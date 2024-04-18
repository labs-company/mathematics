import { BadgeInfo } from 'lucide-react'
import confetti from 'canvas-confetti'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import type { ResultProps } from 'types'
import { useModal } from '../stores/modal'

export default function InfoDiv({ operation }: ResultProps) {
  const [won, setWon] = useState(false)
  const [won2, setWon2] = useState(false)
  const onOpen = useModal(state => state.open)

  const onResultKid = async (event: ChangeEvent<HTMLInputElement>) => {
    if (operation.result === Number.parseInt(event.target.value)) {
      setWon(true)
      await confetti()
    }
  }
  const onResultKid2 = async (event: ChangeEvent<HTMLInputElement>) => {
    if (operation.residue === Number.parseInt(event.target.value)) {
      setWon2(true)
      await confetti()
    }
  }
  return (

    <aside className="px-8 py-6 flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3 justify-center">
          <h3 className="size-16 text-2xl rounded-full outline-none border-2 border-blue-400 flex justify-center items-center">
            {operation.numberOne}
          </h3>
          <h3 className="w-20 h-14 text-2xl outline-none border-b-2 border-l-2 border-blue-400 flex justify-center items-center">
            {operation.numberTwo}
          </h3>
        </div>
        <div className="flex justify-between">
          <div>
            <input type="text" className="size-16 text-2xl text-center outline-none rounded-full border-2 border-red-800 animate-pulse bg-red-300" disabled={won2} onChange={onResultKid2} />
            <p>Residuo</p>
          </div>
          <div>
            <input type="text" className="size-16 text-2xl text-center outline-none rounded-full border-2 border-red-800 animate-pulse bg-red-300" disabled={won} onChange={onResultKid} />
            <p>Cociente</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-10">Hallar el residuo y cociente de la division</h2>

      <BadgeInfo size="44" onClick={onOpen} className="cursor-pointer" />

    </aside>

  )
}
