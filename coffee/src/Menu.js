import React,{useState} from 'react'
import menuItems from './api/menuapi';

const Menu = () => {
  const [data, setData] = useState (menuItems);
  console.log(setData);
  return (
    <>
        <section class="menu" id="menu">
  <h1 class="heading">our <span>menu</span></h1>
  <div class="box-container">
    
    {
      data.map((curelem)=>{
        const {id, image, heading, price, inr,btn} = curelem;
        return(<>
                <div class="box" key={id}>
                  <img src={image} alt=""/>
                  <h3>{heading}</h3>
                  <div class="price">{price}<span>{inr}</span></div>
                  <a href="#" class="btn">{btn}</a>
                </div>
        </>)
      })
    }
      
    
    
  </div>
</section>
    </>
  )
}

export default Menu;