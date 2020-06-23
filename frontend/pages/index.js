import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import LandingCardsOne from "../components/LandingCards/LandingCardsOne";
import LandingCardsTwo from "../components/LandingCards/LandingCardsTwo";
import LandingCardsThree from "../components/LandingCards/LandingCardsThree";
import LandingCardsFour from "../components/LandingCards/LandingCardsFour";

const Index = () => {
  return (
    <Layout>
      <section className="landingTop ml-0 pl-0">
        <div className="row centered">
          <h1 className="landing-cta" id="landing-cta">
            YOUR SOLUTION FOR ALCOHOL DELIVERIES
          </h1>

          <button className="btn learnMoreBtn ml-1">
            <FontAwesomeIcon icon={faTruck} /> Learn More
          </button>
        </div>
      </section>
      <section className="landingSectionTwo text-center">
        <div className="row program-your-career pt-3 pb-4">
          <h2 className="program">
            <b style={{ color: "#8d54b5" }}>OUR PARTNERS</b>
          </h2>
        </div>
        <div className="row program-your-career pl-3 pr-3">
          <div className="col-md-3 mb-2 col-left">
            <LandingCardsOne />
          </div>
          <div className="col-md-3 mb-2 col-middle">
            <LandingCardsTwo />
          </div>
          <div className="col-md-3 mb-2 col-right">
            <LandingCardsThree />
          </div>
          <div className="col-md-3 mb-2 col-right">
            <LandingCardsFour />
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default Index;
