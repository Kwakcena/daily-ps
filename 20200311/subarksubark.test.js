const solution = n => {
  let str = "";
  for (let i = 0; i < n; i++) {
    i % 2 == 0 ? (str += "수") : (str += "박");
  }
  return str;
};

test("solution", () => {
  expect(solution(3)).toBe("수박수");
  expect(solution(4)).toBe("수박수박");
});
