import { Plus } from 'lucide-react'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { Link } from 'wouter'
import type { ParentConfig } from '@formkit/drag-and-drop'
import confetti from 'canvas-confetti'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksFirst = ['dungeon_master.exe', 'map_1.dat', 'map_2.dat', 'character1.txt', 'character2.txt', 'shell32.dll', 'README.txt', 'aasdad']

const boxMocksSecond = ['map_2x.dat', 'character5.txt', 'character8.txt', 'shell324.dll', 'README1.txt']

export default function Sum() {
  const [boardFirst, rocketsFirst] = useDragAndDrop<HTMLDivElement, string>(boxMocksFirst, {
    group: 'A',
    dragHandle: '.kanban-handle',
  })

  const configSecond: Partial<ParentConfig<string>> = { group: 'A' }

  const [boardSecond, rocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, configSecond)

  if (rocketsFirst.length === 10) {
    configSecond.disabled = true
    configSecond.group = 'B'
    confetti()
  }

  return (
    <>
      <Modal concept={{ ...concepts.sum }} />
      <Info operator={{ isSum: true }} operation={{ ...results.sum.lvlOne }}>
        <Plus />
      </Info>
      <h2 className="text-3xl font-bold text-center">Nivel 1</h2>
      <section className={`container mx-auto flex gap-4 items-center justify-center mt-10 ${rocketsFirst.length === 10 ? '' : 'flex-col'}`}>
        <article>
          {rocketsFirst.length < 10 && <h2 className="font-semibold text-center text-2xl">Unidades</h2>}
          {rocketsFirst.length === 10 && <h2 className="font-semibold text-center text-2xl">Decenas</h2>}
          <div ref={boardFirst} className={`size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center ${rocketsFirst.length === 10 && 'bg-red-400'}`}>
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        {rocketsFirst.length < 10 && (
          <div className="w-8/12 text-start">
            <Plus className="size-16" />
          </div>
        )}
        <article>
          {rocketsFirst.length === 10 && <h2 className="font-semibold text-center text-2xl">Unidades</h2>}
          <div ref={boardSecond} className="size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center">
            {rocketsSecond.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
      </section>
      <nav className="flex justify-end px-6 pb-2 mt-12">
        <Link to="/sum/lvl-two" className="hover:bg-black hover:text-white rounded  p-2 duration-300 hover:scale-105">Siguiente Nivel</Link>
      </nav>
    </>
  )
}
