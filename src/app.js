/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let excuseGenerator = () => {
    let who = [
      "A man ",
      "A lonely jogger ",
      "A lonely comedian ",
      "A lonely merchant ",
      "A slow merchant "
    ];
    let action = ["yelled ", "kicked ", "burned ", "kicked ", "threw "];
    let what = [
      "at my sandwich ",
      "my sandwich ",
      "my car ",
      "my car ",
      "my computer "
    ];
    let where = [
      "in my house ",
      "on the street ",
      "front of the office ",
      "near the toilet ",
      "on the street "
    ];

    let whoIndex = who[Math.floor(Math.random() * who.length)];
    let actionIndex = action[Math.floor(Math.random() * action.length)];
    let whatIndex = what[Math.floor(Math.random() * what.length)];
    let whereIndex = where[Math.floor(Math.random() * where.length)];

    let excuse = whoIndex + "" + actionIndex + "" + whatIndex + "" + whereIndex;
    return excuse;
  };
  document.querySelector("#excuse").style.backgroundColor = "orange";
  let excuseElement = document.querySelector("#excuse");
  excuseElement.innerHTML = excuseGenerator();
};
console.log("Hello Rigo from the console!");
