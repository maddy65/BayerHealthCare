import React, { useState } from "react";
import { Modal } from "@material-ui/core";
import "./main.css";
import Login from "./Login";

export default function Landing() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <a onClick={handleOpen}>Log In</a>
            </li>
          </ul>
        </div>
        <h1 className="text-bar-one">Your Health,Our Priority</h1>
        <h5 className="text-bar-two">
          Explore the latest health information and resources from Bayer
          Healthcare
        </h5>
      </div>
      <div className="container">
        <h2>Featured Health Topics</h2>
        <div class="flex-container">
          <div>
            <h2 className="header-text">COVID-19 Updates</h2>
            <p>
              Stay informed about the latest COVID-19 guidelines and vaccination
              information.
            </p>
            <button className="btn-header">
            Learn More
            </button>
          </div>
          <div>
            <h2 className="header-text">Heart Health</h2>
            <p>
              Discover tips and information for maintaining a healthy heart and
              cardiovascular system.
            </p>
            <button className="btn-header">
             Learn More
            </button>
          </div>
          <div>
            {" "}
            <h2 className="header-text">Mental Wellness</h2>
            <p>
              Explore resources and support options for maintaining good mental
              health.
            </p>
            <button className="btn-header">
            Learn More
            </button>
          </div>
          <div>
            {" "}
            <h2 className="header-text">Nutrition & Diet</h2>
            <p>
              Learn about balanced nutrition and healthy eating habits for
              overall wellbeing.
            </p>
            <button className="btn-header">
            Learn More
            </button>
          </div>
        </div>
        {/*  */}
        <h2>Latest Health News</h2>
        <div class="flex-container-one">
          <div>
            <h2>Bayer Launches New Initiative for Preventive Healthcare</h2>
            <p>
              Our new program aims to promote regular health check-ups and early
              disease detection.
            </p>
            <button className="btn-header-one">
            Read Full Article
            </button>
          </div>
          <div>
            <h2>Bayer Launches New Initiative for Preventive Healthcare</h2>
            <p>
              Our new program aims to promote regular health check-ups and early
              disease detection.
            </p>
            <button className="btn-header-one">
            Read Full Article
            </button>
          </div>
       
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Login />
      </Modal>
    </>
  );
}
