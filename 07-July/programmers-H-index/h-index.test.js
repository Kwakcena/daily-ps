const solution = (citations) => {
  const answer = citations.sort((a, b) => b - a).findIndex((x, i) => x <= i);
  return answer === -1 ? citations.length : answer;
}

test('solution', () => {
  expect(solution([10, 8, 5, 4, 3])).toBe(4);
  expect(solution([3, 0, 1, 6, 5])).toBe(3);
  expect(solution([25, 8, 5, 3, 3])).toBe(3);
})