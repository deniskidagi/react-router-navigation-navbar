import React from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import Home from './views/pages/Home'
import NotFoundPage from './views/pages/NotFoundPage'

const Routers = () => {
  return (
            <Routes>
                 <Route path= '/' element={<Home/>}/> 
                 <Route path='/not-found' element={<NotFoundPage/>}/>
                 <Route path={"*"} element={<Navigate to={'/not-found'} replace/>}/>
            </Routes>
  )
}

export default Routers