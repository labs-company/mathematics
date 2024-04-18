import { BadgeInfo, Equal } from 'lucide-react'
import confetti from 'canvas-confetti'
import type { ChangeEvent } from 'react'
import { useState } from 'react'
import type { ResultProps } from 'types'
import { useModal } from '../stores/modal'

export default function Info({ children, operation, Texto, resultanimateion, rockts }: ResultProps) {
  const [won, setWon] = useState(false)
  const onOpen = useModal(state => state.open)

  const onResultKid = async (event: ChangeEvent<HTMLInputElement>) => {
    if (operation.result === Number.parseInt(event.target.value)) {
      setWon(true)
      await confetti()
    }
  }
  return (

    <aside className="px-8 py-6 flex justify-between items-center">
      <div className="flex items-center gap-3 justify-center">
        <h3 className="size-16 text-2xl rounded-full outline-none border-2 border-blue-400 flex justify-center items-center">
          {operation.numberOne}
        </h3>
        {children}
        <h3 className="size-16 text-2xl rounded-full outline-none border-2 border-blue-400 flex justify-center items-center">
          {operation.numberTwo}
        </h3>
        <Equal />
        <div>
          <input type="text" className={`size-16 text-2xl text-center outline-none rounded-full border-2 border-red-800  ${rockts?.length === resultanimateion && 'animate-pulse bg-red-300'} `} disabled={won} onChange={onResultKid} />
          <p>resultado</p>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-center">{Texto}</h2>
      <BadgeInfo size="44" onClick={onOpen} className="cursor-pointer" />
    </aside>

  )
}
