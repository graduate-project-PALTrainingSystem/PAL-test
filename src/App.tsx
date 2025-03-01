import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar";
import MainPage from "./assets/components/pages/mainpage"; 
import Footer from "./assets/components/Navbar/Footer";
import Login from "./assets/components/pages/Login";
import ForgotPassword from "./assets/components/pages/ForgotPassword";
import Contact from "./assets/components/pages/Contact";
import Signup from "./assets/components/pages/Signup"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} /> {/* Fixed capitalization */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
