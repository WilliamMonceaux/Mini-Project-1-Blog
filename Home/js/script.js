const userNames = [];
const userPost = 'We love playing Chess!';

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
}

getUserName();
