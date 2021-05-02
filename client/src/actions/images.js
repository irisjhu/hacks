import * as api from "../api";

// Action Creators
export const getImages = () => async (dispatch) => {
  try {
    const { data } = await api.getImages();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const uploadImage = (image) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("image", image);
    await api.uploadImage(formData);

    dispatch({ type: "UPLOAD_IMAGE", payload: image });
  } catch (error) {
    // TODO: dispatch a getErrors action
    console.log(error);
  }
};
