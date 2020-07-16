import Layout from "../../../components/Layout";
import VeteranList from "../../../components/ats/VeteranATSList";
import Admin from "../../../components/auth/Admin";

const VeteranATS = () => {
  return (
    <React.Fragment>
      <Layout>
        <Admin>
          <main>
            <div className="container-fluid mt-4 pt-4">
              <header>
                <div className="col-md-12 pt-3 mt-4">
                  <h3 className="display-4 text-center">MILSERV VATS</h3>
                </div>
              </header>
            </div>
            <div className="container-fluid">
              <div className="row pl-3">
                <div className="col-md-12">
                  <VeteranList />
                </div>
              </div>
            </div>
          </main>
        </Admin>
      </Layout>
    </React.Fragment>
  );
};

export default VeteranATS;
