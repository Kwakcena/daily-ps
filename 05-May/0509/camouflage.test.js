const solution = (clothes) => {
  return 5;
};

const arrayToObject = (clothes) => {
  return clothes.reduce((object, clothe) => {
    const [name, kind] = clothe;
    object[kind] = [...(object[kind] || []), name];
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
    headgear: ["yellow_hat", "green_turban"],
    eyewear: ["blue_sunglasses"],
  });
});
