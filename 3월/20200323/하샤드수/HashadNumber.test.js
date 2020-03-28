const solution = x => x % sumOfDigits(x) === 0;

const sumOfDigits = num =>
  String(num)
    .split("")
    .reduce((acc, val) => acc + Number(val), 0);

test("sum of Digits", () => {
  expect(sumOfDigits(123)).toBe(6);
  expect(sumOfDigits(1234)).toBe(10);
  expect(sumOfDigits(1)).toBe(1);
});

test("solution", () => {
  expect(solution(10)).toBe(true);
  expect(solution(12)).toBe(true);
  expect(solution(11)).toBe(false);
  expect(solution(13)).toBe(false);
  expect(solution(123)).toBe(false);
});
