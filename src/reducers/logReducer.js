import {
  GET_LOGS,
  LOGS_ERROR,
  SET_LOADING,
  DELETE_LOG,
  ADD_LOG,
  SET_CURRENT,
  UPDATE_LOG
} from "../actions/types";

const initialState = {
  logs: null,
  loading: false,
  current: null,
  error: null
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      };
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== action.payload),
        loading: false
      };
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      };
      case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log =>
          log.id === action.payload.id ? action.payload : log
        )
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
      
    case SET_LOADING:
      return {
        ...state,
        loading: true
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
