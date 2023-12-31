import { Card } from '@mui/material'
import { ElementDragg } from '../utils/types'

type ElementDraggItem = {
  dragg: ElementDragg
}

export function ItemDraggable({ dragg }: ElementDraggItem) {
  return (
    <Card
      className='cursor-grab p-2'
      sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
    >
      <img
        src={dragg.content}
        alt={dragg.id}
        className='inline-block h-16 w-16'
      />
    </Card>
  )
}
