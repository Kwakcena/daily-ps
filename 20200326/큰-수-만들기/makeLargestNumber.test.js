const solution = number => {
  const digits = number.split("");
  return "94";
};

function largestNumber(digits, start, len, largest) {
  // TODO
}

test("solution", () => {
  expect(solution("1924")).toBe("94");
});

test("get largest number", () => {
  expect(largestNumber()).toBe();
});
