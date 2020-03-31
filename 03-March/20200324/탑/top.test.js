const solution = heights => {
  const stack = [];
  const answer = [];
  let index = 0;
  stack.push(heights[0]);
  answer.push(0);
  for (let i = 1; i < heights.length; i++) {
    if (stack[stack.length - 1] > heights[i]) {
      stack.push(heights[i]);
      index = i;
      answer.push(i);
    } else {
      while (stack[stack.length - 1] <= heights[i]) {
        stack.pop();
        if (index) index -= 1;
      }
      stack.push(heights[i]);
      if (stack.length == 1) answer.push(0);
      else {
        answer.push(index + 1);
        index += 1;
      }
    }
  }
  return answer;
};

test("solution", () => {
  expect(solution([6, 5, 4, 3, 2, 1])).toEqual([0, 1, 2, 3, 4, 5]);
  expect(solution([6, 9, 5, 7, 4])).toEqual([0, 0, 2, 2, 4]);
  expect(solution([3, 9, 9, 3, 5, 7, 2])).toEqual([0, 0, 0, 3, 3, 3, 6]);
});
