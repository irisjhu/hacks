import { Actions } from "../utils/constants";

export const getErrors = (errors) => ({
  type: Actions.GET_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: Actions.CLEAR_ERRORS,
});
