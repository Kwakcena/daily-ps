const solution = (land) => {
  let sum = 0;
  for (let i = 0; i < land.length; i++) {
    const [maxValue, maxIndex] = findMaxValueAndIndex(land[i]);
    if (i < land.length - 1) {
      land[i + 1].splice(maxIndex, 1, -1);
    }
    sum += maxValue;
  }
  return sum;
};

const findMaxValueAndIndex = (arr) => {
  const max = Math.max(...arr);
  return [max, arr.findIndex((value) => max == value)];
};

test("최대값을 찾는다.", () => {
  expect(findMaxValueAndIndex([1, 2, 3, 5])).toStrictEqual([5, 3]);
  expect(findMaxValueAndIndex([9, 8, 7, 6])).toStrictEqual([9, 0]);
  expect(findMaxValueAndIndex([0, 9, 9, 9])).toStrictEqual([9, 1]);
  expect(findMaxValueAndIndex([9, 1, 1, 1])).toStrictEqual([9, 0]);
  expect(findMaxValueAndIndex([0, 1, 1, 1])).toStrictEqual([1, 1]);
  expect(findMaxValueAndIndex([1, 0, 9, 9])).toStrictEqual([9, 2]);
  expect(findMaxValueAndIndex([1, 9, 0, 9])).toStrictEqual([9, 1]);
  expect(findMaxValueAndIndex([9, 0, 9, 9])).toStrictEqual([9, 0]);
});

test("solution", () => {
  // 이게 핵심이였네...
  expect(
    solution([
      [1, 2, 3, 5],
      [5, 8, 8, 7],
      [4, 9999, 2, 1],
    ])
  ).toBe(17);
  expect(
    solution([
      [1, 2, 3, 5],
      [5, 6, 7, 8],
      [4, 3, 2, 1],
    ])
  ).toBe(16);
  expect(
    solution([
      [9, 8, 7, 6],
      [9, 9, 9, 9],
      [9, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 9, 9],
      [1, 9, 9, 9],
      [9, 9, 9, 9],
    ])
  ).toBe(55);
  expect(
    solution([
      [9, 9, 9, 9],
      [10, 9, 1, 11],
      [10, 9, 1, 1000],
      [9999, 9, 1, 1000],
    ])
  ).toBe(1030);
});
