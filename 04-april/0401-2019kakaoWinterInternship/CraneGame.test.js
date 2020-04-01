const solution = (board, moves) => {
  const stack = [];
  const changeBoard = zip(...board);
  let cnt = 0;
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1;
    while (1) {
      const doll = changeBoard[move].shift();
      if (doll == undefined) break;
      if (doll > 0) {
        if (stack.length > 0 && stack[stack.length - 1] == doll) {
          stack.pop();
          cnt += 2;
        } else stack.push(doll);
        break;
      }
    }
  }
  return cnt;
};

const zip = (arr, ...arrs) => {
  return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
};

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
    zip(
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
