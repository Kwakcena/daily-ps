const solution = n => {
  return String(n)
    .match(/[0-9]/g)
    .reverse()
    .map(number => 0 | number);
};

test("자연수 뒤집어 배열로 만들기", () => {
  expect(solution(12345)).toEqual([5, 4, 3, 2, 1]);
  expect(solution(929384)).toEqual([4, 8, 3, 9, 2, 9]);
  expect(solution(10000000000)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
});
