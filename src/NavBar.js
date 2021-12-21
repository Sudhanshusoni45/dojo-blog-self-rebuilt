import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <h2>
        <Link to={"/"}>The Dojo blog</Link>
      </h2>
      <ul>
        <li>
          {" "}
          <Link to={"/"}> Home </Link>
        </li>
        <li>
          <Link to={"/create"}>Create Blog </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
