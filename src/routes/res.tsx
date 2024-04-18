import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { Link } from 'wouter'
import { Minus } from 'lucide-react'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksFirst = ['dungeon_master.exe']

const boxMocksSecond = ['dungeon_master.11exe', 'map_122.dat', 'map_222.dat', '2.txt', 'character212.txt']

const boxMocksThree = ['map_23.dat', 'character5.txt', 'character8.txt', 'shell324.dll', 'README1.txt', 'js.ts', 'rs.go', 'jija.bs']

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
      <Info operator={{ isRes: true }} operation={{ ...results.res.lvlOne }}>
        <Minus />
      </Info>
      <h2 className="text-3xl font-bold text-center">Nivel 1</h2>
      <section className="container mx-auto gap-12 flex items-start justify-center mt-10">
        {rocketsThree.length > 0 && (
          <div className="my-auto">
            <Minus className="size-16" />
          </div>
        )}
        <article>
          {rocketsFirst.length >= 1 && <h2 className="font-semibold text-center text-2xl">Decenas</h2>}
          <div ref={boardFirst} className={`size-96 shadow-md bg-red-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center ${rocketsFirst.length === 10 && 'bg-red-400'} ${rocketsFirst.length === 0 && 'hidden'}`}>
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        <article className="flex flex-col items-center justify-center">
          <h2 className="font-semibold text-center text-2xl">Unidades</h2>
          <div ref={boardSecond} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center mb-4" onDrop={disable}>
            {rocketsSecond.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardThree} className={`size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center ${rocketsThree.length === 0 && 'hidden'}`}>
            {rocketsThree.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
      </section>
      <nav className="flex justify-end px-6 my-5">
        <Link to="/res/lvl-two" className="hover:bg-black hover:text-white rounded  p-2 duration-300 hover:scale-105">Siguiente Nivel</Link>
      </nav>
    </>
  )
}
