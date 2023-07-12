import {createContext, useState} from 'react'


type ContextGlobals = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type ContextProps = {
    children: JSX.Element
}

const Context = createContext<ContextGlobals | null>(null)

export default function ContextDraggable({children}: ContextProps) {
    const [open, setOpen] = useState(false);

    return  <Context.Provider value={{open, setOpen}}>
        {children}
    </Context.Provider>
}