import React from 'react'
// import Coffeeimg from "./images/coffee7.webp";
// import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <>
        <section class="about" id="about">
  <h1 class="heading"><span>about</span> us </h1>
  <div class="row">
    <div class="image">
    <img src="images/coffee7.webp" alt='wwww'/>
      {/* <img src={Coffeeimg} alt=""/> */}
    </div>
    <div class="content">
      <h3>what makes our coffee special?</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maxime expedita qui odit corrupti laborum sunt vero ipsa eius autem nesciunt, libero ducimus quam a eos obcaecati explicabo consequatur culpa?</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis reprehenderit doloremque nisi iste, molestiae, eaque magnam alias vel, obcaecati consequatur doloribus voluptatum enim ad nemo! Sed dolorum doloribus dicta doloremque.</p>
      <a href="#" class="btn">learn more</a>
    </div>
  </div>
</section>
    </>
  )
}

export default About;