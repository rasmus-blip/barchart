"use strict";

const model = [];
document.querySelector("button").addEventListener("click", init);

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function init() {
  // makes 40 random number in const model
  for (let count = 1; count <= 40; count++) {
    const queueSize = getNumberOfCustomers();
    model.push(queueSize);
  }
  displayData();
  loop();
}

function loop() {
  modifyModel();
  setTimeout(loop, 500);
}

function modifyModel() {
  const queueSize = getNumberOfCustomers();
  model.shift();
  model.push(queueSize);
  displayData();
}

function displayData() {
  for (let count = 1; count <= 40; count++) {
    document.querySelector(".bar" + count).style.height =
      model[count - 1] + "px";
  }
}

// const arr = [];
// let counterValue = 1;
// let randomValue = Math.floor(Math.random() * 32);
// document.querySelector("button").addEventListener("click", init);
// const bar = document.getElementsByClassName(".bar" + counterValue);
// window.addEventListener("DOMContentLoaded", init);

// function init() {
//   counterValue = Math.floor(Math.random() * 32);
//   arr.unshift(counterValue);
//   arr.splice(40, 1);
//   counterValue++;
//   setTimeout(makeBars, 1000);
// }

// function makeBars() {
//   bar.height = randomValue + "px";
//   console.log(counterValue);
//   console.log(bar.height);
//   document.querySelector(".bar" + 1).style.height = randomValue + "px";
//   init();
// }
