const threadTopicEntries = [
  "What is the best opening to learn?",
  "Does drunk Magnus play better than sober Magnus?",
  "What are y'all favorite openings?",
  "Why are there so many bugs on this website?",
];

const newThread = document.getElementById('new-thread-post');
const postedInput = document.getElementById('post');

function threadTopics() {
  threadTopicEntries.forEach((topic) => {
    const template = document
      .getElementById("topic-card-template")
      .content.cloneNode(true);

      template.querySelector('[data-title]').innerText = topic;

      document.getElementById('card-list').appendChild(template);
  });
}

threadTopics();

function submitThread(topic) {
  const template = document.getElementById("topic-card-template").content.cloneNode(true);

  template.querySelector('[data-title]').innerText = topic;

  document.getElementById('card-list').appendChild(template);
}

newThread.addEventListener('submit', (e) => {
  e.preventDefault();

  const newPost = postedInput.value;
  const warningMsg = document.getElementById('empty-text-warning');

    warningMsg.innerHTML = '';
  
    if (newPost.length === 0 ) {
      warningMsg.innerHTML = 'Empty threads are not allowed';

      return;
    };

    submitThread(newPost);

    postedInput.value = '';
});
