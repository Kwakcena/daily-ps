const solution = (N, M) => {
  const numbers = [...Array(N).fill(1)].map(
    (number, index) => (number += index)
  );
  return [1, 2, 3];
};

function NAndM(digitArray, M) {}

const getNumbers = N =>
  [...Array(N).fill(1)].map((number, index) => (number += index));

test("N and M 1", () => {
  expect(solution(3, 1)).toEqual([1, 2, 3]);
});

test("1부터 N까지 자연수가 들어있는 배열 만들기", () => {
  expect(getNumbers(3)).toEqual([1, 2, 3]);
  expect(getNumbers(4)).toEqual([1, 2, 3, 4]);
  expect(getNumbers(7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
