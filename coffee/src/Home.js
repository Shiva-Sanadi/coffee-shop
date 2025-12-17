import React from 'react'
import Header from './components/Header';
import About from './pages/Aboutus';
import Menu from './pages/Menu';
import Products from './pages/Products';
import Review from './pages/Review';
import Contact from './pages/ContactUs';
import Blogs from './pages/Blogs'
const Home = () => {
  return (
    <>
        <Header/>
        <About/>
        <Menu/>
        <Products/>
        <Review/>
        <Contact/>
        <Blogs/>

    </>
  )
}

export default Home;