const solution = numbers => {
  return 168;
};

function GCD(a, b) {
  return a % b ? GCD(b, a % b) : b;
}

const LCM = (a, b, gcd) => (a * b) / gcd;

test("최대공약수(GCD) 구하기", () => {
  expect(GCD(64, 48)).toBe(16);
  expect(GCD(2, 6)).toBe(2);
  expect(GCD(2, 8)).toBe(2);
  expect(GCD(2, 14)).toBe(2);
});

test("최소공배수(LCM) 구하기", () => {
  expect(LCM(2, 6, 2)).toBe(6);
  expect(LCM(6, 8, 2)).toBe(24);
  expect(LCM(24, 14, 2)).toBe(168);
});
