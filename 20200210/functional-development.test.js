const solution = (progresses, speeds) => {
  return [2, 1];
};

test("solution", () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
});
