const userNames = [];
const userPost = ['We love playing Chess!'];

const newPost = document.getElementById('new-post-form');
const postTextArea = document.getElementById('post');

async function getUserName() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=12");

    if (!response.ok) {
      throw new Error(`HTTP ERROR! status ${response.status}`);
    }

    const users = await response.json();

    const fNames = users.results.map((user) => {
      return user.name.first;
    });

    userNames.push(...fNames);
    console.log(userNames);

    userNames.forEach((userName) => {
      const template = document
        .getElementById("post-template")
        .content.cloneNode(true);

      template.querySelector("[data-user]").innerText = userName;
      template.querySelector("[data-post]").innerText = userPost;
      document
        .getElementById("post-list")
        .appendChild(template);
    });

  } catch (error) {
    console.error("Couldn't retrieve data:", error);
  }
};

function submitPost(postContent, username) {

const templateCloning = document.getElementById('post-template').content.cloneNode(true);

  templateCloning.querySelector('[data-post]').innerText = postContent;
  templateCloning.querySelector('[data-user]').innerText = username;

 document.getElementById('post-list').appendChild(templateCloning);
}

newPost.addEventListener('submit', function(e) {
  e.preventDefault();

  const newPostContent = postTextArea.value;

  if (newPostContent) {
    const users = Math.floor(Math.random() * userNames.length);
    const randomUser = userNames[users];
    
    submitPost(newPostContent, randomUser);

    postTextArea.value = '';
  }

});

getUserName();