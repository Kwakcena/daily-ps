const solution = (s) => {
  const index = parseInt(s.length / 2);
  return s.length % 2 == 0
    ? s.slice(index - 1, index + 1)
    : s.slice(index, index + 1);
};

test("solution", () => {
  expect(solution("qwer")).toBe("we");
  expect(solution("abcde")).toBe("c");
  expect(solution("aaaaa")).toBe("a");
  expect(solution("aaaa")).toBe("aa");
  expect(solution("aaaabbbb")).toBe("ab");
});
