import React, { createContext, useContext, useState, type Dispatch, type SetStateAction } from "react"

type StoreContextType = {
    rowData: string[],
    setRowData: Dispatch<SetStateAction<string[]>>
    printSomething: () => string
}

// 建立一個 Context
const StroeContext = createContext<StoreContextType | null>(null)

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {

    const [rowData, setRowData] = useState<string[]>(['a', 'b', 'c'])
    const printSomething = () => {
        return 'printSomething......'
    }

    return (
        <StroeContext.Provider value={{ rowData, setRowData, printSomething }} >
            {children}
        </StroeContext.Provider>
    )

}

export const useStore = () => {
    const context = useContext(StroeContext)
    if (!context) {
        throw new Error('StoreContext Error')
    }
    return context
}


