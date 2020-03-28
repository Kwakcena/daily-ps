const solution = n =>
  Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;

test("solution", () => {
  expect(solution(121)).toBe(144);
  expect(solution(122)).toBe(-1);
});

test("Math 객체 활용해보자.", () => {
  expect(Math.sqrt(121)).toBe(11);
});
