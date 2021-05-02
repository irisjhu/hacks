const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ERRORS":
      return action.errors;
    case "CLEAR_ERRORS":
      return {};
    default:
      return state;
  }
};

export default errorsReducer;