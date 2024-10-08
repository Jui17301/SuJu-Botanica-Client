import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://su-ju-botanica-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
