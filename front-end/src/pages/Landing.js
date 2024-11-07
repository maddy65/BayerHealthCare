import React from "react";
import "./main.css";

export default function Landing() {
  return (
    <>
      <div className="header-part">
        <h1 className="text-bar">Bayer Healthcare</h1>
        <div className="menu-bar">
          <ul className="menu-bar">
            <li>
              <a href="##">Home</a>
            </li>
            <li>
              <a href="##">Health Topics</a>
            </li>
            <li>
              <a href="##">Resources</a>
            </li>
            <li>
              <a href="##">About US</a>
            </li>
            <li>
              <a href="##">Contact</a>
            </li>
            <li>
              <a href="/login">Log In</a>
            </li>
          </ul>
        </div>
        <h1 className="text-bar-one">Your Health,Our Priority</h1>
        <h5 className="text-bar-two">
          Explore the latest health information and resources from Bayer
          Healthcare
        </h5>
      </div>
      <div className="banner-container">
        <h3 className="text-F">Featured Health Topics</h3>
        <div className="banner-bar">
          <div className="cont-one">
            <h2 className="header-text">COVID-19 Updates</h2>
            <p>
              Stay informed about the latest COVID-19 guidelines and vaccination
              information.
            </p>
            <button className="btn-header">
              <a href="##">Learn More</a>
            </button>
          </div>
          <div className="cont-one">
            <h2 className="header-text">COVID-19 Updates</h2>
            <p>
              Stay informed about the latest COVID-19 guidelines and vaccination
              information.
            </p>
            <button className="btn-header">
              <a href="##">Learn More</a>
            </button>
          </div>
          <div className="cont-one">
            <h2 className="header-text">COVID-19 Updates</h2>
            <p>
              Stay informed about the latest COVID-19 guidelines and vaccination
              information.
            </p>
            <button className="btn-header">
              <a href="##">Learn More</a>
            </button>
          </div>
          <div className="cont-one">
            <h2 className="header-text">COVID-19 Updates</h2>
            <p>
              Stay informed about the latest COVID-19 guidelines and vaccination
              information.
            </p>
            <button className="btn-header">
              <a href="##">Learn More</a>
            </button>
          </div>
        </div>
      </div>

<div className="banner-container-one">

        <div className="banner-bar-one">
        <h3 className="text-F">Featured Health Topics</h3>
          <div className="cont-one-one">
            <h2 className="header-text-one">Bayer Launches New Initiative for Preventive Healthcare</h2>
            <p>
              Stay informed about the latest COVID-19 guidelines and vaccination
              information.
            </p>
            <button className="btn-header-one">
              <a href="##">Read Full Article</a>
            </button>
          </div>
       
          <div className="cont-one-one-two">
            <h2 className="header-text-one">Bayer Launches New Initiative for Preventive Healthcare</h2>
            <p>
              Stay informed about the latest COVID-19 guidelines and vaccination
              information.
            </p>
            <button className="btn-header-one">
            <a href="##">Read Full Article</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
