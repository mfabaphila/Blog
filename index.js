const message = [
  "Heal from a Broken Healer.",
  "Happy to see you.",
  "Medications for the Mind.",
  "Have a say?",
  "Get in touch",
  "Hope to see you soon",
  "Hate what you see?",
  "Just press Like"
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

document.getElementById("weather")

fetch("https://api.open-meteo.com/v1/forecast?latitude=-33.9258&longitude=18.4232&current=temperature_2m,weather_code,wind_speed_10m")
  .then((results) => results.json())
  .then((weatherData) => {
    document.getElementById("weather").textContent =
      weatherData.current.temperature_2m + "°C";
  })
  .catch(() => {
    document.getElementById("weather").textContent = "API Error";
  });