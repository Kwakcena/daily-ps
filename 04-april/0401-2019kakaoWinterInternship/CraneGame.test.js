const solution = (board, moves) => {
  const pocket = [];
  const field = updateBoard(...board);
  let numOfRemoved = 0;
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1;
    while (1) {
      const doll = field[move].shift();
      if (doll == undefined) break;
      if (doll > 0) {
        if (top(pocket) == doll) {
          pocket.pop();
          numOfRemoved += 2;
        } else pocket.push(doll);
        break;
      }
    }
  }
  return numOfRemoved;
};

const top = stack => (stack.length ? stack[stack.length - 1] : undefined);

const updateBoard = (arr, ...arrs) => {
  return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
};

test("pocket의 가장 위에 있는 값 얻어오기", () => {
  expect(top([1, 2, 3])).toBe(3);
  expect(top([1])).toBe(1);
  expect(top([])).toBe(undefined);
});

test("solution", () => {
  expect(
    solution(
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1]
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    )
  ).toBe(4);
});

test("col을 기준으로 값 바꾸기", () => {
  expect(
    updateBoard(
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1]
    )
  ).toEqual([
    [0, 0, 0, 4, 3],
    [0, 0, 2, 2, 5],
    [0, 1, 5, 4, 1],
    [0, 0, 0, 4, 3],
    [0, 3, 1, 2, 1]
  ]);
});
