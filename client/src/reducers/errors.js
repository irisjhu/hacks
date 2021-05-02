import { Actions } from "../utils/constants";

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case Actions.GET_ERRORS:
      return action.errors;
    case Actions.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default errorsReducer;
