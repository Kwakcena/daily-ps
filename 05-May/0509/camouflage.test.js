const solution = (clothes) =>
  Object.values(
    clothes.reduce(
      (acc, clothe) => ((acc[clothe[1]] = (acc[clothe[1]] || 0) + 1), acc),
      {}
    )
  ).reduce((acc, it) => acc * (it + 1), 1) - 1;

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
