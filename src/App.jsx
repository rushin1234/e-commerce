import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Cart from './components/Cart/Cart';
import Product from './components/Product/Product';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/mens' element={<Products category='men' />} />
        <Route path='/womens' element={<Products category='women' />} />
        <Route path='/kids' element={<Products category='kid' />} />

        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:productId' element={<Product />} />
      </Routes>


      <ToastContainer />
    </>
  )
}

export default App