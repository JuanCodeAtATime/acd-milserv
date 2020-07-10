import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";
// import BlogCard from "../../components/StaffPortal/BlogCard";
// import ManageCard from "../../components/StaffPortal/ManageCard";
// import CreateCard from "../../components/StaffPortal/CreateCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div
          className="container-fluid pl-4 mb-3"
          style={{ minHeight: "300px" }}
        >
          <div className="row mb-4 staff-portal-bg-image">
            <div className="col-md-12 pt-5 pb-5 mt-5"></div>
          </div>

          <div className="row staff-portal-row text-center">
            <div className="col-md-4 staff-portal-cols">
              <Link href="/admin/crud/blog">
                <a>
                  <button className="staff-btns" id="staff-btn-manage">
                    <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>{" "}
                    Manage
                  </button>
                </a>
              </Link>
            </div>

            <div className="col-md-4 staff-portal-cols">
              <Link href="/admin/crud/blog">
                <button className="staff-btns" id="write-btn">
                  <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Write
                </button>
              </Link>
            </div>

            <div className="col-md-4 staff-portal-cols">
              <Link href="/admin/crud/category-tag">
                <a>
                  <button className="staff-btns" id="create-btn">
                    <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Create
                  </button>
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
