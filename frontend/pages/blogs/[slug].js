import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { useState } from "react";
import { singleBlog } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";

const SingleBlog = ({ blog, query }) => {
  const head = () => (
    <Head>
      <title>
        {" "}
        {blog.title} | {APP_NAME}{" "}
      </title>
      <meta name="description" content={blog.mdesc} />

      <link rel="cannonical" href={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:title" content={`${blog.title} | ${APP_NAME}`} />

      <meta property="og:description" content={blog.mdesc} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
      <meta
        property="og:image:secure_url"
        content={`${API}/blog/photo/${blog.slug}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-outline-info btn-sm mr-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-danger btn-sm mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main style={{ minHeight: "500px" }}>
          <article style={{ marginTop: "100px" }}>
            <div className="container-fluid">
              <section>
                <div className="row">
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className="img img-fluid featured-image"
                  />
                </div>
              </section>

              <section>
                <div className="container">
                  <h1 className="display-4 pb-3 pt-3 font-weight-bold">
                    {blog.title}
                  </h1>
                  <p className="lead mt-3 mark pt-1 pb-1">
                    Written by {blog.postedBy.name} | Published{" "}
                    {moment(blog.updatedAt).fromNow()}
                  </p>
                </div>

                <div className="pb-3">
                  {showBlogCategories(blog)}
                  {showBlogTags(blog)}
                  <br></br>
                </div>
              </section>
            </div>

            <div className="container">
              <section>
                <div className="col-md-12 lead">{renderHTML(blog.body)}</div>
              </section>
            </div>

            <div className="container pb-5">
              <h4 className="text-center pt-5 pb-5 h2">Related blogs</h4>
              <hr />
              <p>show related blogs</p>
            </div>

            <div className="container pb-5">
              <p>show comments</p>
            </div>
          </article>
        </main>
      </Layout>
    </React.Fragment>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
