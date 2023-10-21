import Nav from "react-bootstrap/Nav";
import "./Navbar.css";
import logo from "../../images/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  
  return (
    <>
      <Nav className="navbar" activeKey="/home">
        <div className="logospace">
          <img src={logo} alt="logo" />
        </div>
        <div className="margin">
          <Nav.Item className="item">
            <Nav.Link href="/home" className="colorset hp1">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="item" >

            <Link to="/main" eventKey="link-1" className="colorset hp1">
              Dashboard
            </Link>
            
          </Nav.Item>
          <Nav.Item className="item">
            <Nav.Link eventKey="link-2" className="colorset hp1">
              Advertise
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="item">
            <Nav.Link eventKey="link-2" className="colorset hp1">
              Logout
            </Nav.Link>
          </Nav.Item>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
