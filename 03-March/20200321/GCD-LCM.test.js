const solution = (n, m) => {
  const gcd = getGCD(n, m);
  return [gcd, (n * m) / gcd];
};

function getGCD(n, m) {
  return !m ? n : getGCD(m, n % m);
}

test("최대공약수 구하기", () => {
  expect(getGCD(3, 12)).toBe(3);
  expect(getGCD(12, 3)).toBe(3);
  expect(getGCD(60, 48)).toBe(12);
});

test("solution", () => {
  expect(solution(3, 12)).toEqual([3, 12]);
});
