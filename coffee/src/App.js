import React from 'react'
import Home from './Home';
import Aboutus from "./pages/Aboutus";
// import Headers from "./pages/Headerss";
import Menu from './pages/Menuss';
import Blogs from './pages/Blog2';
import Contact from './pages/ContactUs';
import Products from './pages/Productsss';
import Reviews from './pages/Reviewssss';
import Eror from './pages/Error';
import { Routes, Route , Path } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Routes>
      <Route exact path='/' Component={Home}></Route>
      <Route path='/about' Component={Aboutus}></Route>
      <Route path='/menu' Component={Menu}></Route>
      <Route path='/products' Component={Products}></Route>
      <Route path='/reviews' Component={Reviews}></Route>
      <Route path='/contact' Component={Contact}></Route>
      <Route path='/blogs' Component={Blogs}></Route>
      <Route Component={Eror}></Route>
    </Routes>
    
    </>
  )
}

export default App;
