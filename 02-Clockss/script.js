const secondHand = document.querySelector(".sec-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const sec = now.getSeconds();
  const secDegree = sec * 6 + 90;
  console.log(secDegree);
  secondHand.style.transition = secDegree === 90 ? "0.01s" : "all 0.05s linear";
  secondHand.style.transform = `rotate(${secDegree}deg)`;

  const min = now.getMinutes();
  const minDegree = min * 6 + 90;
  minuteHand.style.transform = `rotate(${minDegree}deg)`;

  const hours = now.getHours();
  const hourDegree = (hours % 12) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate, 1000);
setDate();
