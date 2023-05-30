import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

function HomePage(): JSX.Element {
  return (
    <div className=".bg-light.bg-gradient">
      <Navbar/>
      <div className="container-fluid m-4">
        <div className="row align-items-start">
          <div className="col-2">
            Image here
          </div>
          <div className="col-7">
            Welcome to my home page! As you can see it's a work in progress ;)
            <br></br>
            But just in case you still want to get in touch, you can reach me at me@anishmukherjee.info!
          </div>
          <div className="col-2">
            Column here
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
