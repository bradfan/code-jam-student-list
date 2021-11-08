"use strict";

const firstNames = ["Brad", "Zintis", "Joe", "Phoebe", "Giuseppe", "Bilbo", "Bob", "Mahatma"];
const lastNames = ["Jones", "Smith", "Brown", "White", "Johnson", "Baggins", "Loblaw", "Coat"];
const globalContainerEl = document.getElementById("containerEl");

const randoGen = () => Math.random();
const randomAge = () => Math.trunc((randoGen()) * 18 + 18);
console.log("age", randomAge())
const randomGPA = () => (randoGen()) * 3 + 1;
// const  = rando.toArray.slice(-9);
console.log("gpa", randomGPA());

document.querySelector(".preview").addEventListener("click", function () {
  // clears the created element upon each "click"
  containerEl.innerHTML = "";
  let number = Number(document.querySelector(".number").value);
  if (number <= 0) return alert("You must choose at least one student to preview.");

  const fName = () => Math.trunc((randoGen()) * firstNames.length);
  
  const lName = () => Math.trunc((randoGen()) * lastNames.length);
  
  const generateCards = function (number) {
    for (let i = 0; i < number; i++) {
      let containerEl = document.createElement("div");
      let smallCard = document.createElement("form");
      containerEl.append(smallCard);
      let firstName = document.createElement("p");
      firstName.innerHTML = `First Name: ${firstNames[fName()]} `;
      smallCard.append(firstName);
      let lastName = document.createElement("p");
      lastName.innerHTML = `Last Name: ${lastNames[lName()]} `;
      smallCard.append(lastName);
      let age = document.createElement("p");
      age.innerHTML = `Age: ${randomAge()} `;
      smallCard.append(age);
      let gpa = document.createElement("p");
      gpa.innerHTML = `GPA: ${randomGPA().toFixed(1)} `;
      smallCard.append(gpa);

      globalContainerEl.append(smallCard);
    }
  };
  generateCards(number);
});
