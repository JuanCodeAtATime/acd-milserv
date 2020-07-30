import Link from "next/link";
import { API } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";

const SmallCard = ({ blog }) => {
  return (
    <div>
      <div>
        <section>
          <Link href={`/blogs/${blog.slug}`}>
            <a>
              <img
                className="img img-fluid"
                style={{ maxHeight: "150px", width: "auto" }}
                src={`${API}/blog/photo/${blog.slug}`}
                alt={blog.title}
              />
            </a>
          </Link>
        </section>

        <div className="card-body">
          <section>
            <Link href={`/blogs/${blog.slug}`}>
              <h5 className="card-title">{blog.title}</h5>
            </Link>
            <p style={{ color: "black", fontWeight: "500" }}>
              {renderHTML(blog.excerpt)}
            </p>
          </section>
        </div>

        <div className="card-body">
          Published date:
          {moment(blog.updatedAt).fromNow()}
          <Link href={`/`}>
            <a className="float-right">Written by {blog.postedBy.name}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
