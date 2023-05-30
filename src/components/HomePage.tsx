import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "./Navbar";

function HomePage(): JSX.Element {
  return (
    <div className=".bg-light.bg-gradient">
      <Navbar/>
      <div className="container-fluid pt-3">
        <div className="row">
          <p className="text-start">
            Welcome to my home page! As you can see it's a work in progress ;)
          </p>
          <p className="text-start">
            But just in case you still want to get in touch, you can reach me at me@anishmukherjee.info!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
