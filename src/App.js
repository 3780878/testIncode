import React from 'react';
import './App.css';
import Router from "./Router";
import Header from "./components/static/Header";
import Footer from "./components/static/Footer";

export default function App() {

  return (
      <div className="app-container container">
          <Header/>
          <Router/>
          <Footer/>
      </div>
  )

}



