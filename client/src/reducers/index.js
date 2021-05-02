import { combineReducers } from "redux";

import imagesReducer from "./images";
import errorsReducer from "./errors";
import memesReducer from "./memes";

export default combineReducers({
  images: imagesReducer,
  errors: errorsReducer,
  memes: memesReducer,
});
