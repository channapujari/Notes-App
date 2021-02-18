import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Account from "./Account";
import MyNotes from "./MyNotes";

import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
} from "@material-ui/core";
import { toggleStatus } from "../actions/toggleStatus";
import swal from "sweetalert";

const NavBar = (props) => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.isUserLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(toggleStatus());
    swal("Successfully LoggedOut!");
    props.history.push("/");
  };
  return (
    <div>
      <Container disableGutters>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Welcome to Notes App.
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            {isUserLoggedIn ? (
              <>
                <Button color="inherit" component={Link} to="/account">
                  Account
                </Button>
                <Button color="inherit" component={Link} to="/mynotes">
                  MyNotes
                </Button>
                <Button
                  color="inherit"
                  component={Link}
                  to="/"
                  onClick={handleLogout}
                >
                  {" "}
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/register">
                  Register
                </Button>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
      </Container>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/account" component={Account} exact={true} />
        <Route path="/mynotes" component={MyNotes} exact={true} />
      </Switch>
    </div>
  );
};

export default withRouter(NavBar);
