import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Aboutus from "./pages/Aboutus";
import Menu from './pages/Menu';
import Blogs from './pages/Blogs';
import Contact from './pages/ContactUs';
import Products from './pages/Products';
import Reviews from './pages/Review';
import Error from './pages/Error';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/products' element={<Products />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;