import { GET_LOGS, LOGS_ERROR } from "../actions/types";

const initialState = {
  logs: null,
  error: null
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload
      };
    case LOGS_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default logReducer;
