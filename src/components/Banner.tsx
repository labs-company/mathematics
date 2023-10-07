import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

type BannerType = { title: string; handleModalClick: () => void; icon: string }

export function Banner(props: BannerType) {
  const [isFigure, setIsFigure] = useState({
    figureOne: '',
    figureTwo: '',
  })

  const handleChangeFigure = (key: string, value: string) => {
    setIsFigure({ ...isFigure, [key]: value })
  }

  const isValidated = () => {
    if (!isFigure.figureOne && !isFigure.figureTwo) return
    const result = parseInt(isFigure.figureOne) + parseInt(isFigure.figureTwo)

    console.log(result)
  }
  return (
    <aside className='bg-white shadow px-4 py-4 sm:px-6 lg:px-8'>
      <div className='flex justify-between items-center'>
        <div className='max-w-7xl'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-800'>
            {props.title}
          </h1>
        </div>
        <div
          className='px-4 py-6 sm:px-6 lg:px-8 cursor-pointer'
          onClick={props.handleModalClick}
        >
          <QuestionMarkCircleIcon
            className='w-10 h-10 text-black'
            aria-hidden='true'
          />
        </div>
      </div>
      <div className='flex items-center gap-x-6'>
        <input
          type='text'
          placeholder='Escribe el primer numero'
          className='outline-none border border-gray-300 px-2 rounded shadow-md py-1'
          maxLength={2}
          onChange={(e) => handleChangeFigure('figureOne', e.target.value)}
        />
        <span className='font-bold text-xl'>{props.icon}</span>
        <input
          type='text'
          placeholder='Escribe el segundo numero'
          className='outline-none border border-gray-300 px-2 rounded shadow-md py-1'
          maxLength={2}
          onChange={(e) => handleChangeFigure('figureTwo', e.target.value)}
        />
        <a
          href='#'
          className='px-2 py-1 bg-zinc-400 shadow-md rounded text-white hover:bg-zinc-600 hover:transition-colors'
          onClick={isValidated}
        >
          Calcular
        </a>
      </div>
    </aside>
  )
}
