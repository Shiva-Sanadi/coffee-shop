import React, { useState } from 'react';
import prodApi from '../api/prodapi';

const Products = () => {
  const [prod] = useState(prodApi);

  return (
    <section className="products" id="products">
      <h1 className="heading"> our <span>products</span> </h1>
      <div className="box-container">
        {prod.map((curelem) => {
          const {id, image, price, inr, title} = curelem;
          return (
            <div className="box" key={id}>
              <div className="icons">
                <a href="#products" className="fas fa-shopping-cart"></a>
                <a href="#products" className="fas fa-heart"></a> 
                <a href="#products" className="fas fa-eye"></a>
              </div>
              <div className="image">
                <img src={image} alt={title}/>
              </div>
              <div className="content">
                <h3>{title}</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">{price} <span>{inr}</span></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;