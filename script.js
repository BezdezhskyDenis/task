function clock() {
  const div = document.createElement("div");
  div.classList = "text-center m-3 mb-5 h3"
  document.body.appendChild(div);

  setInterval(() => {
    const time = new Date()
    let seconds = time.getSeconds()
    if (seconds < 10){
      seconds = "0" + seconds
    }
    let currentTime = time.getMinutes() + ":" + seconds
    div.innerHTML = currentTime;
  }, 0);
  // while (true) {
  // }
}

clock();

function startButton(){

  const div = document.createElement("div");
  div.classList = "d-grid gap-2 col-4 mb-5 mx-auto"
  div.innerHTML = `
  <button class="btn btn-success" type="button" id="start" onclick="asyncTimers()">Start</button>
  <button class="btn btn-success" type="button" id="start" onclick="restart()">restart</button>
  `;
  document.body.append(div);
}

startButton()

function restart(){
  window.location.reload()
}
function exercise1() {
  console.log("one");
  setTimeout(() => {
    console.log("two");
    setTimeout(() => {
      console.log("three");
      setTimeout(() => {
        console.log("four");
        setTimeout(() => {
          console.log("six");
        }, 3000);
      }, 5000);
      setTimeout(() => {
        console.log("five");
        setTimeout(() => {
          console.log("seven");
        }, 2000);
      }, 6000);
    }, 3000);
  }, 10000);
}

for (let i = 0; i < 5; i++) {
  const div = document.createElement("div");
  div.id = i;
  div.classList = "row justify-content-md-center text-center"
  document.body.append(div);
}

function intervalTimerPopUp(text, id) {
  let currentSec = new Date().getSeconds();
  let currentTime = new Date().getMinutes() + ":" + currentSec;
  let divNum = document.getElementById(id);
  const span = document.createElement("span");
  span.classList = " col-2 mb-2 fade-in"
  span.innerHTML += `
  
  <div class="card text-center">
  <div class="card-body lh-2 p-0">
    <p class="fs-6 fw-bold m-0">${text}</p>
    <p class="fs-6 m-0">PopUp on: ${currentTime}</p>
  </div>
  <i class="bi bi-arrow-right"></i>
</div>
`;
  divNum.append(span);
}

const splittedTime = [];

function timerSet(sec, id, split) {
  if (splittedTime.length === 0) {
    splittedTime.push(0);

    return splittedTime[id];
  } else if (typeof splittedTime[id] != "number") {
    if (split) {
      splittedTime[id] = splittedTime[id - 1] + sec;

      return splittedTime[id];
    } else {
      splittedTime[id] = splittedTime[0] + sec;

      return splittedTime[id];
    }
  }
  let idTime = splittedTime[id];
  let flowTime = idTime + sec;
  splittedTime[id] = flowTime;

  return splittedTime[id];
}

function intervalTimer(sec, name, id, split) {
  time = timerSet(sec, id, split);
  console.time(name);
  setTimeout(
    () => intervalTimerPopUp(name, id, console.timeEnd(name)),
    time * 1000
  );
}

function asyncTimers(){

  intervalTimer(0, "one", 0);
  intervalTimer(2, "two", 0);
intervalTimer(2, "eight", 1);
intervalTimer(8, "nine", 1);
intervalTimer(3, "three", 0);
intervalTimer(4, "five", 0);
intervalTimer(2, "fourteen", 2);
intervalTimer(34, "fifteen", 2);
intervalTimer(3, "ten", 3);
intervalTimer(4, "six", 0);
intervalTimer(2, "seven", 0);
intervalTimer(3, "twelve", 4, true);
intervalTimer(3, "eleven", 3);
intervalTimer(1, "thirteen", 4);
}
