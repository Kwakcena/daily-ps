const solution = (arr, divisor) => {
  const answer = divisible(arr, divisor);
  return answer.length ? answer : [-1];
};

const divisible = (arr, divisor) =>
  arr
    .reduce((answer, element) => {
      element % divisor == 0 ? answer.push(element) : answer;
      return answer;
    }, [])
    .sort((a, b) => a - b);

test("divisible", () => {
  expect(divisible([5, 9, 7, 10], 5)).toEqual([5, 10]);
  expect(divisible([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
  expect(divisible([3, 2, 6], 10)).toEqual([]);
});

test("solution", () => {
  expect(solution([3, 2, 6], 10)).toEqual([-1]);
});
