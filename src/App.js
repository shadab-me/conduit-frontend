import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Signin from "./components/Signin";
import SignUp from "./components/Signup";
import Article from "./components/Article";
import Post from "./components/Post";
import User from "./components/User";

function App() {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="routes">
      <BrowserRouter>
        <Header loggedInUser={user} />
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/articles/:slug" component={Article} exact />
        <Route path="/profile" component={User} exact />
        <Route path="/post" component={Post} exact />
      </BrowserRouter>
    </div>
  );
}

export default App;
