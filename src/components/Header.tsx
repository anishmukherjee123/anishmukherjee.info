import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Header(): JSX.Element {
    return (
        <Navbar expand="sm" className="sticky-top bg-light mb-4" data-bs-theme="light">
          <Container fluid>
            <Navbar.Brand
              to={"/"}
              as={NavLink}
              className="fw-bolder font-monospace"
            >
              Anish Mukherjee
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" variant="tabs">
                <Nav.Link 
                    to={"/"}
                    as={NavLink}
                    className="px-3"
                >
                  About Me
                </Nav.Link>
                <Nav.Link 
                    to={"/blog"}
                    as={NavLink}
                    className="px-3"
                >
                  Blog
                </Nav.Link>
                <Nav.Link 
                    to={"/photography"}
                    as={NavLink}
                    className="px-3"
                >
                  Photography
                </Nav.Link>
                <Nav.Link 
                    to={"/resume"}
                    as={NavLink}
                    className="px-3"
                >
                  Resume
                </Nav.Link>
                <Nav.Link 
                    to={"/projects"}
                    as={NavLink}
                    className="px-3"
                >
                  Projects
                </Nav.Link>
                <Nav.Link 
                    to={"/contact"}
                    as={NavLink}
                    className="px-3"
                >
                  Contact Info
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}