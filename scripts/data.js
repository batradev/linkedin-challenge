let userProfile = {
    username: "Yulia Batrakova",
	jobtitle: " Junior Software Developer",
	profilepic: "./assets/images/woman.png",
};

function loadUserProfile() {
    const usernameElems = document.querySelectorAll(".data-username");
    const jobtitleElems = document.querySelectorAll(".data-jobtitle");
    const profilepicElems = document.querySelectorAll(".data-profilepic");
    
    for (let el of usernameElems) {
        el.innerHTML = userProfile.username;
    }
    for (let title of jobtitleElems) {
        title.innerHTML = userProfile.jobtitle;
    }
    for (let pro of profilepicElems) {
        pro.src = userProfile.profilepic;
    }
}
loadUserProfile();


const commentButton = document.querySelector(".button");
commentButton.addEventListener("click", function createPost(event) {
    event.preventDefault();
    const username = document.querySelector(".data-username").innerHTML;
	const post = document.querySelector(".data-post").value;
	console.log("username, post", username, post);

	if (post) {
		const parentDiv = document.querySelector(".posts");
		const postsItemDiv = document.createElement("div");
		postsItemDiv.classList.add("posts__item");
		const postsUsernameDiv = document.createElement("div");
		postsUsernameDiv.classList.add("posts__username");
		postsUsernameDiv.innerText = username + " Posted";

		const postsContentDiv = document.createElement("div");
		postsContentDiv.classList.add("posts__content");
		const postcontent = document.createElement("p");
		postcontent.innerHTML = post;
		postsContentDiv.append(postcontent);

		const postsLikeDiv = document.createElement("div");
		postsLikeDiv.classList.add("posts__like");

	
		postsItemDiv.append(postsUsernameDiv);
		postsItemDiv.append(postsContentDiv);
		postsItemDiv.append(postsLikeDiv);

		parentDiv.prepend(postsItemDiv);
	} else {
		alert("Error: You have empty post");
	}
});

// now we can load comments;
let comments = [
    {
        name: "User 1",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quidem voluptas eveniet qui, natus debitis iste ad nemo pariatur repellendus cupiditate minima adipisci ullam sit culpa eaque iure fugit ipsam."
    },
    {
        name: "User 2",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quidem voluptas eveniet qui, natus debitis iste ad nemo pariatur repellendus cupiditate minima adipisci ullam sit culpa eaque iure fugit ipsam."
    },
    {
        name: "User 3",
        comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quidem voluptas eveniet qui, natus debitis iste ad nemo pariatur repellendus cupiditate minima adipisci ullam sit culpa eaque iure fugit ipsam."
    }
];

function loadComments(comments) {
    const postsSection = document.querySelector('.posts');
    postsSection.innerHTML = '';

    for (let el of comments) {
        const postItem = document.createElement('div');
        postItem.classList.add('posts__item');

        const usernameDiv = document.createElement('div');
        usernameDiv.classList.add('posts__username');
        usernameDiv.textContent = el.name + ' Posted';

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('posts__content');

        const commentParagraph = document.createElement('p');
        commentParagraph.textContent = el.comment;

        contentDiv.appendChild(commentParagraph);

        const likeDiv = document.createElement('div');
        likeDiv.classList.add('posts__like');

        const likeButton = document.createElement('button');
        likeButton.textContent = 'Like';

        likeDiv.appendChild(likeButton);

        postItem.appendChild(usernameDiv);
        postItem.appendChild(contentDiv);
        postItem.appendChild(likeDiv);

        postsSection.appendChild(postItem);
    }
};
loadComments(comments);
