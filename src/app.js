import { perPerson, format } from "./calc.js";

const bill = document.querySelector("#bill");
const tip = document.querySelector("#tip");
const people = document.querySelector("#people");
const result = document.querySelector("#result");

function update() {
  try {
    const each = perPerson(Number(bill.value), Number(tip.value), Number(people.value));
    result.textContent = `Each person pays ${format(each)}`;
  } catch (err) {
    result.textContent = err.message;
  }
}

[bill, tip, people].forEach((el) => el.addEventListener("input", update));
update();
