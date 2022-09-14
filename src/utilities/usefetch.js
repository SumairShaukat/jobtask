import axios from "axios";
const useFetch = axios.create({
  //https://dummyjson.com/
  baseURL: "https://dummyjson.com/",
});
useFetch.interceptors.request.use(
  async (config) => {
    config.header = config.headers;
    if (localStorage.getItem("token")) {
      config.headers.Authorization = `Bearer ${JSON.parse(
        localStorage.getItem("token")
      )}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

useFetch.interceptors.response.use(function (response) {
  if (response.status === 401) {
  }
  return response;
});
export { useFetch };
