const solution = (k, roomNumbers) => {
  const used = {};
  return roomNumbers.map((number) => findRoom(number, used));
};

function findRoom(room, used) {
  if (used[room] == undefined) {
    used[room] = room + 1;
    return room;
  }
  let next = findRoom(used[room], used);
  used[room] = next + 1;
  return next;
}

test("solution", () => {
  expect(solution(6, [1, 3, 1, 1])).toStrictEqual([1, 3, 2, 4]);
  expect(solution(10, [1, 3, 4, 1, 3, 1])).toStrictEqual([1, 3, 4, 2, 5, 6]);
});
