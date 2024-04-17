import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { Link } from 'wouter'
import { Minus } from 'lucide-react'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksFirst = ['dungeon_master.exe', 'map_1.dat', 'map_10.dat', 'character1.txt', 'character2.txt', 'shell32.dll', 'README.txt', 'README12.txt', 'hsl.xx', 'typescript.js']

const boxMocksSecond = ['dungeon_master.11exe', 'map_122.dat', 'character5.txt']

const boxMocksThree = ['map_2.dat', 'character8.txt', 'shell324.dll', 'README1.txt']

export default function Res() {
  const [boardFirst, rocketsFirst] = useDragAndDrop<HTMLDivElement, string>(boxMocksFirst, {
    group: 'A',
    dropZone: false,
  })

  const [boardSecond, rocketsSecond, setRocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, {
    group: 'A',
    dragHandle: '.kanban-handle',
  })

  const [boardThree, rocketsThree] = useDragAndDrop<HTMLDivElement, string>(boxMocksThree, {
    group: 'A',
  })

  function disable() {
    if (rocketsThree.length < 4)
      setRocketsSecond(rocketsSecond.splice(2))
  }

  return (
    <>
      <Modal concept={{ ...concepts.res }} />
      <Info operator={{ isRes: true }} operation={{ ...results.res.lvlThree }}>
        <Minus />
      </Info>
      <h2 className="text-3xl font-bold text-center">Nivel 3</h2>
      <section className="container mx-auto gap-12 flex items-start justify-center mt-10">
        <article>
          <div ref={boardFirst} className={`size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center ${rocketsFirst.length === 10 && 'bg-red-400'} ${rocketsFirst.length === 0 && 'hidden'}`}>
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        <article className="flex flex-col gap-4 items-center justify-center">
          <div ref={boardSecond} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center" onDrop={disable}>
            {rocketsSecond.map(rocket => (
              <Box
                key={rocket}
              >
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div
            ref={boardThree}
            className={`size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center ${rocketsThree.length === 0 && 'hidden'}`}
          >
            {rocketsThree.map(rocket => (
              <Box
                key={rocket}
              >
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
      </section>
      <nav className="flex justify-between px-6 my-5">
        <Link to="/res/lvl-two" className="hover:bg-black hover:text-white rounded  p-2 duration-300 hover:scale-105">Regresar</Link>
        <Link to="/res" className="hover:bg-black hover:text-white rounded  p-2 duration-300 hover:scale-105">Siguiente Nivel</Link>
      </nav>
    </>
  )
}
