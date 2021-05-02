import { Actions } from "../utils/constants";

const imagesReducer = (images = [], action) => {
  switch (action.type) {
    case Actions.FETCH_ALL_IMAGES:
      return action.payload;
    case Actions.UPLOAD_IMAGE:
      return [action.payload, ...images];
    default:
      return images;
  }
};

export default imagesReducer;
