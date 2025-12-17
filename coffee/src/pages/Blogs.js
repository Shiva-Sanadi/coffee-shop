import React, { useState } from 'react';
import blogsApi from '../api/blogsapi';

const Blogs = () => {
  const [data] = useState(blogsApi);
  
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading"> our <span>blogs</span></h1>
      <div className="box-container">
        {data.map((curelem) => {
          const {id, title, span, para, btn} = curelem;
          return (
            <div className="box" key={id}>
              <div className="image">
                <img src="/images/coffee12.webp" alt={title}/>
              </div>
              <div className="content">
                <a href="#blogs" className="title">{title}</a>
                <span>{span}</span>
                <p>{para}</p>
                <a href="#blogs" className="btn">{btn}</a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blogs;