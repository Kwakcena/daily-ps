const solution = (number, k) => {
  const digits = number.split("");
  const len = number.length;
  let removeCount = k;
  let i = 0;
  for (let a = 0; a < k; a++) {
    while (i < len) {
      if (digits[i] < digits[i + 1]) {
        digits.splice(i, 1);
        i = 0;
        removeCount -= 1;
        break;
      } else i += 1;
    }
  }
  return removeCount > 0 ? digits.slice(0, len - k).join("") : digits.join("");
};

const solution2 = (number, k) => {
  const numberLength = number.length;
  let answerString = "",
    startIndex = 0,
    maxIndex = 0;

  for (let endIndex = k; endIndex < numberLength; endIndex++) {
    let largestChar = "0";
    for (let i = startIndex; i <= endIndex; i++) {
      if (largestChar < number[i]) {
        largestChar = number[i];
        maxIndex = i;
        if (largestChar == "9") break;
      }
    }
    answerString += largestChar;
    startIndex = maxIndex + 1;
  }

  return answerString;
};

test("solution2", () => {
  expect(solution2("1924", 2)).toBe("94");
  expect(solution2("4177252841", 4)).toBe("775841");
  expect(solution2("1231234", 3)).toBe("3234");
  expect(solution2("77777", 2)).toBe("777");
  expect(solution2("87654", 2)).toBe("876");
});

test("solution", () => {
  expect(solution("1924", 2)).toBe("94");
  expect(solution("1231234", 3)).toBe("3234");
  expect(solution("4177252841", 4)).toBe("775841");
  expect(solution("12345678", 3)).toBe("45678");
  expect(solution("87654", 2)).toBe("876");
  expect(solution("77777", 2)).toBe("777");
  expect(solution("928763", 3)).toBe("987");
});
