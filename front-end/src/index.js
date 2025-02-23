import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './landing_page/Home/HomePage';
import Pricing from './landing_page/Pricing/PricingPage';
import Products from './landing_page/Products/ProductPage';
import About from './landing_page/About/AboutPage';
import Support from './landing_page/Support/SupportPage';
import Signup from './landing_page/SignUp/Signup';
import Notfound from './landing_page/Notfound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/support' element={<Support />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);



