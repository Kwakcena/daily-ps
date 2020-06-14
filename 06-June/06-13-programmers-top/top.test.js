const solution = (heights) => {
  return heights.map((height, index) => {
    return getIndex(heights.slice(0, index + 1), height);
  })
}

const getIndex = (array, number) => {
  const index = array.reverse().findIndex((x) => x > number);
  return index === -1 ? 0 : array.length - index;
}

test("solution", () => {
  expect(solution([6,9,5,7,4])).toStrictEqual([0,0,2,2,4]);
  expect(solution([3,9,9,3,5,7,2])).toStrictEqual([0,0,0,3,3,3,6]);
  expect(solution([1,5,3,6,7,6,5])).toStrictEqual([0,0,2,0,0,5,6]);
})

test("자신보다 큰 수를 처음으로 만나는 지점의 index를 구한다.", () => {
  expect(getIndex([6], 9)).toBe(0);
  expect(getIndex([6, 9], 5)).toBe(2);
  expect(getIndex([6, 9, 5], 7)).toBe(2);
  expect(getIndex([6, 9, 5, 7], 4)).toBe(4);
})
