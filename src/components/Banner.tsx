import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { type ChangeEvent, useState } from 'react'
import confetti from 'canvas-confetti'

interface BannerType { title: string, handleModalClick: () => void, icon: string, result: number, numberOne: number, numberTwo: number }

export function Banner(props: BannerType) {
  const [won, setWon] = useState(false)

  const onResultKid = async (event: ChangeEvent<HTMLInputElement>) => {
    if (props.result === Number.parseInt(event.target.value)) {
      setWon(true)
      await confetti()
    }
  }

  return (
    <aside className="px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="max-w-7xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            {props.title}
          </h1>
        </div>
        <div
          className="px-4 py-6 sm:px-6 lg:px-8 cursor-pointer"
          onClick={props.handleModalClick}
        >
          <QuestionMarkCircleIcon
            className="w-10 h-10 text-black"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <h2 className="text-7xl">{props.numberOne}</h2>
        <span className="font-bold text-xl">{props.icon}</span>
        <h2 className="text-7xl">{props.numberTwo}</h2>
        <span className="font-bold text-xl">=</span>
        <input
          type="text"
          placeholder="??"
          className="outline-none border border-gray-300 px-2 rounded shadow-md py-1 w-16"
          onChange={e => onResultKid(e)}
          disabled={won}
        />
      </div>
    </aside>
  )
}
