let answer = 0;

function dfs(numbers, target, count = 0, number = 0, index = 0) {
  if (count === numbers.length) {
    if (number === target) {
      answer += 1;
    }
    return;
  }

  for (let i = index; i < numbers.length; i += 1) {
    dfs(numbers, target, count + 1, number + numbers[i], i + 1);
    dfs(numbers, target, count + 1, number - numbers[i], i + 1);
  }
}

const solution = (numbers, target) => {
  dfs(numbers, target);
  return answer;
};

test('solution', () => {
  expect(solution([1, 1, 1, 1, 1], 3)).toBe(5);
});
