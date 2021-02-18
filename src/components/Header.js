import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { createMuiTheme } from "@material-ui/core/styles";
import { Divider, Button, ButtonGroup, Container } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#ffff00",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});
function logOut() {
  localStorage.clear();
}

function Header(props) {
  // const { loggedInUser } = props;
  const loggedInUser = JSON.parse(localStorage.getItem("user"));
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
        <div className="brand w-50">
          <Link class="navbar-brand" to="/">
            Conduit
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="nav-section">
          <div className="collapse navbar-collapse text-right" id="navbarNav">
            <ul className="navbar-nav text-decoration-none">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeStyle={{ textDecoration: "none", color: "red" }}
                >
                  <a className="nav-link">Home</a>
                </NavLink>
              </li>
              {loggedInUser ? (
                <div className="loggedIn d-flex flex-row">
                  <li className="nav-item">
                    <NavLink to="/profile" exact>
                      <a className="nav-link">{loggedInUser.username}</a>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/" exact>
                      <a className="nav-link" onClick={logOut}>
                        Log Out
                      </a>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/post" exact>
                      <a className="nav-link">New Post</a>
                    </NavLink>
                  </li>
                </div>
              ) : (
                <div className="login d-flex flex-row">
                  <li className="nav-item">
                    <NavLink to="/signin" exact>
                      <a className="nav-link">Sing In</a>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/signup" exact>
                      <a className="nav-link">Sing Up</a>
                    </NavLink>
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
