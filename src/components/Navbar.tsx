import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export function Navbar(): JSX.Element {
    return (
        <nav className="navbar navbar-expand-lg bg-dark sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Anish Mukherjee</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav px-5 me-auto mb-2 mb-lg-0">
                    <li className="nav-item px-2">
                    <a className="nav-link" aria-current="page" href="/">About Me</a>
                    </li>
                    <li className="nav-item px-2">
                    <a className="nav-link" aria-current="page" href="/blog">Blog</a>
                    </li>
                    <li className="nav-item px-2">
                    <a className="nav-link" aria-current="page" href="/photography">Photography</a>
                    </li>
                    <li className="nav-item px-2">
                    <a className="nav-link" aria-current="page" href="/projects">Projects</a>
                    </li>
                    <li className="nav-item px-2">
                    <a className="nav-link" aria-current="page" href="/contact">Contact Info</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}