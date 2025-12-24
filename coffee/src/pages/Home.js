// coffee-shop/coffee/src/Home.js
import React from 'react'
import Header from '../components/Header';
import About from './Aboutus';
import Menu from './Menu';
import Products from './Products';
import Review from './Reviews';
import Contact from './ContactUs';
import Blogs from './Blogs'
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



