import { Plus } from 'lucide-react'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { Link } from 'wouter'
import confetti from 'canvas-confetti'
import type { ParentConfig } from '@formkit/drag-and-drop'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksFirst = ['dungeon_master.exe', 'map_1.dat', 'map_2.dat', 'character1.txt', 'character2.txt', 'shell32.dll', 'README.txt', 'aasdad', 'a', 'c++']

const boxMocksSecond = ['map_2.dat', 'character5.txt', 'character8.txt', 'shell324.dll', 'c', 'h', 'i', 'axx', 'lalal', 'ñ']

const boxMocksThree = ['dungeon_master.11exe', 'map_122.dat', 'map_222.dat', '2.txt', 'character212.txt', 'asaas', 'aa', 'xx']

const boxMocksFour = ['map_2x.dat', 'character5x.txt', 'character8x.txt', 'shell324x.dllx', 'cx', 'hx', 'ix', 'axxx', 'lalalx', 'ñx']

const boxMocksFive = ['dungeonx_master.exe', 'mapx_1.dat', 'mapz_2.dat', 'zcharacter1.txtz', 'batman']

export default function SumLvlThree() {
  const [boardThree, rocketsThree] = useDragAndDrop<HTMLDivElement, string>(boxMocksThree, {
    group: 'A',
    dragHandle: '.kanban-handle',
  })

  const config1: Partial<ParentConfig<string>> = {}
  config1.accepts = (_parent, lastParent) => {
    if (lastParent.el === boardThree.current)
      return false

    return rocketsThree.length > 10
  }

  const config2: Partial<ParentConfig<string>> = {}
  config2.accepts = (_parent, lastParent) => {
    if (lastParent.el === boardThree.current)
      return false

    return rocketsThree.length > 10
  }
  const config3: Partial<ParentConfig<string>> = {}
  config3.accepts = (_parent, lastParent) => {
    if (lastParent.el === boardThree.current)
      return false

    return rocketsThree.length > 10
  }
  const config4: Partial<ParentConfig<string>> = {}
  config4.accepts = (_parent, lastParent) => {
    if (lastParent.el === boardThree.current)
      return false

    return rocketsThree.length > 10
  }

  const [boardFirst, rocketsFirst] = useDragAndDrop<HTMLDivElement, string>(boxMocksFirst, {
    config1,
    dragHandle: '.kanban-handle',
  })

  const [boardSecond, rocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, {
    config2,
    dragHandle: '.kanban-handle',
  })

  const [boardFour, rocketsFour] = useDragAndDrop<HTMLDivElement, string>(boxMocksFour, {
    config3,
    dragHandle: '.kanban-handle',
  })

  const [boardFive, rocketsFive] = useDragAndDrop<HTMLDivElement, string>(boxMocksFive, {
    group: 'A',
  })

  if (rocketsThree.length === 10)
    confetti()

  return (
    <>
      <Modal concept={{ ...concepts.sum }} />
      <Info operator={{ isSum: true }} operation={{ ...results.sum.lvlThree }}>
        <Plus />
      </Info>
      <h2 className="text-3xl font-bold text-center">Nivel 3</h2>
      <section className="container mx-auto gap-12 flex items-start justify-center mt-10">
        <article>
          <div ref={boardFirst} className={`size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center ${rocketsFirst.length === 10 && 'bg-red-400'}`}>
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        <article>
          <div ref={boardSecond} className={`size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center ${rocketsSecond.length === 10 && 'bg-red-400'}`}>
            {rocketsSecond.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardFour} className={`size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center mt-4 ${rocketsFour.length === 10 && 'bg-red-400'}`}>
            {rocketsFour.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        <article>
          <div ref={boardThree} className={`size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center ${rocketsThree.length === 10 && 'bg-red-400'}`}>
            {rocketsThree.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardFive} className="size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center mt-4">
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
