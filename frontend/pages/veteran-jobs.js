import Layout from "../components/Layout";
import VetSignUpForm from "../components/ats/VetSignUpForm";

const VeteranJobs = () => {
  return (
    <Layout>
      <div className="signinPage">
        <div className="row pl-3 pr-3">
          <div className="col-md-12">
            <VetSignUpForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VeteranJobs;
