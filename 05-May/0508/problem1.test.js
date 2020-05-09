const solution = (lands) =>
  Math.max(
    ...lands.reduce((arr, row) =>
      row.map((it, index) => it + Math.max(...splice(arr, index)))
    )
  );

const splice = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
  // end를 지정하지 않을 경우 start 부터 끝까지 slice
];

test("splice 함수 테스트", () => {
  expect(splice([1, 2, 3, 5], 0)).toStrictEqual([2, 3, 5]);
  expect(splice([1, 2, 3, 5], 1)).toStrictEqual([1, 3, 5]);
  expect(splice([1, 2, 3, 5], 2)).toStrictEqual([1, 2, 5]);
  expect([1, 2, 3, 4].slice(0, 0)).toStrictEqual([]);
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
