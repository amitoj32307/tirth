import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="ftrBlock wrapper py-80">
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="ftrLogo">
            <a href="">
              <img src="images/logoLight.png" />
            </a>
          </div>
        </div>
        <div className="col">
          <div className="ftrInfo">
            <div className="ftrMail">
              <a href="mailto:feedback@tirthgaman.com">feedback@tirthgaman.com</a>
            </div>
            <div className="ftrLinks">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </div>
            <div className="ftrScl">
              <Link to="https://www.facebook.com/" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
              </Link>
              <Link to="https://www.twitter.com/" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Link>
              <Link to="https://www.linkedin.com/" target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </Link>
              <Link to="https://www.instagram.com/" target="_blank">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="ftrCopy">
            <p>© copyright <span>Tirth Gaman</span> 2022.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}
export default Footer;