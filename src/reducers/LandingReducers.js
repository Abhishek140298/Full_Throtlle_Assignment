import Data from "../static/db.json";
import {
  GET_INITIAL_DATA,
  IS_INTIAL_DATA_LAODING,
  HANDLE_MODAL_VISIBLE,
} from "../static/ActionTypes";

const INITIAL_STATE = {
  initialData: [],
  isLoading: false,
  isModalVisible: false,
  clickedId: 0,
};

export default function LandingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case IS_INTIAL_DATA_LAODING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_INITIAL_DATA:
      return {
        ...state,
        initialData: action.payload,
        isLoading: false,
      };
    case HANDLE_MODAL_VISIBLE:
      return {
        ...state,
        isModalVisible: action.payload.value,
        clickedId: action.payload.clickedId,
      };
    default:
      return state;
  }
}
