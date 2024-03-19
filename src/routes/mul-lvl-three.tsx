import { Asterisk } from 'lucide-react'
import { useDragAndDrop } from '@formkit/drag-and-drop/react'
import type { ParentConfig } from '@formkit/drag-and-drop'
import Info from '../components/info'
import { concepts, results } from '../lib/const'
import Modal from '../components/modal'
import Box from '../components/box'
import Image from '../components/image'

const boxMocksFirst = ['dungeon_master.exe', 'map_1.dat', 'map_2.dat', 'character1.txt', 'character2.txt']

const boxMocksSecond = ['map_2.dat', 'character5.txt', 'character8.txt', 'shell324.dll', 'README1.txt']

const boxMocksThree = ['dungeon_master.11exe', 'map_122.dat', 'map_222.dat', '2.txt', 'character212.txt']

const boxMocksFour = ['asdas.exe', 'sasa.pwd', 'asdasd.sb', 'asdasdas.s', 'h.cc']

const boxMocksFive = ['asdas-x.exe', 'sasax.pwd', 'asdaxsd.sb', 'asdaxsdas.s', 'hx.cc']

export default function MulLvlThree() {
  const configFirst: Partial<ParentConfig<string>> = { group: 'A' }
  const configSecond: Partial<ParentConfig<string>> = { group: 'A' }
  const configThree: Partial<ParentConfig<string>> = { group: 'A' }
  const configFour: Partial<ParentConfig<string>> = { group: 'A' }
  const configFive: Partial<ParentConfig<string>> = { group: 'A' }

  const [boardFirst, rocketsFirst] = useDragAndDrop<HTMLDivElement, string>(boxMocksFirst, configFirst)

  const [boardSecond, rocketsSecond] = useDragAndDrop<HTMLDivElement, string>(boxMocksSecond, configSecond)

  const [boardThree, rocketsThree] = useDragAndDrop<HTMLDivElement, string>(boxMocksThree, configThree)

  const [boardFour, rocketsFour] = useDragAndDrop<HTMLDivElement, string>(boxMocksFour, configFour)

  const [boardFive, rocketsFive] = useDragAndDrop<HTMLDivElement, string>(boxMocksFive, configFive)

  if (rocketsFirst.length === 10)
    configFirst.group = 'B'

  if (rocketsSecond.length === 10)
    configSecond.group = 'D'

  if (rocketsThree.length === 10)
    configThree.group = 'F'

  if (rocketsFour.length === 10)
    configFour.group = 'X'

  if (rocketsFive.length === 10)
    configFive.group = 'Z'
  return (
    <>
      <Modal concept={{ ...concepts.mul }} />
      <Info operator={{ isMul: true }} operation={{ ...results.mul.lvlThree }}>
        <Asterisk />
      </Info>
      <section className="container mx-auto gap-12 flex items-start justify-center mt-10">
        <article className="flex flex-col gap-4 items-center justify-center">
          <div ref={boardFirst} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center">
            {rocketsFirst.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/basketball.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardThree} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center">
            {rocketsThree.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/basketball.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>

        <article className="flex flex-col gap-4 items-center justify-center">
          <div ref={boardSecond} className="size-96 shadow-md bg-blue-400 rounded-lg px-4 py-2 flex flex-wrap gap-1 items-center justify-center">
            {rocketsSecond.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/basketball.svg" description={rocket} />
              </Box>
            ))}
          </div>
          <div ref={boardFour} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center">
            {rocketsFour.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/basketball.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
        <article className="flex flex-col gap-4 items-center justify-center">
          <div ref={boardFive} className="size-96 shadow-md bg-blue-400 rounded-lg flex flex-wrap gap-1 items-center justify-center">
            {rocketsFive.map(rocket => (
              <Box key={rocket}>
                <Image path="/svg/basketball.svg" description={rocket} />
              </Box>
            ))}
          </div>
        </article>
      </section>
    </>
  )
}
