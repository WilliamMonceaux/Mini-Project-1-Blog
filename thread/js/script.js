const threadTopicEntries = [
  "What is the best opening to learn?",
  "Does drunk Magnus play better than sober Magnus?",
  "What is y'all favorite openings?",
  "Why are there so many bugs in this website?",
];

function threadTopics() {
  threadTopicEntries.forEach((topic) => {
    const template = document
      .getElementById("topic-card-template")
      .content.cloneNode(true);

      template.querySelector('card-title');

      document.getElementById('card-list').appendChild(template);
  });
}

threadTopics();
