import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Offcanvas } from "react-bootstrap";
function Header() {
  const [show, setShow] = useState(false);

  const menuClose = () => setShow(false);
  const menuShow = () => setShow(true);
  return (
  <header className="mainHeader wrapper">
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="hdrLeft">
            <div className="offcanvasBtn">
              <Button variant="menuBar" onClick={menuShow}>
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </Button>
            </div>
            <Offcanvas className="offcanvasOuter" show={show} onHide={menuClose}>
              <Offcanvas.Header className="offcanvasHeader" closeButton>
                <Offcanvas.Title>
                  <div className="offcanvasLogo">
                    <NavLink to="/">
                      <img src="images/logoDark.png" />
                    </NavLink>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="offcanvasBody">
                <div className="offcanvasBody">
                  <div className="hdrMenu">
                    <ul>
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                      <li>
                        <NavLink to="/temple-listing">Temples</NavLink>
                      </li>
                      <li>
                        <NavLink to="/poojari-listing">Pandit/Poojari</NavLink>
                      </li>
                      <li>
                        <NavLink to="/blog-list">News</NavLink>
                      </li>
                      <li>
                        <NavLink to="">Holy Tour</NavLink>
                      </li>
                      <li>
                        <NavLink to="/about-us">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact-us">Contact Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/faq">FAQ</NavLink>
                      </li>
                      <li>
                        <NavLink to="/pooja-list">Poojas</NavLink>
                      </li>
                      <li>
                        <NavLink to="/cultural-significance-list">Cultural Significance</NavLink>
                      </li>
                      <li>
                        <NavLink to="/new-password">New Password</NavLink>
                      </li>
                      <li>
                        <NavLink to="/create-temple">Create Temple</NavLink>
                      </li>
                      <li>
                        <NavLink to="/temple-dashboard">Temple Dashbaord</NavLink>
                      </li>
                      <li>
                        <NavLink to="/poojari-dashboard">Poojari Dashbaord</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div className="hdrScl">
                    <Link to="https://www.facebook.com/" target="_blank">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </Link>
                    <Link to="https://www.twitter.com/" target="_blank">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </Link>
                    <Link to="https://www.youtube.com/" target="_blank">
                      <i className="fa fa-youtube-play" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
            <div className="hdrMenu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/temple-listing">Temples</NavLink>
                </li>
                <li>
                  <NavLink to="/poojari-listing">Pandit/Poojari</NavLink>
                </li>
                <li>
                  <NavLink to="/blog-list">News</NavLink>
                </li>
                <li>
                  <NavLink to="">Holy Tour</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="hdrLogo">
            <NavLink to="/">
              <img src="images/logoDark.png" />
            </NavLink>
          </div>
        </div>
        <div className="col-md-5">
          <div className="hdrRight">
            <div className="loginBtn">
              <NavLink to="/signup" className="loginLink"><i className="d-inline-block px-2"><img src="images/loginIcon.png" /></i> Sign Up</NavLink>
            </div>
            <div className="menuBtn">
              <NavLink to="" className="btnCommon btnDark"><i className="d-inline-block px-2"><img src="images/donateIcon.png" /></i> Donate Now</NavLink>
            </div>
            <div className="hdrScl">
              <Link to="https://www.facebook.com/" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
              <Link to="https://www.twitter.com/" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link to="https://www.youtube.com/" target="_blank">
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>   
  );
}
export default Header;