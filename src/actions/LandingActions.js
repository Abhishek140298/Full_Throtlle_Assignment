import {
  GET_INITIAL_DATA,
  IS_INTIAL_DATA_LAODING,
  HANDLE_MODAL_VISIBLE,
} from "../static/ActionTypes";
import data from "../static/db.json";

export const getIntialData = () => {
  return (dispatch) => {
    dispatch({ type: IS_INTIAL_DATA_LAODING });
    dispatch({ type: GET_INITIAL_DATA, payload: data });
  };
};

export const handleModalVisible = (value) => {
  return (dispatch) => {
    dispatch({ type: HANDLE_MODAL_VISIBLE, payload: value });
  };
};
