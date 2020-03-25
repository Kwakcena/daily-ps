const solution = (N, M) => {
  const numbers = getNumbers(N);
  const answer = [];
  return NAndM(numbers, M, [], answer, 0);
};

const checked = N => Array(N + 1).fill(false);

test("checked 배열 만들기", () => {
  expect(checked(3)).toEqual([false, false, false, false]);
});

function NAndM(digitArray, M, sequence, answer, checked) {
  if (sequence.length == M) {
    const copy = [...sequence];
    answer.push(copy);
    return;
  }
  for (let i = 0; i < digitArray.length; i++) {
    if (checked[digitArray[i]]) continue;

    sequence.push(digitArray[i]);
    checked[digitArray[i]] = true;

    NAndM(digitArray, M, sequence, answer, checked);

    sequence.pop();
    checked[digitArray[i]] = false;
  }

  return answer;
}

test("N개중 M개를 고른 수열 만들기", () => {
  expect(NAndM(getNumbers(3), 1, [], [], checked(3))).toEqual([[1], [2], [3]]);
  expect(NAndM(getNumbers(4), 2, [], [], checked(4))).toEqual([
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
    [4, 3]
  ]);
});

const getNumbers = N =>
  [...Array(N).fill(1)].map((number, index) => (number += index));

test("N and M 1", () => {
  expect(solution(3, 1)).toEqual([[1], [2], [3]]);
});

test("1부터 N까지 자연수가 들어있는 배열 만들기", () => {
  expect(getNumbers(3)).toEqual([1, 2, 3]);
  expect(getNumbers(4)).toEqual([1, 2, 3, 4]);
  expect(getNumbers(7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
