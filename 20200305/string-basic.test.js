const solution = s =>
  (s.length == 4 || s.length == 6) &&
  s.split("").every(v => (v >= "0") & (v <= "9"));

test("solution", () => {
  expect(solution("a234")).toBe(false);
  expect(solution("1234")).toBe(true);
  expect(solution("12344")).toBe(false);
  expect(solution("abcs")).toBe(false);
  expect(solution("a")).toBe(false);
  expect(solution("12345678")).toBe(false);
  expect(solution("abcdef")).toBe(false);
  expect(solution("1e12")).toBe(false);
  expect(solution("abcd12")).toBe(false);
  expect(solution("0000")).toBe(true);
});
