const solution = (d, budget) => {
  const answer = [];
  getCountersignature(d, 0, 0, budget, 0, answer);
  return Math.max(...answer);
};

function getCountersignature(arr, idx, sum, budget, cnt, answer) {
  if (sum == budget) {
    answer.push(cnt);
  }
  for (let i = idx; i < arr.length; i++) {
    getCountersignature(arr, i + 1, sum + arr[i], budget, cnt + 1, answer);
  }
}

test("solution", () => {
  expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
  expect(solution([2, 2, 3, 3], 10)).toBe(4);
});
