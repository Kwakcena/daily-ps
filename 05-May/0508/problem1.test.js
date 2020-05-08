const solution = (land) => {
  for (let row = 1; row < land.length; row++) {
    for (let col = 0; col < land[row].length; col++) {
      land[row][col] += Math.max(...land[row - 1].filter((_, j) => j !== col));
    }
  }
  return Math.max(...land[land.length - 1]);
};

test("solution", () => {
  expect(
    solution([
      [1, 2, 3, 5],
      [3, 8, 9, 7],
      [2, 20, 99, 3],
    ])
  ).toBe(112);
});
