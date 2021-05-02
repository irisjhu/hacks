const imagesReducer = (images = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_IMAGES":
      return action.payload;
    case "UPLOAD_IMAGE":
      return [action.payload, ...images];
    default:
      return images;
  }
};

export default imagesReducer;
