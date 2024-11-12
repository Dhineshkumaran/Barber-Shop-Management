import React from "react";

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <img src="https://marketplace.canva.com/EAFNT_ZtD0c/2/0/1600w/canva-grey-vintage-barbershop-logo-gGomPe7C1NE.jpg"alt="" width={500}></img>
        <p className="about-description">
          Welcome to our Barber Shop! We are committed to providing the best grooming services 
          with a personalized touch. Our experienced barbers are skilled in various hair styling 
          techniques, ensuring that each customer leaves satisfied. Whether it's a classic haircut, 
          beard trim, or modern styling, we've got you covered. Our shop creates a relaxing environment 
          where you can unwind and leave feeling refreshed.
        </p>
      </div>
    </section>
  );
};

export default About;
