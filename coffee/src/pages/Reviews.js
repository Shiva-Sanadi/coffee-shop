import React, { useState } from 'react';
import reviewApi from '../api/reviewapi';

const Reviews = () => {
  const [data] = useState(reviewApi);
  
  return (
    <section className="review" id="review">
      <h1 className="heading"> customer's <span>review</span></h1>
      <div className="box-container">
        {data.map((curelem) => {
          const {id, para, image, name} = curelem;
          return (
            <div className="box" key={id}>
              <i className="fas fa-quote-left"></i>
              <p>{para}</p>
              <img src={image} className="user" alt={name}/>
              <h3>{name}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Reviews;