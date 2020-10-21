import axios from "axios";

const baseURL = "http://localhost:8080";

const educationApi = {
  geteducationsByUserId: (id) => {
    return axios
      .get(`${baseURL}/users/${id}/educations`)
      .then((res) => res.data)
      .catch();
  },
  createEducationWithUserId: (id, education) => {
    axios.post(`${baseURL}/users/${id}/educations`, education).catch();
  },
};

export default educationApi;
