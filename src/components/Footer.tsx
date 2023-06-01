import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export function Footer(): JSX.Element {
    return (
        <footer className="footer border-t py-3 bg-light fixed-bottom">
            <div className="container-fluid text-center text-muted fst-italic">
                <span className="">
                    This site was built from scratch in React!
                </span>
                &nbsp;
                <a 
                    href="https://github.com/anishmukherjee123/anishmukherjee.info">
                    Repo available here.
                </a>
            </div>
        </footer>
    );
}