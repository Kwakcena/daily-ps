const solution = n => {
  let sum = 0;
  while (n) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;
};

test("자릿수 더하기", () => {
  expect(solution(123)).toBe(6);
  expect(solution(987)).toBe(24);
  expect(solution(1)).toBe(1);
  expect(solution(100000000)).toBe(1);
});
