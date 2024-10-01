import React, { useState, useEffect } from "react";
import './Appointment.css';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email_address: "",
    phone: "",
    category: "",
    gender: "",
    date: "",
    time: "",
    paymentMethod: "card", // Default payment method
  });

  const categoryPrices = {
    "Hair Cutting & Fitting": 500,
    "Shaving & Facial": 300,
    "Hair Color": 400,
    "Body Massage": 800,
    "Facial & Face Wash": 500,
    "Backbone Massage": 600,
    "Meditation & Massage": 1000,
    "Hair Cut & Shave": 400,
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
  
    script.onerror = () => {
      alert('Failed to load payment gateway. Please try again later.');
    };
  
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const initiatePayment = () => {
    const amount = categoryPrices[formData.category] * 100; // Amount in paise (INR currency)

    const paymentMethodMapping = {
      'card': ['card'],
      'netbanking': ['netbanking'],
      'gpay': ['upi'],
      'phonepe': ['upi']
    };

    const options = {
      key: 'rzp_test_4rdgre6savrrmw', // Replace with your Razorpay Key ID
      amount: amount,
      currency: 'INR',
      name: 'Your Company Name',
      description: 'Appointment Payment',
      image: 'https://your-logo-url', // Optional
      handler: function (response) {
        // Handle the payment success
        console.log('Payment successful!', response);
        // Here you can call your backend to verify the payment and create the appointment
      },
      prefill: {
        name: formData.name,
        email: formData.email_address,
        contact: formData.phone
      },
      notes: {
        address: 'Address Note'
      },
      theme: {
        color: '#F37254'
      },
      method: paymentMethodMapping[formData.paymentMethod],
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Initiate payment
    initiatePayment();
  };

  return (
    <section className="section appointment" id="appointment" aria-label="appointment">
      <div className="container">
      <div className="image-container">
          <img src="https://marketplace.canva.com/EAF6DOq8wwA/1/0/1600w/canva-black-and-white-modern-illustrative-barbershop-logo-MnTa2CvxlTE.jpg" alt="Appointment"  width= "1500" height= "700"/>
        </div>
        <div className="appointment-card">
          <div className="card-content">
            <h2 className="h2 section-title">Make Appointment</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="input-wrapper">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <input
                  type="email"
                  name="email_address"
                  placeholder="Email Address"
                  value={formData.email_address}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="" disabled>Select Category</option>
                  {Object.keys(categoryPrices).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {formData.category && (
                <>
                  <p className="price">Price: {categoryPrices[formData.category]}</p>
                </>
              )}

              <div className="input-wrapper">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="input-field date-picker"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="input-field time"
              /><br></br>

              <PaymentOptions
                paymentMethod={formData.paymentMethod}
                onPaymentMethodChange={handleChange}
              />

              <button type="submit" className="glowing-button">
                <span>Book Appointment</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const PaymentOptions = ({ paymentMethod, onPaymentMethodChange }) => {
  return (
    <div className="input-wrapper">
      <select
        name="paymentMethod"
        value={paymentMethod}
        onChange={onPaymentMethodChange}
        className="input-field"
        required
      >
        <option value="card">Credit/Debit Card</option>
        <option value="netbanking">Net Banking</option>
        <option value="gpay">GPay</option>
        <option value="phonepe">PhonePe</option>
      </select>
    </div>
  );
};

export default Appointment;
