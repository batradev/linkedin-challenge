
// const username = document.getElementById("userNameIndicator");
// const divElement = document.createElement("div");
// divElement.textContent = "Yulia Batrakova, Editor";
// username.appendChild(divElement);

const username = "Yulia Batrakova";
const jobtitle = " Editor";
const profilepic = "./assets/images/woman.png";

const usernameElems = document.querySelectorAll(".data-username");
const jobtitleElems = document.querySelectorAll(".data-jobtitle");
const profilepicElems = document.querySelectorAll(".data-profilepic");

for (let el of usernameElems) {
    el.innerHTML = username;
}
for (let title of jobtitleElems) {
    title.innerHTML = jobtitle;
}
for (let pro of profilepicElems) {
    pro.src = profilepic;
}