import * as api from "../api";
import { getErrors } from "./errors";

// Action Creators
export const getMemes = () => async (dispatch) => {
  try {
    const { data } = await api.getMemes();
    data.reverse();

    dispatch({ type: "FETCH_ALL_MEMES", payload: data });
  } catch (error) {
    error.response && dispatch(getErrors(error.response.data));
  }
};

export const uploadMeme = (meme) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("meme", meme);
    const result = await api.uploadMeme(formData);

    dispatch({ type: "UPLOAD_MEME", payload: result.data });
  } catch (error) {
    error.response && dispatch(getErrors(error.response.data));
  }
};
