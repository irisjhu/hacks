const memesReducer = (memes = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_MEMES":
      return action.payload;
    case "UPLOAD_MEME":
      return [action.payload, ...memes];
    default:
      return memes;
  }
};

export default memesReducer;
