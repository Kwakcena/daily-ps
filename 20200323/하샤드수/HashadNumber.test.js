const solution = x => {
  return true;
};

const sumOfDigits = num => {
  return String(num)
    .split("")
    .reduce((acc, val) => acc + Number(val), 0);
};

test("sum of Digits", () => {
  expect(sumOfDigits(123)).toBe(6);
  expect(sumOfDigits(1234)).toBe(10);
  expect(sumOfDigits(1)).toBe(1);
});

test("solution", () => {
  expect(solution(10)).toBe(true);
});
