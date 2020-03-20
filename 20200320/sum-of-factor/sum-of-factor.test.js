const solution = n => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  return sum;
};

test("약수의 합 구하기", () => {
  expect(solution(12)).toBe(28);
  expect(solution(5)).toBe(6);
  expect(solution(0)).toBe(0);
});
