import React from "react";
// import { Route, Switch, BrowserRouter } from 'react-router-dom'

import Header from "./components/semantics/Header";
import Footer from "./components/semantics/Footer";

import Home from "./components/Home";
import ContactMe from "./components/connect/ContactMe";
// import Testimonials from "./components/connect/Testimonials";
// import NotFound from "./components/Error404";

import { allSiteData, contactData, personalData } from "./data/index";
import "./App.css";

function App() {
  // <Testimonials jsonData={contactData} />
  return (
    <div className="App">
      <Header allSiteData={allSiteData} jsonData={personalData} />
      {/* <Home />
      <ContactMe jsonData={contactData} /> */}
      <Footer allSiteData={allSiteData} jsonData={personalData} />
    </div>
  );
}

export default App;
