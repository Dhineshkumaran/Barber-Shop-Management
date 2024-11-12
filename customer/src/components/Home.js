import React from "react";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const App = () => {
  return (
    <div>
      <div className="custom">
      <div className="image-slider">
        <img style={{borderRadius:'50px'}}
          src="./assets/images/home 1.jpg"
          alt="Hair Cutting & Fitting 1"
          className="slider-image"
        />
        <img style={{borderRadius:'50px'}}
          src="./assets/images/home 2.jpg"
          alt="Hair Cutting & Fitting 2"
          className="slider-image"
        />
      </div>
      </div>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
