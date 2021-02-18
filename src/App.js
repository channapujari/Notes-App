import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import NavBar from "./components/NavBar";
import { toggleStatus } from "./actions/toggleStatus";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.grey[100],
    paddingTop: theme.spacing(1),
  },
}));

const App = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(toggleStatus());
    }
  }, []);

  return (
    <div>
      <Container className={classes.root} fixed>
        <NavBar />
      </Container>
    </div>
  );
};

export default App;
