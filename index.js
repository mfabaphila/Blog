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

const weatherElement = document.getElementById("weather")

window.onload = function(){

  fetch("https://api.open-meteo.com/v1/forecast?latitude=-33.9249&longitude=18.4241&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,precipitation")
  .then((results)=>results.json())
  .then((data)=>{
    weatherElement.textContent= data.current.temperature_2m + "°C"
  })

}