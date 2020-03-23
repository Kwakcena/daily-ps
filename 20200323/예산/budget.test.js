const solution = (d, budget) => {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) {
    d.pop();
  }
  return d.length;
};

test("solution", () => {
  expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
  expect(solution([2, 2, 3, 3], 10)).toBe(4);
});
