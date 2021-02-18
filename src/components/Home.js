import React from "react";

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Notes from "../images/notes1.jpg";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src={Notes}
            style={{
              width: "100%",
              height: "75%",
              objectFit: "cover",
              marginTop: "15px",
            }}
            alt="user-auth"
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{ paddingTop: "15px" }}>
          <Typography variant="h3" align="center">
            Notes App
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{ paddingLeft: "15px", justifyContent: "center" }}
          >
            Notes App is a user-authentication based notes taking app. It is
            implemented using redux where user can register, login and access
            his or her accounts, And able to create or delete the notes in the
            notes section.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
