import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { Link } from 'wouter'
import { Minus } from 'lucide-react'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksFirst = ['dungeon_master.exe', 'map_132.dat']

const boxMocksSecond = ['map_2.dat', 'characterdaw5.txt', 'map_wd.dat', 'character5.txt', 'mapdaw_2.dat']

const boxMocksThree = ['dungeon_master.11exe', 'map_122.dat', 'characterdwa5.txt', 'map_222.dat', '2.txt', 'character212.txt', 'asaas', 'aa']

export default function Res() {
  const [boardFirst, rocketsFirst] = useDragAndDrop<HTMLDivElement, string>(boxMocksFirst, {
    group: 'A',
  })

  const [boardSecond, rocketsSecond, setRocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, {
    group: 'A',
    dragHandle: '.kanban-handle',
  })

  const [boardThree, rocketsThree] = useDragAndDrop<HTMLDivElement, string>(boxMocksThree, {
    group: 'A',
  })

  function disable() {
    if (rocketsThree.length < 8)
      setRocketsSecond(rocketsSecond.splice(2))
  }

  if (rocketsSecond.length === 6)
    rocketsSecond.push('dawdaw', 'dwadwda', 'dwadwawd', 'ajnjabdjwbad', 'daknwdianwdioa', 'dkanwdianwdoiw', 'dkawndnwiadn', 'knaodinaw3d', 'wdnandjwa777')

  return (
    <>
      <Modal concept={{ ...concepts.res }} />
      <Info operator={{ isRes: true }} operation={{ ...results.res.lvlThree }} Texto="Halla el resultado de la Resta" rockts={rocketsSecond} resultanimateion={7}>
        <Minus />
      </Info>
      <h2 className="text-3xl font-bold text-center">Nivel 3</h2>
      <section className="container mx-auto gap-12 flex items-start justify-center mt-10">
        <article>
          {rocketsFirst.length >= 1 && <h2 className="font-semibold text-center text-2xl">Decenas</h2>}
          <div ref={boardFirst} className={`size-96 shadow-md bg-red-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center ${rocketsFirst.length === 1 && 'pointer-events-none'} `}>
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div className="size-96 bg-transparent flex justify-center items-center">
            {rocketsThree.length > 0 && (
              <Minus className="size-16" />
            )}
          </div>
        </article>
        <article className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-center text-2xl">Unidades</h2>
          <div ref={boardSecond} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center mb-4" onDrop={disable}>
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
            className={`size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center ${rocketsFirst.length === 2 && 'pointer-events-none'} ${rocketsThree.length === 0 && 'hidden'}`}
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
