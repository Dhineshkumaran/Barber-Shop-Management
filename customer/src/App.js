import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import About from "./components/About";
import Offers from "./components/Offers";
import Home from "./components/Home";
import AdminDashboard from './components/AdminDashboard';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<AdminDashboard />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
