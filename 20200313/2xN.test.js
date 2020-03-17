const solution = n => {
  const tiles = new Array(60001).fill(0);
  return getTileCount(n, tiles);
};

function getTileCount(width, tiles) {
  if (width < 3) return width;
  else {
    if (!tiles[width])
      tiles[width] =
        (getTileCount(width - 1, tiles) + getTileCount(width - 2, tiles)) %
        1000000007;
    return tiles[width];
  }
}

const solution2 = n => {
  if (n <= 2) return n;
  let current,
    prev = 2,
    prevprev = 1;
  for (let i = 2; i < n; i++) {
    current = (prev + prevprev) % 1000000007;
    prevprev = prev;
    prev = current;
  }
  return current;
};

function solution3(n, prev, prevprev) {
  return n < 2
    ? n * prevprev
    : solution3(n - 1, (prev + prevprev) % 1000000007, prev);
}

test("solution", () => {
  expect(solution(4)).toBe(5);
  // expect(solution(60000)).toBe(5);
});

test("타일 개수 구하기", () => {
  expect(getTileCount(1, new Array(60001).fill(0))).toBe(1);
  expect(getTileCount(2, new Array(60001).fill(0))).toBe(2);
  expect(getTileCount(3, new Array(60001).fill(0))).toBe(3);
  expect(getTileCount(4, new Array(60001).fill(0))).toBe(5);
});

test("재귀 호출 없는 피보나치 수열 구하기", () => {
  expect(solution2(1)).toBe(1);
  expect(solution2(2)).toBe(2);
  expect(solution2(3)).toBe(3);
  expect(solution2(4)).toBe(5);
  expect(solution2(100)).toBe(782204094);
  expect(solution2(60000)).toBe(804299274);
});

test("꼬리 재귀를 이용한 풀이", () => {
  expect(solution3(1, 2, 1)).toBe(1);
  expect(solution3(2, 2, 1)).toBe(2);
  expect(solution3(3, 2, 1)).toBe(3);
  expect(solution3(4, 2, 1)).toBe(5);
});
