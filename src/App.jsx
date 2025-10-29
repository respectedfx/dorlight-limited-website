import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <Router>
      <div className="app__mainwrapper__container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:slug" element={<PropertyDetail />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
