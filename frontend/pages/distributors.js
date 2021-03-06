import React from "react";
import Layout from "../components/Layout";
import DistSignUpForm from "../components/partners-distributors/DistributorForm";
import DistVideoCard from "../components/partners-distributors/DistributorVideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const Distributors = () => {
  return (
    <Layout>
      <section className="aboutPage ml-0 pl-0">
        <div className="row">
          <div className="col-md-3">
            <a href="/">
              <p
                style={{
                  color: "white",
                  paddingLeft: "60px",
                  paddingTop: "100px",
                }}
              >
                <span>
                  <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </span>{" "}
                Back Home
              </p>
            </a>
          </div>
        </div>

        <div
          className="row"
          style={{ height: "320px", paddingTop: "30px", paddingLeft: "60px" }}
        >
          <div className="col-md-3">
            <h2 className="landing-cta about-header" id="landing-cta">
              DISTRIBUTORS
            </h2>
          </div>
        </div>
      </section>
      <section className="aboutSectionTwo ml-0">
        {" "}
        <div className="row">
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "goldenrod", paddingTop: 20 }}
          >
            <DistVideoCard />
          </div>

          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "whitesmoke", paddingTop: 50 }}
          >
            <DistSignUpForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Distributors;
