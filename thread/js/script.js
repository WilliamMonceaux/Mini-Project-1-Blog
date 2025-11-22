const threadTopicEntries = [
  "What is the best opening to learn?",
  "Does drunk Magnus play better than sober Magnus?",
  "What are y'all favorite openings?",
  "Why are there so many bugs in this website?",
  'Does anyone want to play?',
  'I hate playing against Thelegend27. He stalls',
  'Someone needs to ban Carter',
  'Hi',
];

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
