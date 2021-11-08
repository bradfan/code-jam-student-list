"use strict";

const firstNames = ["Brad", "Zintis", "Joe", "Phoebe", "Giuseppe", "Bilbo", "Bob", "Mahatma"];
const lastNames = ["Jones", "Smith", "Brown", "White", "Johnson", "Baggins", "Loblaw", "Coat"];
const globalContainerEl = document.getElementById("containerEl");

const randomAge = () => Math.trunc(Math.random() * 18 + 18);
const randomGPA = () => (Math.random() * 4 + 1);
// const  = rando.toArray.slice(-9);
console.log(randomGPA);

document.querySelector(".preview").addEventListener("click", function () {
  // clears the created element upon each "click"
  containerEl.innerHTML = "";
  let number = Number(document.querySelector(".number").value);
  if (number <= 0) return alert("You must selct a number greter than 1.");

  const fName = () => Math.trunc(Math.random() * firstNames.length);

  const lName = () => Math.trunc(Math.random() * lastNames.length);

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
      gpa.innerHTML = `GPA: ${randomGPA()} `;
      smallCard.append(gpa);

      globalContainerEl.append(smallCard);
    }
  };
  generateCards(number);
});
