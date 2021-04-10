import axios from "axios";

const url = "http://localhost:5000/example";

export const getExample = () => axios.get(url);
