import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

export const getImages = () => axios.get(`${BASE_API_URL}/images`);
export const uploadImage = (formData) =>
  axios.post(`${BASE_API_URL}/images`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const getMemes = () => axios.get(`${BASE_API_URL}/memes`);
export const uploadMeme = (formData) =>
  axios.post(`${BASE_API_URL}/memes`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
