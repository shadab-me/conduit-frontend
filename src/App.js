import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import Article from "./components/Article";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/api/articles/:slug" component={Article} exact />
      </Router>
    </div>
  );
}

export default App;
