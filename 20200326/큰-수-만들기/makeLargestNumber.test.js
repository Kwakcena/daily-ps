const solution = (number, k) => {
  const digits = number.split("");
  const len = number.length - k;
  return largestNumber(digits, "", 0, len, [0]);
};

function largestNumber(digits, numberString, start, len, largest) {
  if (numberString.length == len) {
    const number = 0 | numberString;
    largest[0] = largest[0] < number ? number : largest[0];
    return;
  }
  for (let i = start; i < digits.length; i++) {
    numberString += digits[i];
    largestNumber(digits, numberString, i + 1, len, largest);
    numberString = numberString.slice(0, -1);
  }

  return largest[0] + "";
}

test("solution", () => {
  expect(solution("1924", 2)).toBe("94");
  expect(solution("1231234", 3)).toBe("3234");
  expect(solution("4177252841", 4)).toBe("775841");
});

test("get largest number", () => {
  expect(largestNumber("1924".split(""), "", 0, 2, [0])).toBe("94");
  expect(largestNumber("1231234".split(""), "", 0, 4, [0])).toBe("3234");
  expect(largestNumber("4177252841".split(""), "", 0, 6, [0])).toBe("775841");
});
