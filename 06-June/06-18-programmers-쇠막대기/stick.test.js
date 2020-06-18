const solution = (arrangements) => {
  const stack = [];
  let [laser, total] = [0, 0];
  for(const arrangement of arrangements) {
    if(arrangement === ')') {
      if(laser) {
        total += 1;
      }
      else {
        total += stack.length - 1;
      }
      laser = 1;
      stack.pop();
    }
    else {
      laser = 0;
      stack.push(arrangement);
    }
  }
  return total;
}

test("solution", () => {
  expect(solution("()(((()())(())()))(())")).toBe(17);
  // expect(solution("()(((()())(())()))(())")).toBe(17);
})