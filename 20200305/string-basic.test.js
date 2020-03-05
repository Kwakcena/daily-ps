const solution = s => (s.length == 4 || s.length == 6) && !isNaN(Number(s));

test("solution", () => {
  expect(solution("a234")).toBe(false);
  expect(solution("1234")).toBe(true);
  expect(solution("12344")).toBe(false);
  expect(solution("abcs")).toBe(false);
  expect(solution("a")).toBe(false);
  expect(solution("12345678")).toBe(false);
  expect(solution("abcdef")).toBe(false);
  expect(solution("1e12")).toBe(false);
});
