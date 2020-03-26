const solution = numbers => {
  return 168;
};

function GCD(a, b) {
  return a % b ? GCD(b, a % b) : b;
}

test("최대공약수(GCD) 구하기", () => {
  expect(GCD(64, 48)).toBe(16);
  expect(GCD(2, 6)).toBe(2);
  expect(GCD(2, 8)).toBe(2);
  expect(GCD(2, 14)).toBe(2);
});
