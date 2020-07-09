import React from "react";
import { isAuth } from "../actions/auth";
import Link from "next/link";
// import { NavItem } from "reactstrap";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer color="blue" className="font-small pt-4 mt-4 pb-4">
        <div className="footer-container">
          <div className="row text-center">
            <div className="col-md-3 pb-2">
              <h3 className="title">MILSERV</h3>
              <p>
                Copyright <span>&copy;</span> MILSERV 2020{" "}
              </p>
              {!isAuth() && (
                <Link href="/signin">
                  <p className="footer-items staff-signin">Staff Portal</p>
                </Link>
              )}
            </div>
            <div className="col-md-3 pb-2">
              <h6 className="title">PARTNERS</h6>
              <p className="footer-items">MAKERS</p>
              <p className="footer-items">RETAILERS</p>
              <p className="footer-items">DISTRIBUTORS</p>
            </div>
            <div className="col-md-3 pb-2">
              <h6 className="title">VETERANS</h6>
              <p className="footer-items">JOBS</p>
              <p className="footer-items">SKILLBRIDGE</p>
              <p className="footer-items">GIVING BACK</p>
            </div>
            <div className="col-md-3 pb-2">
              <h6 className="title">NEWS</h6>
              <p className="footer-items">BLOG</p>
              <p className="footer-items">PRESS RELEASES</p>
              <p className="footer-items">STAY CONNECTED</p>
            </div>
          </div>
        </div>
        {/* Incase we want to add a copyright message in the footer */}
        {/* <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="*"> COVID-19 Digital Classroom </a>
                    </MDBContainer>
                </div> */}
      </footer>
    </div>
  );
};

export default Footer;
