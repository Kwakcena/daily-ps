const solution = (land) => {
  for (let row = 1; row < land.length; row++) {
    for (let col = 0; col < land[row].length; col++) {
      land[row][col] += Math.max(...land[row - 1].filter((_, j) => j !== col));
    }
  }
  return Math.max(...land[land.length - 1]);
};

const solution2 = (lands) => {
  const answer = lands.reduce((arr, row) => {
    return [
      ...arr,
      ...row.map(
        (score, i) =>
          (score += Math.max(...arr.slice(-4).filter((_, j) => i !== j)))
      ),
    ];
  });
  return Math.max(...answer);
};

test("solution2", () => {
  expect(
    solution2([
      [1, 2, 3, 5],
      [3, 8, 9, 7],
      [2, 20, 99, 3],
    ])
  ).toBe(112);
});

test("solution", () => {
  expect(
    solution([
      [1, 2, 3, 5],
      [3, 8, 9, 7],
      [2, 20, 99, 3],
    ])
  ).toBe(112);
});
