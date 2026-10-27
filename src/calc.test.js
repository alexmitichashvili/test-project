import { test } from "node:test";
import assert from "node:assert/strict";
import { tipAmount, perPerson, format } from "./calc.js";

test("tip is 10% of the bill", () => {
  assert.equal(tipAmount(100, 10), 10);
});

test("zero percent means no tip", () => {
  assert.equal(tipAmount(100, 0), 0);
});

test("negative bill is rejected", () => {
  assert.throws(() => tipAmount(-5, 10));
});

test("bill plus tip is split between people", () => {
  assert.equal(perPerson(100, 10, 2), 55);
});

test("zero people is rejected", () => {
  assert.throws(() => perPerson(100, 10, 0));
});

test("amounts always show two decimals", () => {
  assert.equal(format(5), "5.00");
});
