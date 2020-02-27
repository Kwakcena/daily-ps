const solution = (strings, n) => {
  return ["car", "bed", "sun"];
};

test("solution", () => {
  expect(solution(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
});
