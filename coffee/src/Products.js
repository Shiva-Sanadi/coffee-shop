import React,{useState} from 'react'
import prodApi from './api/prodapi';

const Products = () => {
  const [prod, setProd] = useState(prodApi);
  console.log(setProd);

  return (
    <>
        <sectiion class="products" id="products">
          <h1 class="heading"> our <span>products</span> </h1>
          <div class="box-container">
          {
            prod.map((curelem)=>{
              const {id, image, price, inr, title} = curelem;
              return(<>
                <div class="box" key={id}>
              <div class="icons">
                <a href="#" class="fas fa-shopping-cart"></a>
                <a href="#" class="fas fa-heart"></a> 
                <a href="#" class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src={image} alt=""/>
              </div>
              <div class="content">
                <h3>f{title}</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">{price}<span> {inr}</span></div>
              </div>
            </div>
              </>)
            })
          }
            
            
          </div>
        </sectiion>
    </>
  )
}

export default Products;