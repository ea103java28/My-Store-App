import React from "react"
import { StoreProvider } from "../context/StoreContext"
import QueryStore from "../components/QueryStore";


const StorePage = () => {
    return (
        <div style={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
            <StoreProvider>
                <QueryStore></QueryStore>
            </StoreProvider>


        </div>
    )
}

export default StorePage;