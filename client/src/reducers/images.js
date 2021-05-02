export default (images = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "UPLOAD_IMAGE":
      return [action.payload, ...images];
    default:
      return images;
  }
};
