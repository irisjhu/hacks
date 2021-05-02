import { combineReducers } from "redux";

import imagesReducer from "./images";
import errorsReducer from "./errors";

export default combineReducers({
  images: imagesReducer,
  errors: errorsReducer,
});
