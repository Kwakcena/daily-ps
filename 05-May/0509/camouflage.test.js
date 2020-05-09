const solution = (clothes) => {
  const kinds = getNumberOfKinds(clothes);
  return kinds
    .map((_, index) => combination(kinds, kinds.length, index + 1))
    .reduce((acc, x) => acc + x);
};

const getNumberOfKinds = (clothes) =>
  Object.values(
    clothes.reduce(
      (acc, clothe) => ((acc[clothe[1]] = (acc[clothe[1]] || 0) + 1), acc),
      {}
    )
  );

function combination(source, n, r, final = [], value = 1, index = 0) {
  if (r == 0) {
    final.push(value);
  } else if (n == 0 || n < r) {
    return;
  } else {
    value *= source[index];
    combination(source, n - 1, r - 1, final, value, index + 1);
    value /= source[index];
    combination(source, n - 1, r, final, value, index + 1);
  }
  return final.reduce((acc, x) => acc + x);
}

test("combination", () => {
  expect(combination([1, 3, 2], 3, 1)).toBe(6); //[1, 3, 2]
  expect(combination([1, 3, 2], 3, 2)).toBe(11); //[3, 2, 6]
  expect(combination([1, 3, 2], 3, 3)).toBe(6); //[6]
});

test("solution", () => {
  expect(
    solution([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toBe(5);
  expect(
    solution([
      ["crow_mask", "face"],
      ["blue_sunglasses", "face"],
      ["smoky_makeup", "face"],
    ])
  ).toBe(3);
  expect(
    solution([
      ["crow_mask", "face"],
      ["blue_sunglasses", "face"],
      ["green_turban", "headgear"],
      ["yellow_hat", "headgear"],
      ["read_sunglasses", "eyewear"],
      ["smoky_makeup", "face"],
    ])
  ).toBe(23);
});

test("clothes를 객체로 바꾸기", () => {
  expect(
    getNumberOfKinds([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toStrictEqual([2, 1]);
});
