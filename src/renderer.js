const id = document.getElementById;

const secsHand = id('hand-secs');
const minsHand = id('hand-mins');
const hrsHand  = id('hand-hrs');

function updateHands() {
  let now = new Date();

  let secs = now.getSeconds();
  let mins = now.getMinutes();
  let hrs  = now.getHours();

  let secsDeg = 6 * secs;
  let minsDeg = 6 * mins;
  let hrsDeg  = 30 * hrs + mins / 2;

  secsHand.style.transform = `translate(-50%, -100%) rotate(${secsDeg}deg)`;
  minsHand.style.transform = `translate(-50%, -100%) rotate(${minsDeg}deg)`;
  hrsHand.style.transform  = `translate(-50%, -100%) rotate(${hrsDeg}deg)`;
}

setInterval(updateHands, 1000);
updateHands();
