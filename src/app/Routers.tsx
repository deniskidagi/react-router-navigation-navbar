import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './views/pages/Home'

const Routers = () => {
  return (
            <Routes>
                 <Route path= '/' element={<Home/>}/> 
         </Routes>
  )
}

export default Routers