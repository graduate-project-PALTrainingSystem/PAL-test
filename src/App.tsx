import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar/Navbar"; // Correct import path for Navbar
import MainPage from "./assets/components/pages/mainpage"; // Import MainPage component
import Footer from "./assets/components/Navbar/Footer"; // Your Footer component

function App() {
  return (
    <Router>
      <Navbar /> {/* Add Navbar component here */}
      <Routes>
        {/* Define the route to your custom main page */}
        <Route path="/" element={<MainPage />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer /> 
    </Router>
  );
}

export default App;
