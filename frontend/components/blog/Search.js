import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });
  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} articles found`,
      });
    });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };
  const searchedBlogs = (results = []) => {
    return (
      <div
        className="jumbotron bg-white"
        style={{
          color: "black",
          marginTop: 50,
          height: "auto",
          marginBottom: 30,
        }}
      >
        {message && <p className="pt-4 text-muted font-italic">{message}</p>}

        {results.map((blog, i) => {
          return (
            <div key={i}>
              <Link href={`/blogs/${blog.slug}`}>
                <a className="text-primary">{blog.title}</a>
              </Link>
              <hr />
            </div>
          );
        })}
      </div>
    );
  };
  const searchForm = () => (
    <form onSubmit={searchSubmit} style={{ paddingTop: 70 }}>
      <div className="row">
        <div className="col-md-8">
          <input
            type="search"
            className="form-control"
            placeholder="Search MilServ Media"
            onChange={handleChange}
          ></input>
        </div>

        <div className="col-md-2 m-1">
          <button className="btn btn-block btn-secondary" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="container-fluid">
      <div className="pt-3 pb-2">{searchForm()}</div>
      {searched && (
        <div style={{ marginTop: "-120px", marginBottom: "-80px" }}>
          {searchedBlogs(results)}{" "}
        </div>
      )}
    </div>
  );
};

export default Search;
