const solution = s => `${extraction(s, /[a-z]/g)}${extraction(s, /[A-Z]/g)}`;

const extraction = (str, pattern) => {
  const extractionStr = str.match(pattern);
  return extractionStr
    ? extractionStr.sort((a, b) => (a > b ? -1 : 1)).join("")
    : "";
};

test("extraction", () => {
  expect(extraction("abcABC", /[A-Z]/g)).toBe("CBA");
  expect(extraction("abcABC", /[a-z]/g)).toBe("cba");
  expect(extraction("abcdez", /[a-z]/g)).toBe("zedcba");
  expect(extraction("azbycx", /[a-z]/g)).toBe("zyxcba");
  expect(extraction("a", /[a-z]/g)).toBe("a");
  expect(extraction("a", /[A-Z]/g)).toBe("");
});

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
