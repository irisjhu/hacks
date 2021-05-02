export const getErrors = (errors) => ({
  type: "GET_ERRORS",
  errors,
});

export const clearErrors = () => ({
  type: "CLEAR_ERRORS",
});
