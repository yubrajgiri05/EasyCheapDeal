import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Component/Home/Component/Home'
import NotFound from './Component/General/NotFound'

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
