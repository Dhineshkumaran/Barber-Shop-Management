import React, { useEffect, useState } from "react";

function Pricing() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await fetch('http://localhost:5000/getservices');
        const result = await response.json();
        setServices(result);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    }

    fetchServices();
  }, []);

  return (
    <section className="section pricing has-bg-image has-before" id="pricing" aria-label="pricing" style={{ backgroundColor: "white" }}>
      <div>
        <h2 className="h2 text-center">Services we provide</h2>
        <div>
          <ul className="grid-list" style={{ listStyleType: "none" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: "30px" }}>
              {services.map((service) => (
                <li key={service._id} data-filter={service.filter} style={{ margin: "20px" }}>
                  <div className="pricing-card">
                    <figure className="card-banner img-holder">
                      <img src={service.image_path} alt={service.service} className="img-cover" style={{ width: "auto", height: "auto" }} />
                    </figure>
                    <div className="wrapper">
                      <h3 className="h3 card-title">{service.service}</h3>
                      <p className="card-text">{service.description}</p>
                    </div>
                    <data className="card-price" value={service.price}>Rs.{service.price}</data>
                  </div>
                </li>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
