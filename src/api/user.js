import axios from "axios";

const baseURL = "http://localhost:8080";

const userApi = {
  getUserById: (id) => {
    return axios
      .get(`${baseURL}/users/${id}`)
      .then((res) => res.data)
      .catch();
  },
  createUser: (user) => {
    axios.post(`${baseURL}/users`, user).catch();
  },
};

export default userApi;
