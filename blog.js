const message = [
  "Welcome to my blog",
  "Blog with Phila",
  "Happy you're here",
  "Don't forget to like and comment!",
];

const heading = document.getElementById("message");

let currentMessage = 0;

function changeMessage() {
  currentMessage++;
  if (currentMessage >= message.length) {
    currentMessage = 0;
  }
  heading.textContent = message[currentMessage];
}
setInterval(changeMessage, 10000);
