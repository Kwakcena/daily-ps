const solution = s => {
  return parseInt(s);
};

const solution2 = s => {
  return s / 1;
};

test("solution", () => {
  expect(solution("1234")).toBe(1234);
  expect(solution("-1234")).toBe(-1234);
  expect(solution("+1234")).toBe(+1234);
});

test("solution2", () => {
  expect(solution2("1234")).toBe(1234);
  expect(solution2("-1234")).toBe(-1234);
  expect(solution2("+1234")).toBe(+1234);
});
