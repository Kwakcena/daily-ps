const solution = (heights) => {
  return heights.map((height, i) => {
    while(i) {
      i--;
      if(heights[i] > height) {
        return i + 1;
      }
    }
    return 0;
  })
}


test("solution", () => {
  expect(solution([6,9,5,7,4])).toStrictEqual([0,0,2,2,4]);
  expect(solution([3,9,9,3,5,7,2])).toStrictEqual([0,0,0,3,3,3,6]);
  expect(solution([1,5,3,6,7,6,5])).toStrictEqual([0,0,2,0,0,5,6]);
})