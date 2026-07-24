const message = [
  "Welcome to My Blog",
  "Blog with Phila",
  "Happy you're Here",
  "Can't Wait to See You Again",
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
setInterval(changeMessage, 3000);
