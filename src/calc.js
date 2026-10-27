export function tipAmount(bill, percent) {
  if (bill < 0 || percent < 0) throw new Error("negative values are not allowed");
  return (bill * percent) / 100;
}

export function perPerson(bill, percent, people) {
  if (people < 1) throw new Error("people must be at least 1");
  return (bill + tipAmount(bill, percent)) / people;
}

export function format(value) {
  return value.toFixed(2);
}
