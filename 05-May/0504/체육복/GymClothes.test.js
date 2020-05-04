const solution = (n, losts, reserves) => {
  const clothes = Array(n).fill(1);
  reserves.map((reserve) => (clothes[reserve - 1] += 1));
  losts.map((lost) => (clothes[lost - 1] -= 1));

  for (let i = 0; i < clothes.length; i++) {
    if (clothes[i] == 2) {
      if (clothes[i + 1] == 0) {
        clothes[i] -= 1;
        clothes[i + 1] += 1;
      } else if (clothes[i - 1] == 0) {
        clothes[i] -= 1;
        clothes[i - 1] += 1;
      }
    }
  }

  return clothes.filter((x) => x >= 1).length;
};

test("solution", () => {
  expect(solution(9, [2, 4, 7, 8], [3, 6, 9])).toBe(8);
  expect(solution(5, [2, 4], [3, 5])).toBe(5);
  expect(solution(5, [2, 4], [3])).toBe(4);
  expect(solution(3, [3], [1])).toBe(2);
  expect(solution(5, [3, 4], [5])).toBe(4);
  expect(solution(5, [3, 4], [3])).toBe(4);
  expect(solution(5, [3, 4], [3, 4])).toBe(5);
  expect(solution(5, [3, 4], [3, 4])).toBe(5);
  expect(solution(5, [], [])).toBe(5);
  expect(solution(5, [1, 2, 3, 4, 5], [])).toBe(0);
  expect(solution(5, [1, 2], [4, 5])).toBe(3);
  expect(solution(5, [1, 2], [2, 3])).toBe(4);
});
