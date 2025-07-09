import React from "react"
import { useStore } from "../context/StoreContext"



const QueryStore = () => {

    const { rowData, printSomething } = useStore();


    return (
        rowData.map(item => (<h1><div style={{ color: 'blue' }}>{item} < div style={{ color: 'red' }}> printSomething() </div ></div></h1 >))

    )
}

export default QueryStore