import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import picOfMe from "../images/me.jpg";
import 'animate.css';

function HomePage(): JSX.Element {
  return (
    <div className=".bg-light.bg-gradient">
      <div className="container-fluid my-3">
        <div className="row align-items-start">
          <div className="col-2">
            <img src={picOfMe} alt="Pic of me!" className="float-start img-fluid animate__animated animate__fadeInLeft"/>
          </div>
          <div className="col-7">
            <div className="animate__animated animate__fadeInUp">
              <p className="h1 fw-bolder font-monospace">Welcome!</p>
              <hr className="border border-primary border-3 opacity-75"/>
            </div>
            Welcome to my home page! As you can see it's a work in progress ;)
            <br></br>
            But just in case you want to get in touch, you can reach me at <span className="fw-bold">me@anishmukherjee.info</span>!
          </div>
          <div className="col-2">
            WIP!
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
