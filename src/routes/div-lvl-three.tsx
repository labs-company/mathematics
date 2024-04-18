import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import { Link } from 'wouter'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'
import InfoDiv from '../components/infodiv'

const boxMocksFirst: string[] = []

const boxMocksSecond: string[] = []

const boxMocksThree: string[] = []

const boxMocksGeneral = ['dungeon_master.11exe', 'map_122.dat', 'map_222.dat', '2.txt', 'map_2.dadadt', 'character5.txt', 'character8.txt', 'shell324.dll', 'README1.txt', 'dungeon_master.exe', 'map_1.dat', 'map_2.dat', 'character1.txt', 'character2.txt']

export default function Div() {
  const [boardFirst, rocketsFirst] = useDragAndDrop<HTMLDivElement, string>(boxMocksFirst, {
    group: 'A',
  })

  const [boardSecond, rocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, {
    group: 'A',
  })

  const [boardThree, rocketsThree] = useDragAndDrop<HTMLDivElement, string>(boxMocksThree, {
    group: 'A',
  })
  const [boardGeneral, rocketsGeneral] = useDragAndDrop<HTMLDivElement, string>(boxMocksGeneral, {
    group: 'A',
  })

  return (
    <>
      <Modal concept={{ ...concepts.div }} />
      <InfoDiv operator={{ isDiv: true }} operation={{ ...results.div.lvlOne }}></InfoDiv>
      <h2 className="text-3xl font-bold text-center">Nivel 3</h2>
      <div ref={boardGeneral} className="size-10/12 p-10 m-auto shadow-md border border-black rounded-lg flex flex-wrap gap-1 items-center justify-evenly">
        {rocketsGeneral.map(rocket => (
          <Box key={rocket}>
            <Image path="/svg/basketball.svg" description={rocket} />
          </Box>
        ))}
      </div>
      <section className="container mx-auto gap-12 flex items-start justify-center mt-10">
        <article className="flex gap-4 items-center justify-center">
          <div ref={boardFirst} className={`size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center ${rocketsFirst.length === 5 && 'bg-red-400 pointer-events-none'}`}>
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/basketball.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardSecond} className={`size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center ${rocketsSecond.length === 5 && 'bg-red-400 pointer-events-none'}`}>
            {rocketsSecond.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/basketball.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardThree} className={`size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center ${rocketsThree.length === 4 && ' pointer-events-none'}`}>
            {rocketsThree.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/basketball.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
      </section>
      <nav className="flex justify-between px-6 my-5">
        <Link to="/div/lvl-two" className="hover:bg-black hover:text-white rounded  p-2 duration-300 hover:scale-105">Regresar</Link>
        <Link to="/div" className="hover:bg-black hover:text-white rounded  p-2 duration-300 hover:scale-105">Regresar al Nivel 1</Link>
      </nav>
    </>
  )
}
