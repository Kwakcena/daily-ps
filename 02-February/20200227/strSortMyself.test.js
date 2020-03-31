const solution = (strings, n) =>
  strings.sort((r, l) =>
    r[n] === l[n] ? (r < l ? -1 : 1) : r[n].charCodeAt(0) - l[n].charCodeAt(0)
  );

const solution2 = (strings, n) =>
  strings.sort((r, l) =>
    r[n] === l[n] ? r.localeCompare(l) : r[n].localeCompare(l[n])
  );

test("solution", () => {
  expect(solution(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
  expect(solution(["abce", "abcd", "cdx"], 2)).toEqual(["abcd", "abce", "cdx"]);
  expect(solution(["aaaa", "aaba", "aaca"], 2)).toEqual([
    "aaaa",
    "aaba",
    "aaca"
  ]);
  expect(solution(["aaaa", "aaba", "aaca"], 1)).toEqual([
    "aaaa",
    "aaba",
    "aaca"
  ]);
});

test("solution2", () => {
  expect(solution2(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
  expect(solution2(["abce", "abcd", "cdx"], 2)).toEqual([
    "abcd",
    "abce",
    "cdx"
  ]);
  expect(solution2(["aaaa", "aaba", "aaca"], 2)).toEqual([
    "aaaa",
    "aaba",
    "aaca"
  ]);
  expect(solution2(["aaaa", "aaba", "aaca"], 1)).toEqual([
    "aaaa",
    "aaba",
    "aaca"
  ]);
});
