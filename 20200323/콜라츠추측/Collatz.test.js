const solution = n => collatz(n, 0);

function collatz(n, cnt) {
  if (n == 1) return cnt;
  else if (cnt == 500) return -1;
  return n % 2 == 0
    ? collatz(parseInt(n / 2), cnt + 1)
    : collatz(n * 3 + 1, cnt + 1);
}

test("solution", () => {
  expect(solution(6)).toBe(8);
  expect(solution(16)).toBe(4);
  expect(solution(626331)).toBe(-1);
});
