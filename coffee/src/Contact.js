import React from 'react'

const Contact = () => {
  return (
    <>
            <section class="contact" id="contact">
              <h1 class="heading"><span>contact</span> us</h1>
              <div class="row">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15243983.007440727!2d81.
                914063!3d21.125498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676978631384!5m2!1sen!2sin"
                allowfullscreen="" 
                loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <form action="">
                  <h3>get in touch</h3>
                  <div class="inputBox">
                    <span class="fas fa-user"></span>
                    <input type="text" placeholder="name"/>
                  </div>
                  <div class="inputBox">
                    <span class="fas fa-envelope"></span>
                    <input type="email" placeholder="email"/>
                  </div>
                  <div class="inputBox">
                    <span class="fas fa-phone"></span>
                    <input type="number" placeholder="number"/>
                  </div>
                  <input type="submit" value="contact now" class="btn"/>
                </form>
              </div>

            </section>
    </>
  )
}

export default Contact;