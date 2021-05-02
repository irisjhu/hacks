import { Actions } from "../utils/constants";

const memesReducer = (memes = [], action) => {
  switch (action.type) {
    case Actions.FETCH_ALL_MEMES:
      return action.payload;
    case Actions.UPLOAD_MEME:
      return [action.payload, ...memes];
    default:
      return memes;
  }
};

export default memesReducer;
