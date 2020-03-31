const solution = (N, M) => {
  const numbers = getNumbers(N);
  const answer = [];
  return NAndM(numbers, M, [], answer, 0);
};

const getNumbers = N =>
  [...Array(N).fill(1)].map((number, index) => (number += index));

const checked = N => Array(N + 1).fill(false);

function NAndM(digitArray, M, sequence, answer, checked) {
  if (sequence.length == M) {
    const copy = [...sequence];
    answer.push(copy);
    return;
  }
  let used = Array(digitArray.length).fill(false);
  for (let i = 0; i < digitArray.length; i++) {
    if (used[digitArray[i]] || checked[i]) continue;

    sequence.push(digitArray[i]);
    used[digitArray[i]] = true;
    checked[i] = true;

    NAndM(digitArray, M, sequence, answer, checked);

    sequence.pop();
    checked[i] = false;
  }

  return answer;
}

test("solution", () => {
  expect(solution(3, 1)).toEqual([[1], [2], [3]]);
  // expect(solution(4, 2)).toEqual([[1], [2], [3]]);
});

test("NAndM9", () => {
  expect(NAndM([1, 7, 9, 9], 2, [], [], checked(4))).toEqual();
});
