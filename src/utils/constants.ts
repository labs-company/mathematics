import { v4 as uuidv4 } from 'uuid'
import type { ElementDragg } from '../utils/types'

export const BOARD_SECTIONS = {
  backlog: 'backlog',
  done: 'done',
}

export const RESULTS = {
  sum: {
    lvlOne: {
      numberOne: 8,
      numberTwo: 5,
      result: 13,
    },
    lvlTwo: {
      numberOne: 14,
      numberTwo: 7,
      result: 21,
    },
    lvlThree: {
      numberOne: 28,
      numberTwo: 15,
      result: 43,
    },
  },
  res: {
    lvlOne: {
      numberOne: 15,
      numberTwo: 8,
      result: 7,
    },
    lvlTwo: {
      numberOne: 12,
      numberTwo: 5,
      result: 7,
    },
    lvlThree: {},
  },
  mul: {
    lvlOne: {
      numberOne: 4,
      numberTwo: 9,
      result: 36,
    },
    lvlTwo: {
      numberOne: 6,
      numberTwo: 8,
      result: 48,
    },
    lvlThree: {},
  },
  div: {
    lvlOne: {
      numberOne: 14,
      numberTwo: 5,
      result: 2.8,
    },
    lvlTwo: {
      numberOne: 20,
      numberTwo: 6,
      result: 3.3,
    },
    lvlThree: {},
  },
}

export const CONCEPTS = {
  sum: {
    title: '¿Que es la suma?',
    description:
    ' La suma es cuando juntas o agregas números para obtener un resultado. Por ejemplo, si tienes 2 galletas y te dan 3 más, ¿cuántas galletas tendrías en total? ¡Exacto! Tendrías 5 galletas.La suma se hace usando el signo \'+\' y se lee como \'más\'. Cuando ves un problema de suma, como 2 + 3, solo necesitas sumar esos números. Siempre empiezas con el primer número y luego añades el siguiente. En este caso, empiezas con 2 y luego añades 3, lo que te da un total de 5.',
  },
  res: {
    title: '¿Que es la resta?',
    description:
    'La resta es una operación matemática básica que consiste en quitar o restar una cantidad de otra. Es un concepto importante para que los niños aprendan a manejar los números y desarrollen habilidades matemáticas fundamentales. En términos sencillos, la resta se representa mediante el signo \'-\'\'. Por ejemplo, si tenemos los números 8 y 3, la resta de 3 a 8 se representa como 8 - 3, y el resultado es 5. Esto se puede entender como empezar con 8 y quitarle 3, lo que resulta en 5.',
  },
  mul: {
    title: '¿Que es la division?',
    description:
      'La multiplicación es una operación matemática que consiste en sumar un número tantas veces como indique otro número. Los números que se multiplican se llaman factores. El primer factor se llama multiplicando y el segundo factor se llama multiplicador. El resultado de la multiplicación se llama producto. Por ejemplo, si tienes 3 manzanas y quieres saber cuántas manzanas tienes en total si tienes 4 grupos de 3 manzanas, puedes hacer una multiplicación: 3 x 4 = 12. Entonces, tienes 12 manzanas en total. ¿Te gustaría saber más sobre la multiplicación? 😊',
  },
  div: {
    title: '¿Que es la division?',
    description:
    'La división es una de las operaciones matemáticas básicas. Consiste en fraccionar un número en partes iguales y averiguar el tamaño de esas partes que se forman. Por ejemplo, dividir 12 entre 3 significa dividir 12 en 3 grupos iguales, y el tamaño de estos grupos es de 4. La división es la operación inversa a la multiplicación. Una división tiene diferentes partes, llamadas términos. Los términos de la división son: Dividendo: es el número que vamos a dividir. Divisor: es el número que divide al dividendo, es decir la cantidad de partes en la que queremos dividir al dividendo. Cociente: es el resultado de la operación. Resto: es la parte que sobra, es decir que no se ha podido distribuir. Para poder aprender a dividir, primero hay que saber las tablas de multiplicar. Luego, se pueden aprender a hacer divisiones sin resto y con resto; ver las divisiones de una cifra, de dos cifras y más; también hacer ejercicios para repasar lo aprendido. ¿Te gustaría aprender a hacer divisiones? 😊',
  },
}

export const INITIAL_DRAGG: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
]

export const INITIAL_DRAGG_LVL_TWO: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },

  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/heart-svgrepo-com.svg',
    status: 'backlog',
  },
]

export const INITIAL_DRAGG_LVL_THREE: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/book-closed-svgrepo-com.svg',
    status: 'done',
  },
]

export const INITIAL_DRAGG_SUBTRACT: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/airplane-svgrepo-com.svg',
    status: 'done',
  },
]
export const INITIAL_DRAGG_SUBTRACT_LEVEL_TWO: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
]
export const INITIAL_DRAGG_SUBTRACT_LEVEL_THREE: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
]

export const INITIAL_DRAGG_MULTIPLY: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/branch-svgrepo-com.png',
    status: 'done',
  },
]
export const INITIAL_DRAGG_MULTIPLY_LEVEL_TWO: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
]
export const INITIAL_DRAGG_MULTIPLY_LEVEL_THREE: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
]

export const INITIAL_DRAGG_SPLIT: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/potted-cactus-svgrepo-com.png',
    status: 'done',
  },
]
export const INITIAL_DRAGG_SPLIT_LEVEL_TWO: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/magic-svgrepo-com.svg',
    status: 'done',
  },
]
export const INITIAL_DRAGG_SPLIT_LEVEL_THREE: ElementDragg[] = [
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'backlog',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },

  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
  {
    id: uuidv4(),
    content: '/sugar-svgrepo-com.svg',
    status: 'done',
  },
]
