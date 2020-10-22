import axios from "axios";
// TODO GTB-4: * 有抽取baseURL意识，但更进一步可以把此类配置相关内容抽取出config.js
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
