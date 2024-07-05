import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../components/Homepage'
import ProdDetail from "../components/ProdDetail"

const Mainroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/product/:id' element={<ProdDetail />} />
        </Routes>
    )
}

export default Mainroutes