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

test("solution", () => {
  expect(solution(4)).toBe(5);
});

test("타일 개수 구하기", () => {
  expect(getTileCount(1, new Array(60001).fill(0))).toBe(1);
  expect(getTileCount(2, new Array(60001).fill(0))).toBe(2);
  expect(getTileCount(3, new Array(60001).fill(0))).toBe(3);
  expect(getTileCount(4, new Array(60001).fill(0))).toBe(5);
});
