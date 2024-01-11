import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from "../Reducer/Actiontypes";
import axios from "axios";

export const fetchuserssuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
};

export const fetchusersfailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const fetchcards = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:9000/posts")
      .then((response) => {
        const data = response.data.slice(0, 100);
        dispatch(fetchuserssuccess(data));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchusersfailure(errorMsg));
      });
  };
};
