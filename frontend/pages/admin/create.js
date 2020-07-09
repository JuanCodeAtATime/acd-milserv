import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pl-4 mb-5">
          <div className="row mb-4">
            <div className="col-md-12 pt-5 pb-5">
              {" "}
              <h2 className="headers">Admin Dashboard</h2>
            </div>
            <div className="col-md-6">
              <ul className="list-group">
                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a>Create Category</a>
                  </Link>
                </li>

                <li className="list-group-item">
                  <Link href="/admin/crud/category-tag">
                    <a>Create Tag</a>
                  </Link>
                </li>

                <li className="list-group-item">
                  <Link href="/admin/crud/blog">
                    <a>Create Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6">right</div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
