import axios from "axios";

const BASE_URL = "http://localhost:4000";

const endpoints = {
  signin: { url: `${BASE_URL}/users/login`, method: "post" },
  signup: { url: `${BASE_URL}/users/signup`, method: "post" },
  activate: { url: `${BASE_URL}/users/activate`, method: "patch" },
  forgot: { url: `${BASE_URL}/users/forgot`, method: "patch" },
  reset: { url: `${BASE_URL}/users/reset`, method: "patch" },
  referred: { url: `${BASE_URL}/users/referred`, method: "get" },
  logout: { url: `${BASE_URL}/users/logout`, method: "get" },
  profile: { url: `${BASE_URL}/users/profile`, method: "put"}
};

const makeRequest = async (url, method, body) => {
  try {
    const response = await axios[method](url, "post", body);
    console.log(response);
    return response;
  } catch (err) {
    return {
      message: err,
    };
  }
};
export { BASE_URL, endpoints, makeRequest };
