import {createContext} from 'react'


type ContextGlobals = {
    dragg: string
}

type ContextProps = {
    children: JSX.Element
}
const Context = createContext<ContextGlobals | null>(null)

export default function ContextDraggable({children}: ContextProps) {
    return  <Context.Provider value={null}>
        {children}
    </Context.Provider>
}