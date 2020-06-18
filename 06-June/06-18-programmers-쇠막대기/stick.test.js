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

const solution2 = (arrangements) => {
  const stack = [];
  let total = 0;
  for(let i = 0; i < arrangements.length; i++) {
    if(arrangements[i] === '(') {
      stack.push(arrangements[i]);
    }
    else {
      stack.pop();
      if(arrangements[i-1] === ')') {
        total += 1;
      }
      else {
        total += stack.length;
      }
    }
  }

  return total;
}

test("solution2", () => {
  expect(solution2("()")).toBe(0);
  expect(solution2("(())")).toBe(2);
  expect(solution2("(()())")).toBe(3);
  expect(solution2("()(((()())(())()))(())")).toBe(17);

})

// test("solution", () => {
//   expect(solution("()(((()())(())()))(())")).toBe(17);
//   // expect(solution("()(((()())(())()))(())")).toBe(17);
// })