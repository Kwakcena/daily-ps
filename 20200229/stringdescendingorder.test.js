const solution = s => {
  return s
    .split("")
    .reverse()
    .join("");
};

test("solution", () => {
  expect(solution("Zbcdefg")).toBe("gfedcbZ");
});
