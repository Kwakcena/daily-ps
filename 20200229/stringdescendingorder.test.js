const solution = s =>
  s
    .split("")
    .sort()
    .reverse()
    .join("");

test("solution", () => {
  expect(solution("Zbcdefg")).toBe("gfedcbZ");
  expect(solution("abcdeABCDE")).toBe("edcbaEDCBA");
});

test("reverse", () => {
  expect(["a", "c", "b"].reverse()).toEqual(["b", "c", "a"]);
});

test("sort", () => {
  expect(["a", "c", "b"].sort()).toEqual(["a", "b", "c"]);
  expect(["a", "c", "b"].sort((a, b) => (a > b ? -1 : 1))).toEqual([
    "c",
    "b",
    "a"
  ]);

  expect(["a", "k", "h"].sort((a, b) => (a > b ? -1 : 1))).toEqual([
    "k",
    "h",
    "a"
  ]);
});
