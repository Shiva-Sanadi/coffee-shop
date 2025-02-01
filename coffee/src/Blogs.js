import React,{useState} from 'react'
import blogsApi from './api/blogsapi';


const Blogs = () => {
  const [data, setData] = useState(blogsApi);
  console.log(setData);
  return (
    <>
          <section class="blogs" id="blogs">
            <h1 class="heading"> our <span>blogs</span></h1>

            <div class="box-container">
                {
                  data.map((curelem)=>{
                    const {id, title, span, para, btn} = curelem;
                    return(<>
                     
                            <div class="box">
                                <div class="image">
                                  <img src="images/coffee12.webp" alt="aaaaa"/>
                                </div>
                                <div class="content">
                                <a href="#" class="title">{title}</a>
                                <span>{span}</span>
                                <p>{para}.</p>
                                <a href="#" class="btn">{btn}</a>
                              </div>
                              </div>
                            
                    </>)
                  })
                }
                </div>
             
          </section>
    </>
  )
}

export default Blogs;