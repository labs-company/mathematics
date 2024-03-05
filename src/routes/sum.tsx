import { Plus } from 'lucide-react'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksFirst = ['dungeon_master.exe', 'map_1.dat', 'map_2.dat', 'character1.txt', 'character2.txt', 'shell32.dll', 'README.txt', 'aasdad']

const boxMocksSecond = ['map_2.dat', 'character5.txt', 'character8.txt', 'shell324.dll', 'README1.txt']

export default function Sum() {
  const [boardFirst, rocketsFirst] = useDragAndDrop<HTMLDivElement, string>(boxMocksFirst, {
    group: 'A',
  })

  const [boardSecond, rocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, {
    group: 'A',
  })

  return (
    <>
      <Modal concept={{ ...concepts.sum }} />
      <Info operator={{ isSum: true }} operation={{ ...results.sum.lvlOne }}>
        <Plus />
      </Info>
      <section className="container mx-auto gap-12 flex items-center justify-center mt-10">
        <article>
          <div ref={boardFirst} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center">
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        <article>
          <div ref={boardSecond} className="size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center">
            {rocketsSecond.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/rocket.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}
