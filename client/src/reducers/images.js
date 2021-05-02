export default (images = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "UPLOAD_IMAGE":
      return [...images, action.payload];
    default:
      return images;
  }
};
