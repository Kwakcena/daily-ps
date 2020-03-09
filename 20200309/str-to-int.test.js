const solution = s => {
  return parseInt(s);
};

test("solution", () => {
  expect(solution("1234")).toBe(1234);
  expect(solution("-1234")).toBe(-1234);
  expect(solution("+1234")).toBe(+1234);
});
