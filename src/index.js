import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import FooterPage from "./components/Footer";
import OurProducts from "./Pages/OurProductsPage";
// import additional pages here if needed

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div className="bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutUs" element={<AboutUsPage/>} />
        <Route path='/ourproducts' element={<OurProducts/>} />
        {/* Uncomment and add more routes as needed */}
        {/* <Route path="/about" element={<AboutUsPage />} /> */}
        {/* <Route path="/contact" element={<ContactUs />} /> */}
      </Routes>
      <FooterPage />
    </div>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
