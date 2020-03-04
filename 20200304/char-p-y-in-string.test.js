const solution1 = s => {
  const arr = s.split("");

  let p_cnt = 0,
    y_cnt = 0;
  arr.forEach(element => {
    if (element == "p" || element == "P") {
      p_cnt += 1;
    } else if (element == "y" || element == "Y") {
      y_cnt += 1;
    }
  });

  return p_cnt === y_cnt;
};

const solution2 = s =>
  (s.match(/p|P/g) || []).length === (s.match(/y|Y/g) || []).length;

test("solution1", () => {
  expect(solution1("pPoooyY")).toBe(true);
  expect(solution1("Pyy")).toBe(false);
  expect(solution1("abc")).toBe(true);
  expect(solution1("a")).toBe(true);
});

test("solution2", () => {
  expect(solution2("pPoooyY")).toBe(true);
  expect(solution2("Pyy")).toBe(false);
  expect(solution2("abc")).toBe(true);
  expect(solution2("a")).toBe(true);
});
