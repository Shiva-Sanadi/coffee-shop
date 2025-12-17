import React, { useState } from 'react';
import menuItems from '../api/menuapi';

const Menu = () => {
  const [data] = useState(menuItems);
  
  return (
    <section className="menu" id="menu">
      <h1 className="heading">our <span>menu</span></h1>
      <div className="box-container">
        {data.map((curelem) => {
          const {id, image, heading, price, inr, btn} = curelem;
          return (
            <div className="box" key={id}>
              <img src={image} alt={heading}/>
              <h3>{heading}</h3>
              <div className="price">{price} <span>{inr}</span></div>
              <a href="#menu" className="btn">{btn}</a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Menu;