import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading"><span>contact</span> us</h1>
      <div className="row">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15243983.007440727!2d81.914063!3d21.125498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676978631384!5m2!1sen!2sin"
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>

        <form onSubmit={handleSubmit}>
          <h3>get in touch</h3>
          <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name" required/>
          </div>
          <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" required/>
          </div>
          <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="tel" placeholder="number" required/>
          </div>
          <input type="submit" value="contact now" className="btn"/>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;