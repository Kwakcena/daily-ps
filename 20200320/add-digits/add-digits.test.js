const solution = n =>
  String(n)
    .match(/[1-9]/g)
    .reduce((acc, v) => (acc += Number(v)), 0);

test("자릿수 더하기", () => {
  expect(solution(123)).toBe(6);
  expect(solution(987)).toBe(24);
  expect(solution(1)).toBe(1);
  expect(solution(100000000)).toBe(1);
});
