import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home";
import CreateBlog from "./create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div className="content">
          <Switch>
            <Route exact path={"/"}>
              <Home></Home>
            </Route>

            <Route path={"/create"}>
              <CreateBlog></CreateBlog>
            </Route>

            <Route path={"/blogs/:id"}>
              <BlogDetails></BlogDetails>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
