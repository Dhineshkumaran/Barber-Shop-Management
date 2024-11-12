import React, {useEffect, useState} from "react";


const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function getOffers() {
      try {
        const response = await fetch('http://localhost:5000/getoffers');
        const result = await response.json();
        setOffers(result);
      } catch (error) {
        console.log("Error fetching offers");
      }
    }
    getOffers();
  }, []);

  return (
    <section className="section offers" id="offers" aria-label="offers">
      <div className="container">
      <figure className="card-banner img-holder" style={{ "--width": 200, "--height": 200 }}>
          <img src="./assets/images/offers.jpg" width="500" height="500" alt="" className="img-cover" style={{borderRadius:'50px'}}/>
      </figure>
        <div className="offers-list">
          {
            offers.map((offer, index)=>(
              <div className="offer-card">
                <h3>{offer.offer}</h3>
                <p>{offer.description}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Offers;
