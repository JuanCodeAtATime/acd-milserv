import { useState } from "react";
import Link from "next/link";
// import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import Router from "next/router";
import NProgress from "nprogress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import ".././node_modules/nprogress/nprogress.css";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar fixed="top" color="light" light expand="md" className="navbar">
        <Link href="/">
          <NavLink className="font-weight-bold">
            <NavbarBrand className="navBarLogo">
              <img
                src="../static/images/owllogo.jpg"
                width="45px"
                height="40px"
                alt="React Bootstrap logo"
              />
              MILSERV
              <span className="bottom-logo-text">
                An American Craft Deliveries Company
              </span>
            </NavbarBrand>
          </NavLink>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="navtoggler">
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="listItems dropdowns-arrows">
                PARTNERS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>MAKERS</DropdownItem>
                <DropdownItem>RETAILERS</DropdownItem>
                <DropdownItem>DISTRIBUTORS</DropdownItem>
                <DropdownItem divider />
                {/* {!isAuth() && (
                  <Link href="/signin">
                    <DropdownItem>Staff Portal</DropdownItem>
                  </Link>
                )} */}
                <DropdownItem>PARTNER WITH US</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="listItems dropdowns-arrows">
                VETERANS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>JOBS</DropdownItem>
                <DropdownItem>SKILLBRIDGE</DropdownItem>
                <DropdownItem>GIVING BACK</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="listItems dropdowns-arrows">
                NEWS
              </DropdownToggle>
              <DropdownMenu right>
                <Link href="/blogs">
                  <DropdownItem>BLOG</DropdownItem>
                </Link>
                <DropdownItem>PRESS RELEASES</DropdownItem>
                <DropdownItem>STAY CONNECTED</DropdownItem>
                {/* <DropdownItem divider />
                <DropdownItem>Partner with us</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
            <Link href="/contact">
              <NavItem className="listItems">CONTACT</NavItem>
            </Link>
            <Link href="/about">
              <NavItem className="listItems">ABOUT</NavItem>
            </Link>

            {/* {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <Link href="/signin">
                    <NavLink className="navItems">
                      <button
                        className="btn landingAuth"
                        style={{
                          backgroundColor: "transparent",
                          border: "solid #5bc0de 1.6px",
                        }}
                      >
                        {" "}
                        sign-in
                      </button>
                    </NavLink>
                  </Link>
                </NavItem> */}
            {/* <NavItem>
                  <Link href="/signup">
                    <NavLink className="navItems">
                      <button
                        className="btn landingAuth"
                        style={{
                          backgroundColor: "transparent",
                          border: "solid #5bc0de 1.6px",
                        }}
                      >
                        {" "}
                        sign-up
                      </button>
                    </NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )} */}

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink className="listItems">
                    {" "}
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink className="listItems">
                    <FontAwesomeIcon icon={faLaptopCode} />{" "}
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && (
              <NavItem>
                <NavLink
                  className="listItems"
                  onClick={() => signout(() => Router.replace("/signin"))}
                >
                  <FontAwesomeIcon icon={faDoorOpen} /> Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
