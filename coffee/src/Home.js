import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Menu from './Menu';
import Products from './Products';
import Review from './Review';
import Contact from './Contact';
import Blogs from './Blogs';
import Footer from './Footer';
const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <About/>
        <Menu/>
        <Products/>
        <Review/>
        <Contact/>
        <Blogs/>
        <Footer/>

    </>
  )
}

export default Home;