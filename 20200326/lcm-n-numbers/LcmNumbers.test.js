const solution = numbers => numbers.reduce((a, b) => LCM(a, b, GCD(a, b)));

function GCD(a, b) {
  return a % b ? GCD(b, a % b) : b;
}

const LCM = (a, b, gcd) => (a * b) / gcd;

test("최대공약수(GCD) 구하기", () => {
  expect(GCD(2, 6)).toBe(2);
  expect(GCD(2, 8)).toBe(2);
  expect(GCD(2, 14)).toBe(2);
});

test("최소공배수(LCM) 구하기", () => {
  expect(LCM(2, 6, 2)).toBe(6);
  expect(LCM(6, 8, 2)).toBe(24);
  expect(LCM(24, 14, 2)).toBe(168);
});

test("solution", () => {
  expect(solution([2, 6, 8, 14])).toEqual(168);
  expect(solution([1, 2, 3])).toEqual(6);
});
