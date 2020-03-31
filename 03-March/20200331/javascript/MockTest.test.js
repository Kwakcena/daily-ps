const solution = answers => {
  const scores = [
    supoja(answers, [1, 2, 3, 4, 5]),
    supoja(answers, [2, 1, 2, 3, 2, 4, 2, 5]),
    supoja(answers, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5])
  ];
  const bestScore = Math.max(...scores);
  return scores.reduce(
    (_, score, index) => (score == bestScore ? _.concat([index + 1]) : _),
    []
  );
};

const supoja = (answers, supo) => {
  const len = supo.length;
  return answers.reduce((count, answer, index) => {
    return (count += supo[index % len] == answer ? 1 : 0);
  }, 0);
};

test("solution", () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
  expect(solution([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
});

test("수포자 1번이 몇개 맞췄는지 반환하는 함수", () => {
  expect(supoja([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(5);
  expect(supoja([5, 4, 3, 2, 1], [1, 2, 3, 4, 5])).toBe(1);
  expect(supoja([1, 2, 3, 3, 2, 5, 4, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(6);
});

test("수포자 2번이 몇개 맞췄는지 반환하는 함수", () => {
  expect(supoja([1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5])).toBe(0);
  expect(supoja([5, 4, 3, 2, 1], [2, 1, 2, 3, 2, 4, 2, 5])).toBe(0);
  expect(supoja([1, 2, 3, 3, 2, 5, 4, 3], [2, 1, 2, 3, 2, 4, 2, 5])).toBe(2);
});

test("수포자 3번이 몇개 맞췄는지 반환하는 함수", () => {
  expect(supoja([1, 2, 3, 4, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5])).toBe(0);
  expect(supoja([5, 4, 3, 2, 1], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5])).toBe(0);
  expect(supoja([1, 2, 3, 3, 2, 5, 4, 3], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5])).toBe(
    2
  );
});
