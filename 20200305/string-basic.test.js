const solution = s =>
  (s.length == 4 || s.length == 6) &&
  s.split("").every(v => (v >= "0") & (v <= "9"));

const solution2 = s => /^\d{4}$|^\d{6}$/.test(s);

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

test("정규 표현식", () => {
  expect(solution2("2345")).toBe(true);
  expect(solution2("a223")).toBe(false);
  expect(solution2("abcd")).toBe(false);
  expect(solution2("123456")).toBe(true);
  expect(solution2("12345678")).toBe(false);
});
