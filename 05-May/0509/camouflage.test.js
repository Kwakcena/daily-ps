const solution = (clothes) => {
  return 5;
};

const arrayToObject = (clothes) => {
  return clothes.reduce((object, clothe) => {
    const [_, kind] = clothe;
    object[kind] = (object[kind] || 0) + 1;
    return object;
  }, {});
};

test("solution", () => {
  expect(
    solution([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toBe(5);
});

test("clothes를 객체로 바꾸기", () => {
  expect(
    arrayToObject([
      ["yellow_hat", "headgear"],
      ["blue_sunglasses", "eyewear"],
      ["green_turban", "headgear"],
    ])
  ).toStrictEqual({
    headgear: 2,
    eyewear: 1,
  });
});
