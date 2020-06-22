function combination(M, answer, numbers, check, temp) {
  if (temp.length === M) {
    answer.push([...temp]);
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (check[i]) continue;

    check[i] = true;
    temp.push(numbers[i]);
    combination(M, answer, numbers, check, temp);
    temp.pop();
    check[i] = false;
  }
}

const solution = (N, M) => {
  const array = [];
  const numbers = Array(N)
    .fill(1)
    .map((_, i) => i + 1);
  const check = Array(N).fill(0);

  combination(M, array, numbers, check, []);
  return array;
};

test("solution", () => {
  expect(solution(4, 2)).toStrictEqual([
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 4],
    [3, 1],
    [3, 2],
    [3, 4],
    [4, 1],
    [4, 2],
    [4, 3],
  ]);
  expect(solution(3, 1)).toStrictEqual([[1], [2], [3]]);
  expect(solution(4, 4)).toStrictEqual([
    [1, 2, 3, 4],
    [1, 2, 4, 3],
    [1, 3, 2, 4],
    [1, 3, 4, 2],
    [1, 4, 2, 3],
    [1, 4, 3, 2],
    [2, 1, 3, 4],
    [2, 1, 4, 3],
    [2, 3, 1, 4],
    [2, 3, 4, 1],
    [2, 4, 1, 3],
    [2, 4, 3, 1],
    [3, 1, 2, 4],
    [3, 1, 4, 2],
    [3, 2, 1, 4],
    [3, 2, 4, 1],
    [3, 4, 1, 2],
    [3, 4, 2, 1],
    [4, 1, 2, 3],
    [4, 1, 3, 2],
    [4, 2, 1, 3],
    [4, 2, 3, 1],
    [4, 3, 1, 2],
    [4, 3, 2, 1],
  ]);
});
