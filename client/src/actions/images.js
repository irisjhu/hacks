import * as api from "../api";
import { getErrors } from "./errors";
import { Actions } from "../utils/constants";

// Action Creators
export const getImages = () => async (dispatch) => {
  try {
    const { data } = await api.getImages();
    data.reverse();

    dispatch({ type: Actions.FETCH_ALL_IMAGES, payload: data });
  } catch (error) {
    error.response && dispatch(getErrors(error.response.data));
  }
};

export const uploadImage = (image) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    const result = await api.uploadImage(formData);

    dispatch({ type: Actions.UPLOAD_IMAGE, payload: result.data });
  } catch (error) {
    error.response && dispatch(getErrors(error.response.data));
  }
};
