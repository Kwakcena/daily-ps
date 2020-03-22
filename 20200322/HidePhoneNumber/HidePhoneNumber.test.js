const solution = phone_number => {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
};

test("solution", () => {
  expect(solution("01033334444")).toBe("*******4444");
});
