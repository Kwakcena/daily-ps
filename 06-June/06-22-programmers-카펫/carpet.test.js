const solution = (brown, yellow) =>
  aliquot(brown + yellow).filter(([row, col]) =>
    isPossible(brown, row, col)
  )[0];

const isPossible = (number, row, col) => col * 2 + (row * 2 - 4) === number;

const aliquot = (number) => {
  const array = [];
  for (let i = 3; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      array.push([number / i, i]);
    }
  }
  return array;
};

const solution2 = (brown, yellow) => {
  for (let number = 3; number <= Math.sqrt(brown + yellow); number++) {
    [row, col] = [(brown + yellow) / number, number];
    if ((brown + yellow) % number === 0) {
      if (isPossible(brown, row, col)) {
        return [row, col];
      }
    }
  }
};

test("solution", () => {
  expect(solution(8, 1)).toStrictEqual([3, 3]);
  expect(solution(10, 2)).toStrictEqual([4, 3]);
  expect(solution(24, 24)).toStrictEqual([8, 6]);
});

test("solution2", () => {
  expect(solution2(8, 1)).toStrictEqual([3, 3]);
  expect(solution2(10, 2)).toStrictEqual([4, 3]);
  expect(solution2(24, 24)).toStrictEqual([8, 6]);
});

test("약수의 짝을 구한다.", () => {
  expect(aliquot(48)).toStrictEqual([
    [16, 3],
    [12, 4],
    [8, 6],
  ]);
  expect(aliquot(12)).toStrictEqual([[4, 3]]);
  expect(aliquot(9)).toStrictEqual([[3, 3]]);
});

test("가능한 경우인지 판단하기", () => {
  expect(isPossible(24, 16, 3)).toBe(false);
  expect(isPossible(24, 12, 4)).toBe(false);
  expect(isPossible(24, 8, 6)).toBe(true);
  expect(isPossible(10, 6, 2)).toBe(false);
  expect(isPossible(10, 4, 3)).toBe(true);
  expect(isPossible(8, 9, 1)).toBe(false);
  expect(isPossible(8, 3, 3)).toBe(true);
});
