const solution = (progresses, speeds) => {
  return 1;
};

const getRemainProgresses = (progresses, speeds) => {
  return progresses.map((progress, index) => {
    return Math.ceil((100 - progress) / speeds[index]);
  });
};

test("solution", () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toBe(1);
});

test("get remain progresses", () => {
  expect(getRemainProgresses([93, 30, 55], [1, 30, 5])).toEqual([7, 3, 9]);
});
