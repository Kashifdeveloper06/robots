import { ALL_ROBOTS,ADD_TO_CARD } from "./constants.js";
import axios from "axios";
import { toastr } from "react-redux-toastr";

export const robotDetailAction = () => {
  return (dispatch) => {
    const options = {
      method: "GET",
      url:`${process.env.REACT_APP_BASE_URL}/api/robots`,
    };
     axios(options)
     .then((response) => {
        if(response.statusText=='OK'){
          dispatch({
            type: ALL_ROBOTS,
            response: response.data,
          })
          toastr.success("Successfully", "Robots loaded");
        }
      })
      .catch((err) => {
        toastr.error("Error", err.message);
        console.log(err.message);
      });
  };
};
export const addToCard = (data) => {
  return (dispatch) => {
          dispatch({
            type: ADD_TO_CARD,
            response:data
          })
        }
      
};

