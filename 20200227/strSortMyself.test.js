const solution = (strings, n) =>
  strings.sort((r, l) =>
    r[n] === l[n] ? (r < l ? -1 : 1) : r[n].charCodeAt(0) - l[n].charCodeAt(0)
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
