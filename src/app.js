import "./style/index.scss";
import userApi from "./api/user";
import educationApi from "./api/education";
// TODO GTB-4: - default图片直接写在html即可，且注意拼写错误
import * as defaultrAvatar from "./style/profile.jpeg";

// TODO GTB-4: - userAvatarEleMent 注意拼写，element是一个单词中间不用大写
const userAvatarEleMent = document.getElementsByClassName("user-avatar")[0];
const userDiscription = document.getElementsByClassName("discription")[0];
const educationsbody = document.getElementsByClassName("educations-body")[0];

// TODO GTB-4: - 这种取id方式与url关联性很强，若url层次变多则会出问题，建议使用正则匹配
const userId = document.URL.split("/")[4];

// TODO GTB-3: + 使用了es6语法，如模版字符串等
userApi.getUserById(userId).then((user) => {
  // TODO GTB-3: - 可以使用参数的结构解构赋值
  userAvatarEleMent.src = user.avatar ? user.avatar : defaultrAvatar;
  userDiscription.innerText = `MY NAME IS ${user.name ? user.name : "Jiajie"} ${
    user.age ? user.age : 20
  } YO AND THIS IS MY RESUME/CV`;
});

educationApi.geteducationsByUserId(userId).then((educationlist) =>
  // TODO GTB-4: - 渲染DOM相关代码可以单独抽出方法
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
