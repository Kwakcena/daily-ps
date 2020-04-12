const solution = (k, roomNumber) => {
  const used = {};
  return roomNumber.map((number) => {
    while (used[number]) {
      number += 1;
    }
    used[number] = 1;
    return number;
  });
};

test("solution", () => {
  expect(solution(10, [1, 3, 4, 1, 3, 4])).toStrictEqual([1, 3, 4, 2, 5, 6]);
});
