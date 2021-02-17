import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import Article from "./components/Article";
import Post from "./components/Post";

function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="routes">
      <Router>
        <Header loggedInUser={user} />
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/articles/:slug" component={Article} exact />
        <Route path="/post" component={Post} exact />
      </Router>
    </div>
  );
}

export default App;
