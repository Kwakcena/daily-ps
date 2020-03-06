const solution = n => sieveOfEratosthenes(n);

const sieveOfEratosthenes = n => {
  const primes = new Array(n + 1).fill(1);
  (primes[0] = 0), (primes[1] = 0);
  for (let i = 2; i <= n + 1; i++) {
    if (!primes[i]) continue;
    for (let j = i * 2; j <= n + 1; j += i) {
      primes[j] = 0;
    }
  }

  return primes.slice(2, n + 1).filter(v => v == 1).length;
};

test("solution", () => {
  expect(solution(10)).toBe(4);
});

test("에라토스테네스의 체", () => {
  expect(sieveOfEratosthenes(10)).toBe(4);
  expect(sieveOfEratosthenes(5)).toBe(3);
  expect(sieveOfEratosthenes(2)).toBe(1);
  expect(sieveOfEratosthenes(3)).toBe(2);
});
