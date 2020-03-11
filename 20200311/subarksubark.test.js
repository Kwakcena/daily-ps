const solution = n => {
  let str = "";
  for (let i = 0; i < n; i++) {
    i % 2 == 0 ? (str += "수") : (str += "박");
  }
  return str;
};

const solution2 = n => "수박".repeat(n).slice(0, n);

test("solution", () => {
  expect(solution(3)).toBe("수박수");
  expect(solution(4)).toBe("수박수박");
});

test("solution2", () => {
  expect(solution2(3)).toBe("수박수");
});
