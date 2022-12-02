import axios from "axios";

const client = axios.create({
  baseURL: "https://fivestarmrp.onrender.com/api",
});

export default client;
