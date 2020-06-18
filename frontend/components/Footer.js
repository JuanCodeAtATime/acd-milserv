import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer color="blue" className="font-small pt-4 mt-4">
        <div className="footer-container">
          <div className="row text-center">
            <div className="col-md-4 pb-2">
              <h6 className="title">Contact US</h6>
              <p>info@acdmilserve.com</p>
            </div>
            <div className="col-md-4 pb-2">
              <h6 className="title">Our Mission</h6>
              <p>Veterans & Jobs</p>
              <p>Retailers</p>
              <p>Distributors</p>
            </div>
            <div className="col-md-4 pb-2">
              <h6 className="title">Follow Us</h6>
              <p>Twitter Account</p>
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
