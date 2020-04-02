const solution = (board, moves) => {
  const pocket = [];
  board = updateBoard(board);
  return moves.reduce(
    (acc, move) => acc + pluckDoll(board[move - 1], pocket),
    0
  );
};

const pluckDoll = (row, pocket) => {
  const doll = row.shift();
  if (!doll) return 0;
  return doll == top(pocket) ? pocket.pop() && 2 : pocket.push(doll) && 0;
};

const top = stack => stack[stack.length - 1];

const updateBoard = board =>
  board.map((_, y) => board.map(row => row[y]).filter(val => val));

test("인형 뽑기 테스트", () => {
  expect(pluckDoll([4, 3], [4])).toBe(2);
  expect(pluckDoll([4, 3], [1])).toBe(0);
  expect(pluckDoll([4, 3], [1, 2, 4])).toBe(2);
  expect(pluckDoll([3, 2, 9], [1, 2, 3])).toBe(2);
});

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
    updateBoard([
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1]
    ])
  ).toEqual([
    [4, 3],
    [2, 2, 5],
    [1, 5, 4, 1],
    [4, 3],
    [3, 1, 2, 1]
  ]);
});
