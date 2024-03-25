/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var excuseGenerator = () => {
    var who = [
      "A man",
      "A lonely jogger",
      "A lonely comedian",
      "A lonely merchant",
      "A slow merchant"
    ];
    var action = ["yelled", "kicked", "burned", "kicked", "threw"];
    var what = [
      "at my sandwich",
      "my sandwich",
      "my car",
      "my car",
      "my computer"
    ];
    var where = [
      "in my house",
      "on the street",
      "front of the office",
      "near the toilet",
      "on the street"
    ];

    var whoIndex = who[Math.floor(Math.random() * who.length)];
    var actionIndex = action[Math.floor(Math.random() * action.length)];
    var whatIndex = what[Math.floor(Math.random() * what.length)];
    var whereIndex = where[Math.floor(Math.random() * where.length)];

    var excuse = whoIndex + "" + actionIndex + "" + whatIndex + "" + whereIndex;
    return excuse;
  };
  document.querySelector("excuse");
  console.log("Hello Rigo from the console!");
};
