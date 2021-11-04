"use strict";

const firstNames = ["Brad", "Zintis", "Joe", "Phoebe", "Giuseppe"];

const lastNames = ["Jones", "Smith", "Brown", "White", "Johnson"];

const first = function() {
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
}

const last = function() {
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
}

const age = () => Math.trunc(Math.random() * 18 + 18);

const GPA = () => Math.trunc(Math.random() * 4 + 1);

function generateStudent() {
  const studentList = {
    first: first(),
    last: last(),
    age: age(),
    gpa: GPA(),
  };
  return studentList;
}
function generateStudents(num) {
  let result = [];
  for (let i = 0; i <= num; i++) {
    result.push(generateStudent());
  }
  return result;
}
const student = generateStudents(100);

console.log(student);
