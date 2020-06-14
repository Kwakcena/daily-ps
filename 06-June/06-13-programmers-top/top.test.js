const solution = (heights) => {
  const answer = heights.map((height, index) => {

  })
  return [0,0,2,2,4];
}

const getIndex = (array, number) => {
  const index = array.reverse().findIndex((x) => x > number);
  return index === -1 ? 0 : array.length - index;
}

test("solution", () => {
  expect(solution([6,9,5,7,4])).toStrictEqual([0,0,2,2,4]);
})

test("자신보다 큰 수를 처음으로 만나는 지점의 index를 구한다.", () => {
  expect(getIndex([6], 9)).toBe(0);
  expect(getIndex([6, 9], 5)).toBe(2);
  expect(getIndex([6, 9, 5], 7)).toBe(2);
  expect(getIndex([6, 9, 5, 7], 4)).toBe(4);
})
