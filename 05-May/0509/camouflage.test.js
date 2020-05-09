const solution = (clothes) => combination(numberOfKinds(clothes));

const numberOfKinds = (clothes) =>
  Object.values(
    clothes.reduce(
      (acc, clothe) => ((acc[clothe[1]] = (acc[clothe[1]] || 0) + 1), acc),
      {}
    )
  );

const combination = (kinds) => kinds.reduce((acc, it) => acc * (it + 1), 1) - 1;

test("combination", () => {
  expect(combination([3, 2, 1])).toBe(23);
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
    numberOfKinds([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toStrictEqual([2, 1]);
});
