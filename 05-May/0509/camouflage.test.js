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

function combination(source, final, arr, n, r, index) {
  if (r == 0) {
    final.push(arr);
  } else if (n == 0 || n < r) {
    return;
  } else {
    arr.push(source[index]);
    combination(source, final, [...arr], n - 1, r - 1, index + 1);
    arr.pop();
    combination(source, final, [...arr], n - 1, r, index + 1);
  }
  return final;
}

test("combination", () => {
  expect(combination([1, 2, 3, 4, 5], [], [], 3, 2, 0)).toStrictEqual[
    ([1, 2], [1, 3], [2, 3])
  ];
  expect(combination([1, 3, 2], [], [], 3, 1, 0)).toStrictEqual[
    ([1], [3], [2])
  ];
  expect(combination([1, 3, 2], [], [], 3, 2, 0)).toStrictEqual[
    ([1, 3], [1, 2], [3, 2])
  ];
  expect(combination([1, 3, 2], [], [], 3, 3, 0)).toStrictEqual[[1, 3, 2]];
});

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
