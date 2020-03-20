const solution = n =>
  n
    ? [...Array(n).fill(1)].reduce((acc, val, idx) =>
        n % (idx + 1) == 0 ? (acc += idx + 1) : acc
      )
    : 0;

test("약수의 합 구하기", () => {
  expect(solution(12)).toBe(28);
  expect(solution(5)).toBe(6);
  expect(solution(0)).toBe(0);
});
