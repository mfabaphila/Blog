const message = [
  "Heal from a Broken Healer.",
  "Happy to see you.",
  "Medications for the Mind.",
  "Have a say?",
  "Get in touch",
  "Hope to see you soon",
];

let currentMessage = 0;

const changeMessage = () => {
  currentMessage++;
  if (currentMessage >= message.length) {
    currentMessage = 0;
  }
  document.getElementById("message").textContent = message[currentMessage];
};

setInterval(changeMessage, 2000);
