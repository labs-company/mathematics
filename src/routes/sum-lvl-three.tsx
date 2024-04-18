import { Plus } from 'lucide-react'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { Link } from 'wouter'
import confetti from 'canvas-confetti'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksSecond = ['map_2.dat', 'character5.txt']

const boxMocksThree = ['dungeon_master.11exe', 'map_122.dat', 'map_222.dat', '2.txt', 'character212.txt', 'asaas', 'aa', 'xx']

const boxMocksFour = ['map_2x.dat']

const boxMocksFive = ['dungeonx_master.exe', 'mapx_1.dat', 'mapz_2.dat', 'zcharacter1.txtz', 'batman']

export default function SumLvlThree() {
  const [boardThree, rocketsThree] = useDragAndDrop<HTMLDivElement, string>(boxMocksThree, {
    group: 'A',
    dragHandle: '.kanban-handle',
  })

  const [boardSecond, rocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, {
    group: 'B',
    dragHandle: '.kanban-handle',
  })

  const [boardFour, rocketsFour] = useDragAndDrop<HTMLDivElement, string>(boxMocksFour, {
    group: 'B',
  })

  const [boardFive, rocketsFive] = useDragAndDrop<HTMLDivElement, string>(boxMocksFive, {
    group: 'A',
  })

  if (rocketsThree.length === 10) {
    rocketsThree.splice(0, 10)
    rocketsFive.splice(0, 1)
    rocketsSecond.push('dungeon_master.11exe')
    confetti()
  }

  return (
    <>
      <Modal concept={{ ...concepts.sum }} />
      <Info operator={{ isSum: true }} operation={{ ...results.sum.lvlThree }} Texto="Halla el resultado de la Suma" rockts={rocketsSecond} resultanimateion={4}>
        <Plus />
      </Info>
      <h2 className="text-3xl font-bold text-center">Nivel 3</h2>
      <section className="container mx-auto gap-12 flex items-start justify-center mt-10">
        {rocketsSecond.length < 4 && (
          <Plus className="size-16 my-auto" />
        )}
        <article>
          <h2 className="font-semibold text-center text-2xl">Decenas</h2>
          <div ref={boardSecond} className="size-96 shadow-md bg-red-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center">
            {rocketsSecond.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardFour} className={`size-96 shadow-md bg-red-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center mt-4 ${rocketsFour.length === 0 && 'hidden'}`}>
            {rocketsFour.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        <article>
          <h2 className="font-semibold text-center text-2xl">Unidades</h2>
          <div ref={boardThree} className={`size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center mb-4 ${rocketsThree.length === 0 && 'hidden'}`}>
            {rocketsThree.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardFive} className="size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center">
            {rocketsFive.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
      </section>
      <nav className="flex justify-between px-6 my-12">
        <Link to="/sum/lvl-two" className="hover:bg-black hover:text-white rounded  p-2 duration-300 hover:scale-105">Regresar</Link>
        <Link to="/sum" className="hover:bg-black hover:text-white rounded  p-2 duration-300 hover:scale-105">Regresar al Nivel 1</Link>
      </nav>
    </>
  )
}
