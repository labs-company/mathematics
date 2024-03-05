import { Minus } from 'lucide-react'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksFirst = ['dungeon_master.exe', 'map_1.dat', 'map_2.dat', 'character1.txt', 'character2.txt', 'shell32.dll', 'README.txt', 'README12.txt', 'hsl.xx', 'typescript.js']

const boxMocksSecond = ['map_2.dat', 'character5.txt', 'character8.txt', 'shell324.dll', 'README1.txt', 'js.ts', 'rs.go', 'jija.bs']

const boxMocksThree = ['dungeon_master.11exe', 'map_122.dat', 'map_222.dat', '2.txt', 'character212.txt']

export default function Res() {
  const [boardFirst, rocketsFirst] = useDragAndDrop<HTMLDivElement, string>(boxMocksFirst, {
    group: 'A',
  })

  const [boardSecond, rocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, {
    group: 'A',
  })

  const [boardThree, rocketsThree] = useDragAndDrop<HTMLDivElement, string>(boxMocksThree, {
    group: 'A',
  })
  return (
    <>
      <Modal concept={{ ...concepts.res }} />
      <Info operator={{ isRes: true }} operation={{ ...results.res.lvlOne }}>
        <Minus />
      </Info>
      <section className="container mx-auto gap-12 flex items-start justify-center mt-10">
        <article className="flex flex-col gap-4 items-center justify-center">
          <div ref={boardFirst} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center">
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardThree} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center">
            {rocketsThree.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        <article>
          <div ref={boardSecond} className="size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center">
            {rocketsSecond.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/book.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}
