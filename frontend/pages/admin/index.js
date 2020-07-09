import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
import BlogCard from "../../components/StaffPortal/BlogCard";
import ManageCard from "../../components/StaffPortal/ManageCard";
import CreateCard from "../../components/StaffPortal/CreateCard";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div
          className="container-fluid pl-4 mb-3"
          style={{ minHeight: "420Px" }}
        >
          <div className="row mb-4">
            <div className="col-md-12 pt-5 pb-5 mt-5">
              {" "}
              <h2 className="pl-4" style={{ color: "green" }}>
                Admin Dashboard
              </h2>
            </div>

            <div className="col-md-4 pl-4">
              <Link href="/admin/crud/blog">
                <a>
                  <ManageCard />
                </a>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="/admin/crud/blog">
                <a>
                  <BlogCard />
                </a>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="/admin/crud/category-tag">
                <a>
                  <CreateCard />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
