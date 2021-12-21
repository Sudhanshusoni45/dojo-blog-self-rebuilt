import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data: blog } = useFetch(`http://localhost:8000/blogs/${id}`);
  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  //   console.log("id:", id);
  return (
    <div className="blog-Details">
      {console.log(blog)}
      <h3>{blog.title}</h3>
      <small> Written by {blog.author}</small>
      <p>{blog.body}</p>
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  );
};

export default BlogDetails;
