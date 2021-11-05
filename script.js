"use strict";

const firstNames = ["Brad", "Zintis", "Joe", "Phoebe", "Giuseppe"];
const lastNames = ["Jones", "Smith", "Brown", "White", "Johnson"];
const randomAge = () => Math.trunc(Math.random() * 18 + 18);
const randomGPA = () => Math.trunc(Math.random() * 4 + 1);

document.querySelector(".preview").addEventListener("click", function () {
  let number = Number(document.querySelector(".number").value);
  if (number === 0) {
    return alert("Pick a number jackass, we haven't got all day.");
  }
  console.log("input", number);

  const fName = function () {
    let randomFirst = Math.trunc(Math.random() * 5 + 1);
    if (randomFirst === 1) {
      return firstNames[0];
    } else if (randomFirst === 2) {
      return firstNames[1];
    } else if (randomFirst === 3) {
      return firstNames[2];
    } else if (randomFirst === 4) {
      return firstNames[3];
    } else {
      return firstNames[4];
    }
  };

  const lName = function () {
    let randomLast = Math.trunc(Math.random() * 5 + 1);
    if (randomLast === 1) {
      return lastNames[0];
    } else if (randomLast === 2) {
      return lastNames[1];
    } else if (randomLast === 3) {
      return lastNames[2];
    } else if (randomLast === 4) {
      return lastNames[3];
    } else {
      return lastNames[4];
    }
  };

  const generateCards = function (number) {
    for (let i = 0; i < number; i++) {
      let containerEl = document.createElement("div");
      containerEl.innerHTML = "";
      console.log(containerEl);
      let smallCard = document.createElement("div");
      containerEl.append(smallCard);
      let firstName = document.createElement("p");
      firstName.innerHTML = `First Name: ${fName()} `;
      smallCard.append(firstName);
      let lastName = document.createElement("p");
      lastName.innerHTML = `Last Name: ${lName()} `;
      smallCard.append(lastName);
      let age = document.createElement("p");
      age.innerHTML = `Age: ${randomAge()} `;
      smallCard.append(age);
      let gpa = document.createElement("p");
      gpa.innerHTML = `GPA: ${randomGPA()} `;
      smallCard.append(gpa);
    }
  };
  console.log(generateCards(number));
});

// function generateStudent() {
//   const studentList = {
//     first: fName(),
//     last: lName(),
//     age: randomAge(),
//     gpa: randomGPA(),
//   };
//   return studentList;

// }

// function generateList(number) {
//   let result = [];
//   for (let i = 0; i <= number; i++) {
//     console.log('for loop input', number);
//     result.push(generateStudent());
//     console.log(result);
//     return result;
//   }
// }

// console.log(generateList(number));

// for(let i = 0; i <= result.length; i++) {
//     let containerEl = document.createElement('div');
//     containerEl.innerHTML = '';
//     let smallCard = document.createElement('div');
//     let firstName = document.createElement('p');
//     firstName.innerHTML = 'First Name:';
//     smallCard.append(firstName);
//     let lastName = document.createElement('p');
//     lastName.innerHTML = 'Last Name:';
//     smallCard.append(lastName);
//     let age = document.createElement('p');
//     age.innerHTML = 'Age:';
//     smallCard.append(age);
//     let gpa = document.createElement('p');
//     gpa.innerHTML = 'GPA:';
//     smallCard.append(gpa);

// }
