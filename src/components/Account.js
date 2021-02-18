import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { startGetUserInfo } from "../actions/userAuth";

import { Grid, Typography } from "@material-ui/core";

import Hola from "../images/hola.jpg";

const Account = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(startGetUserInfo());
  }, []);
  return (
    <div>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={6}>
          <img
            src={Hola}
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
          <Typography variant="h2" align="center">
            User Details
          </Typography>
          <Typography
            variant="h4"
            style={{
              paddingLeft: "30px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            Name : {user?.username}
          </Typography>
          <Typography
            variant="h4"
            style={{
              paddingLeft: "30px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            Email : {user?.email}
          </Typography>
          <Typography
            variant="h4"
            style={{
              paddingLeft: "30px",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            Joined Date : {user.createdAt?.slice(0, 10)}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Account;
