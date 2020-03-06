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
  (s.match(/p/gi) || []).length === (s.match(/y/gi) || []).length;

const solution3 = s => {
  const arr = (s.match(/p|y/gi) || []).reduce(
    (obj, ch) => ({
      ...obj,
      [ch]: (obj[ch] || 0) + 1
    }),
    {}
  );
  return arr["y"] === arr["p"];
};

const solution4 = s => {
  const arr = (s.toLowerCase().match(/p|y/g) || []).reduce((obj, ch) => {
    obj[ch] = (obj[ch] || 0) + 1;
    return obj;
  }, {});
  return arr["y"] === arr["p"];
};

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

test("solution3", () => {
  expect(solution3("pPoooyY")).toBe(true);
  expect(solution3("Pyy")).toBe(false);
  expect(solution3("abc")).toBe(true);
  expect(solution3("a")).toBe(true);
});

test("solution4", () => {
  expect(solution4("pPoooyY")).toBe(true);
  expect(solution4("Pyy")).toBe(false);
  expect(solution4("abc")).toBe(true);
  expect(solution4("a")).toBe(true);
});
