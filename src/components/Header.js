import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { createMuiTheme } from "@material-ui/core/styles";
import { Divider, Button, ButtonGroup, Container } from "@material-ui/core";

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
  const { loggedInUser } = props;
  return (
    <header>
      <AppBar position="static" color="primary">
        <Container style={{ width: "100%" }}>
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5">Conduit</Typography>
            <ButtonGroup disableElevation variant="" color="primary">
              <Button href="/">Home</Button>
              {loggedInUser ? (
                <div className="loggedIn">
                  <Button href="/user">{loggedInUser.username}</Button>
                  <Button href="/" onClick={logOut}>
                    Log Out
                  </Button>
                  <Button href="/post">New Article </Button>
                </div>
              ) : (
                <div className="login">
                  <Button href="/signin">Sign In</Button>
                  <Button href="/signup">Sign Up</Button>
                </div>
              )}
            </ButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
