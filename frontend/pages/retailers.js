import React from "react";
// import ReactPlayer from "react-player";
import Layout from "../components/Layout";
import RetSignUpForm from "../components/retailers/RetailerForm";
import RetVideoCard from "../components/retailers/RetailerVideoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
// import retailerVid from "../static/videos/retailerExplainerVid.mp4";

const Retailers = () => {
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
              RETAILERS
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
            {/* <ReactPlayer
              className="react-player"
              style={{ padding: 0, margin: 0, height: "100%" }}
              // url={retailerVid}
              url={"../static/videos/retailerExplainerVid.mp4"}
              width="100%"
              height="auto"
              controls={true}
              light={true}
            /> */}
            <RetVideoCard />
          </div>
          <div
            className="col-md-6 aboutSections"
            style={{ backgroundColor: "whitesmoke", paddingTop: 50 }}
          >
            <RetSignUpForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Retailers;
