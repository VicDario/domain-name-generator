/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronouns = ["the", "our", "my", ""];
  let adjs = [
    "great",
    "big",
    "beautiful",
    "necessary",
    "safe",
    "strange",
    "sweet",
    "strong",
    "wise",
    "young"
  ];
  let nouns = ["jogger", "racoon", "bank", "site"];
  let dots = [".com", ".es", ".tv", ".cl", ".net", ".org"];

  let div = document.querySelector("#domains");
  let domain = "";

  for (const pronoun of pronouns) {
    for (const adj of adjs) {
      for (const noun of nouns) {
        for (const dot of dots) {
          let insertDomain = document.createElement("P");
          domain = `${pronoun}${adj}${noun}${dot}`;
          insertDomain.innerHTML = domain;
          div.appendChild(insertDomain);
        }
      }
    }
  }
};
