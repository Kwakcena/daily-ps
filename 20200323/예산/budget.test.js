const solution = (d, budget) => {
  let answer = 0;
  let len = d.length;
  let remain = budget;
  //[1,2,3,4,5]
  d.sort((a, b) => a - b);
  if (d[0] > budget) {
    return answer;
  } else {
    for (let i = 0; i < len; i++) {
      remain -= d[i];
      if (remain < 0) {
        answer = i;
        break;
      }
    }
    if (answer === 0) {
      answer = len;
    }
    return answer;
  }
};

test("solution", () => {
  expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
  expect(solution([2, 2, 3, 3], 10)).toBe(4);
});
