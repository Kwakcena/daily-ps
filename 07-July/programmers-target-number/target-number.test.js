const bfs = (numbers, target) => {
  const queue = [], answer = [];
  
  let len = numbers.length - 1;
  let front = 0, index = 1, current = numbers[0];

  while (len--) {
    let repeat = Math.pow(2, index) / 2;
    while (repeat--) {
      queue.push(...[current + numbers[index], current - numbers[index]]);
      if (!len) {
        answer.push(...[current + numbers[index], current - numbers[index]]);
      }
      current = queue[front++];
    }
    index += 1;
  }

  return answer.reduce((acc, value) => 
    Math.abs(value) === target ? acc + 1 : acc, 0
  );
}

const solution = (numbers, target) => bfs(numbers, target);

test("solution", () => {
  expect(solution([1,1,1,1,1], 3)).toBe(5);
})
