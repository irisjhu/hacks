import axios from "axios";
import { BASE_API_URL } from "../utils/constants";

export const getImages = () => axios.get(`${BASE_API_URL}/images`);
export const uploadImage = (formData) =>
  axios.post(`${BASE_API_URL}/images`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
