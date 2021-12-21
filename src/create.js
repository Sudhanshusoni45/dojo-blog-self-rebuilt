import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const blog = { title, body, author };
  const history = useHistory();

  const handleSubmit = (e) => {
    console.log(author);
    e.preventDefault();
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-type": "application/json ",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      <form className="blogForm">
        <h2>Add a new Blog</h2>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="">Body</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Sudhanshu">Sudhanshu</option>
          <option value="Pravesh">Pravesh</option>
          <option value="Pranjal">Pranjal</option>
        </select>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CreateBlog;
