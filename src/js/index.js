/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

const cards = (value, suit) => {
  return `<span>${value} ${suit}</span>`;
};

function randomST(length) {
  return Math.floor(Math.random() * length);
}

let randomSuit = [];
let sortedArray = [];
let iterArray = [];

let myArray = [7, 2, 9, 4, 5, 6, 1, 8, 3, 10, 11, 12, 13];
let suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];

for (let i = 0; i < 5; i++) {
  randomSuit.push({
    suit: suits[randomST(4)],
    value: myArray[randomST(13)]
  });
}

console.log(randomSuit);

const bubbleup = arr => {
  let wall = arr.length - 1;

  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
        let copyArr = arr.slice();
        iterArray.push(copyArr);
      }
      index++;
    }
    wall--;
    sortedArray.push(arr);
  }
};

bubbleup(myArray);
console.log(iterArray);
// let randomizer = arr => {
//   let random = Math.floor(Math.random() * arr.length);
//   console.log(arr[random]);
// };

// randomizer(myArray);

let bodyRender = () => {
  const body = document.querySelector("body");
  body.innerHTML = myArray;
};

let renderment = randomSuit.map(e => {
  return cards(e.suit, e.value);
});

document.querySelector("#display").innerHTML = renderment.join("");
