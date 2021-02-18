import axios from "axios";
import swal from "sweetalert";

export const startRegisterUser = (formData, handleRedirect) => {
  return (dispatch) => {
    axios
      .post("http://dct-user-auth.herokuapp.com/users/register", formData)
      .then((response) => {
        const result = response.data;
        if (result.hasOwnProperty("errors")) {
          console.log(result.errors);
          swal(result.errors.toUpperCase());
        } else {
          handleRedirect();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const startLoginUser = (formData, handleRedirect) => {
  return (dispatch) => {
    axios
      .post(
        "http://dct-user-auth.herokuapp.com/users/login",
        formData,
        handleRedirect
      )
      .then((reponse) => {
        const result = reponse.data;
        if (result.hasOwnProperty("errors")) {
          console.log(result.errors);
          swal(result.errors.toUpperCase());
        } else {
          localStorage.setItem("token", result.token);
          handleRedirect();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const getUser = (user) => {
  return {
    type: "GET_USER",
    payload: user,
  };
};

export const startGetUserInfo = () => {
  return (dispatch) => {
    axios
      .get("https://dct-user-auth.herokuapp.com/users/account", {
        headers: {
          "x-auth": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        const user = response.data;
        console.log(user);
        dispatch(getUser(user));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
