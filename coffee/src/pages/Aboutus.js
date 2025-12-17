import React from 'react';

const Aboutus = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>about</span> us </h1>
      <div className="row">
        <div className="image">
          <img src="/images/coffee7.webp" alt='About our coffee'/>
        </div>
        <div className="content">
          <h3>what makes our coffee special?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maxime expedita qui odit corrupti laborum sunt vero ipsa eius autem nesciunt, libero ducimus quam a eos obcaecati explicabo consequatur culpa?</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis reprehenderit doloremque nisi iste, molestiae, eaque magnam alias vel, obcaecati consequatur doloribus voluptatum enim ad nemo! Sed dolorum doloribus dicta doloremque.</p>
          <a href="#menu" className="btn">learn more</a>
        </div>
      </div>
    </section>
  );
}

export default Aboutus;