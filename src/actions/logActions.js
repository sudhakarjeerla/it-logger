import { GET_LOGS, LOGS_ERROR } from "./types";
import Axios from "axios";

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    const result = await Axios.get("/logs");
    const data = await result.data;
    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};
