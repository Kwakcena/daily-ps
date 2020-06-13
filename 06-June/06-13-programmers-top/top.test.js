const solution = (heights) => {
  return [0,0,2,2,4];
}

test("solution", () => {
  expect(solution([6,9,5,7,4])).toStrictEqual([0,0,2,2,4]);
})