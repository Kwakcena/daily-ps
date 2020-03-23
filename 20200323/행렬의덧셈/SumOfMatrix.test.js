const solution = (arr1, arr2) => {
  const answer = [[], []];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return answer;
};

test("solution", () => {
  expect(
    solution(
      [
        [1, 2],
        [2, 3]
      ],
      [
        [3, 4],
        [5, 6]
      ]
    )
  ).toEqual([
    [4, 6],
    [7, 9]
  ]);

  expect(solution([[1], [2]], [[3], [4]])).toEqual([[4], [6]]);
});
