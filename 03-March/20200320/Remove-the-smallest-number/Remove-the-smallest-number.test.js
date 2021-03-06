const solution = arr => {
  const min = findMinValue(arr);
  return arr.length == 1 ? [-1] : arr.filter(v => v != min);
};

const findMinValue = arr => Math.min.apply(null, arr);

const solution2 = arr => {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length < 1 ? [-1] : arr;
};

test("제일 작은 수 제거하기", () => {
  expect(solution([4, 3, 2, 1])).toEqual([4, 3, 2]);
  expect(solution([10])).toEqual([-1]);
});

test("최소값 찾기", () => {
  expect(findMinValue([4, 3, 2, 1])).toBe(1);
  expect(findMinValue([10])).toBe(10);
});

test("splice 사용 풀이", () => {
  expect(solution2([4, 3, 2, 1])).toEqual([4, 3, 2]);
  expect(solution2([10])).toEqual([-1]);
});
