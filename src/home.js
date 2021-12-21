// import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, isPending } = useFetch("http://localhost:8000/blogs");

  return (
    <div>
      {isPending &&
        data.map((blog) => {
          return (
            <div className="container">
              <div className="blog-card" key={blog.id}>
                {console.log(blog.id)}
                <Link to={`/blogs/${blog.id}`}>
                  <article>
                    <h3>{blog.title}</h3>
                    <small>Written by {blog.author}</small>
                  </article>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
