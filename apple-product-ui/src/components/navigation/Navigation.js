import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from '../layout/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PaymentSuccess from '../pages/PaymentSuccess'
import Menu from '../pages/Menu'
import { Footer } from '../layout/Footer'

const Navigation = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/payment-success' element={<PaymentSuccess/>}/>
        <Route path='/menu' element={<Menu/>}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default Navigation