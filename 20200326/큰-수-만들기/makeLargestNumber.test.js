const solution = (number, k) => {
  const digits = number.split("");
  const len = number.length;
  let removeCount = k;
  for (let i = 0; i < len - 1 && removeCount; i++) {
    while (digits[i] < digits[i + 1] && removeCount) {
      digits.splice(digits.indexOf(digits[i]), 1);
      removeCount -= 1;
      i = 0;
    }
  }
  return removeCount > 0 ? digits.slice(0, len - k).join("") : digits.join("");
};

test("solution", () => {
  expect(solution("1924", 2)).toBe("94");
  expect(solution("1231234", 3)).toBe("3234");
  expect(solution("4177252841", 4)).toBe("775841");
  expect(solution("12345678", 3)).toBe("45678");
  expect(solution("87654", 2)).toBe("876");
  expect(solution("77777", 2)).toBe("777");
  expect(solution("928763", 3)).toBe("987");
});
