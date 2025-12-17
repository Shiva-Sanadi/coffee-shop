import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="home" id="error">
      <div className="content">
        <h3>404, Page Not Found</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum delectus non rem tempore maxime vel repudiandae harum, vitae error asperiores quisquam sunt dolorum reprehenderit explicabo quibusdam corrupti magnam. Adipisci, ducimus.</p>
        <Link to="/" className="btn">Go Back</Link>
      </div> 
    </section>
  );
}

export default Error;