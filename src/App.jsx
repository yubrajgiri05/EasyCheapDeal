import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Component/Home/Component/Home'
import NotFound from './Component/General/NotFound'
import Product from './Component/Product/Component/Product'
import Carddetail from './Component/General/Carddetail'

const App = () => {
  const url = `https://fakestoreapi.com/products`;
  return (
    <>
     <BrowserRouter>
        <Routes>

            <Route path='/' element={<Home url={url}/>}/>
            <Route path='/product' element={<Product url={url}/>}/>
            <Route path='/productdetail' element={<Carddetail/>}/>
            <Route path='*' element={<NotFound/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
