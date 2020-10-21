import "./style/index.scss";
import userApi from "./api/user";
import educationApi from "./api/education";
import * as defaultrAvatar from "./style/profile.jpeg";

const userAvatarEleMent = document.getElementsByClassName("user-avatar")[0];
const userDiscription = document.getElementsByClassName("discription")[0];
const educationsbody = document.getElementsByClassName("educations-body")[0];

const userId = document.URL.split("/")[4];

userApi.getUserById(userId).then((user) => {
  userAvatarEleMent.src = user.avatar ? user.avatar : defaultrAvatar;
  userDiscription.innerText = `MY NAME IS ${user.name ? user.name : "Jiajie"} ${
    user.age ? user.age : 20
  } YO AND THIS IS MY RESUME/CV`;
});

educationApi.geteducationsByUserId(userId).then((educationlist) =>
  educationlist.map((education) => {
    educationsbody.innerHTML += `<figure class="education">
    <figcaption class="education-year">${education.year}</figcaption>
<div class="education-dec-body">
    <h3>${education.title}</h3>
    <figcaption class="education-dec">${education.description}</figcaption>
</div>
</figure>`;
    return 1;
  })
);
