import React from 'react';
import * as $ from "jquery" 
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import Footer from './component/footer';
import ProductDetail from './Pages/ProductDetail';
import ProductPage from './Pages/ProductPage';
import Home from "./Pages/Home";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
       <Route path='/' element={<Home />} /> 
       <Route path='/products' element={<ProductPage />} /> 
       <Route path='/productDetail' element={<ProductDetail />} /> 
      </Routes>
      <Footer />
    </>
  )
}

export default App
