const solution = (arr1, arr2) => {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    answer.push(sumMatrix(arr1[i], arr2[i]));
  }
  return answer;
};

const sumMatrix = (arr1, arr2) => {
  return [...arr1].map((val, idx) => val + arr2[idx]);
};

test("sum matrix", () => {
  expect(sumMatrix([1, 2, 3], [4, 5, 6])).toEqual([5, 7, 9]);
  expect(sumMatrix([3, 7, 4, 1], [9, 2, 3, 4])).toEqual([12, 9, 7, 5]);
});

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
  expect(
    solution(
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ],
      [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ]
    )
  ).toEqual([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10]
  ]);
});
