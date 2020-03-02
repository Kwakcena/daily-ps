const solution = s => `${extraction(s, /[a-z]/g)}${extraction(s, /[A-Z]/g)}`;

const extraction = (str, pattern) =>
  str
    .match(pattern)
    .reverse()
    .join("");

test("extraction", () => {
  expect(extraction("abcABC", /[A-Z]/g)).toBe("CBA");
  expect(extraction("abcABC", /[a-z]/g)).toBe("cba");
  expect(extraction("abcdez", /[a-z]/g)).toBe("zedcba");
  expect(extraction("azbycx", /[a-z]/g)).toBe("zyxcba");
});

test("solution", () => {
  expect(solution("Zbcdefg")).toBe("gfedcbZ");
  expect(solution("abcdeABCDE")).toBe("edcbaEDCBA");
});
