const solution = n => sieveOfEratosthenes(n);

const sieveOfEratosthenes = n => {
  const arr = new Array(n + 1).fill(1);
  (arr[0] = 0), (arr[1] = 0);
  for (let i = 2; i <= n + 1; i++) {
    if (!arr[i]) continue;
    for (let j = i * 2; j <= n + 1; j += i) {
      arr[j] = 0;
    }
  }

  return arr.slice(2, n + 1).filter(v => v == 1).length;
};

test("solution", () => {
  expect(solution(10)).toBe(4);
});

test("에라토스테네스의 체", () => {
  expect(sieveOfEratosthenes(10)).toBe(4);
  expect(sieveOfEratosthenes(5)).toBe(3);
  expect(sieveOfEratosthenes(2)).toBe(1);
  expect(sieveOfEratosthenes(3)).toBe(2);
  expect(sieveOfEratosthenes(1000000)).toBe(78498);
});
