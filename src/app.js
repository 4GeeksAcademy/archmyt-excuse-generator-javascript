/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //   //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#theexcuse").innerHTML = generateExecuse();
  });
};
let generateExecuse = () => {
  let when = [
    "Before the class",
    "When I finished",
    "During my lunch",
    "While I was praying"
  ];
  let who = [
    " the dog",
    " my grandma",
    " his turtle",
    " my bird",
    " crazy",
    " old driver"
  ];
  let action = [
    " ate my",
    " took my",
    " crushed",
    " yelled at my",
    " kicked my",
    " stole my",
    " broke my"
  ];
  let what = [
    " my homework",
    " keys",
    " car",
    " shirt",
    " computer",
    " phone",
    " shoe"
  ];
  let where = [
    " on the road",
    " in my house",
    " at the office",
    " in my driveway",
    " near the mall",
    " near the toilet",
    " at the bus station"
  ];
  let rdm1 = Math.floor(Math.random() * when.length);
  let rdm2 = Math.floor(Math.random() * who.length);
  let rdm3 = Math.floor(Math.random() * action.length);
  let rdm4 = Math.floor(Math.random() * what.length);
  let rdm5 = Math.floor(Math.random() * where.length);

  // document.querySelector("#theexcuse").innerHTML =
  return when[rdm1] + who[rdm2] + action[rdm3] + what[rdm4] + where[rdm5];
};
console.log("Hello Rigo from the console!");
