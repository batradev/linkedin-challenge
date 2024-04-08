
// const username = document.getElementById("userNameIndicator");
// const divElement = document.createElement("div");
// divElement.textContent = "Yulia Batrakova, Editor";
// username.appendChild(divElement);

// const username = "Yulia Batrakova";
// const jobtitle = " Editor";
// const profilepic = "./assets/images/woman.png";

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

//First approach
// const posts = document.querySelectorAll('.posts__item');
// for (let i = 0; i < posts.length; i++) {
//     if (i !== 0) { 
//         posts[i].style.display = 'none';
//     }
// }

//Second approach
const postsSection = document.querySelector(".posts");
const firstPost = document.querySelector('.posts__item');
postsSection.innerHTML = firstPost.outerHTML;

