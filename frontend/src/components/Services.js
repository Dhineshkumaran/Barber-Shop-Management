import React from "react";
import './Services.css';
function Pricing() {
  return (
    <section className="section pricing has-bg-image has-before" id="pricing" aria-label="pricing" style={{ backgroundColor: "white" }}>
      <div>
        <h2 className="h2 text-center">Services we provide</h2>
        <div>
          
          <ul className="grid-list" style={{ listStyleType: "none" }}>
            <div style={{ display: "flex", justifyContent: "space-around", padding: "30px" }}>
              <li data-filter="shaving">
                <div className="pricing-card">
                  <figure className="card-banner img-holder" style={{ "--width": 90, "--height": 90 }}>
                    <img src="./assets/images/pricing-1.jpg" width="90" height="90" alt="Hair Cutting & Fitting" className="img-cover" />
                  </figure>
                  <div className="wrapper">
                    <h3 className="h3 card-title">Hair Cutting & Fitting</h3>
                    <p className="card-text">Clean & simple 30-40 minutes</p>
                  </div>
                  <data className="card-price" value="300">Rs.500</data>
                </div>
              </li>
              <li data-filter="shaving">
                <div className="pricing-card">
                  <figure className="card-banner img-holder" style={{ "--width": 90, "--height": 90 }}>
                    <img src="./assets/images/pricing-2.jpg" width="90" height="90" alt="Shaving & Facial" className="img-cover" />
                  </figure>
                  <div className="wrapper">
                    <h3 className="h3 card-title">Shaving & Facial</h3>
                    <p className="card-text">Clean & simple 30-40 minutes</p>
                  </div>
                  <data className="card-price" value="300">Rs.300</data>
                </div>
              </li>
              <li data-filter="face-washing">
                <div className="pricing-card">
                  <figure className="card-banner img-holder" style={{ "--width": 90, "--height": 90 }}>
                    <img src="./assets/images/pricing-3.jpg" width="90" height="90" alt="Hair Color & Wash" className="img-cover" />
                  </figure>
                  <div className="wrapper">
                    <h3 className="h3 card-title">Hair Color & Wash</h3>
                    <p className="card-text">Clean & simple 30-40 minutes</p>
                  </div>
                  <data className="card-price" value="400">Rs.400</data>
                </div>
              </li>
              <li data-filter="body-treatments">
                <div className="pricing-card">
                  <figure className="card-banner img-holder" style={{ "--width": 90, "--height": 90 }}>
                    <img src="./assets/images/pricing-4.jpg" width="90" height="90" alt="Body Massage" className="img-cover" />
                  </figure>
                  <div className="wrapper">
                    <h3 className="h3 card-title">Body Massage</h3>
                    <p className="card-text">Clean & simple 30-40 minutes</p>
                  </div>
                  <data className="card-price" value="800">Rs.800</data>
                </div>
              </li>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around", padding: "30px" }}>
              <li data-filter="face-washing">
                <div className="pricing-card">
                  <figure className="card-banner img-holder" style={{ "--width": 90, "--height": 90 }}>
                    <img src="./assets/images/pricing-6.jpg" width="90" height="90" alt="Facial & Face Wash" className="img-cover" />
                  </figure>
                  <div className="wrapper">
                    <h3 className="h3 card-title">Facial & Face Wash</h3>
                    <p className="card-text">Clean & simple 30-40 minutes</p>
                  </div>
                  <data className="card-price" value="500">Rs.500</data>
                </div>
              </li>
              <li data-filter="body-treatments">
                <div className="pricing-card">
                  <figure className="card-banner img-holder" style={{ "--width": 90, "--height": 90 }}>
                    <img src="./assets/images/pricing-7.jpg" width="90" height="90" alt="Backbone Massage" className="img-cover" />
                  </figure>
                  <div className="wrapper">
                    <h3 className="h3 card-title">Backbone Massage</h3>
                    <p className="card-text">Clean & simple 30-40 minutes</p>
                  </div>
                  <data className="card-price" value="600">Rs.600</data>
                </div>
              </li>
              <li data-filter="body-treatments">
                <div className="pricing-card">
                  <figure className="card-banner img-holder" style={{ "--width": 90, "--height": 90 }}>
                    <img src="./assets/images/pricing-8.jpg" width="90" height="90" alt="Meditation & Massage" className="img-cover" />
                  </figure>
                  <div className="wrapper">
                    <h3 className="h3 card-title">Meditation & Massage</h3>
                    <p className="card-text">Clean & simple 30-40 minutes</p>
                  </div>
                  <data className="card-price" value="1000">Rs.1000</data>
                </div>
              </li>
              <li data-filter="shaving">
                <div className="pricing-card">
                  <figure className="card-banner img-holder" style={{ "--width": 90, "--height": 90 }}>
                    <img src="./assets/images/pricing-9.jpg" width="90" height="90" alt="Hair Cut & Shave" className="img-cover" />
                  </figure>
                  <div className="wrapper">
                    <h3 className="h3 card-title">Hair Cut & Shave</h3>
                    <p className="card-text">Clean & simple 30-40 minutes</p>
                  </div>
                  <data className="card-price" value="400">Rs.400</data>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
