const solution = (answers) => {
  return 1;
};

const getNumberOfAnswer = (answers, submit) => {
  return answers.filter((answer, i) => submit[i % submit.length] === answer)
    .length;
};

test("solution", () => {
  expect(solution([1, 2, 3, 4, 5])).toBe(1);
});

test("1번 수포자의 정답 개수 얻기", () => {
  expect(getNumberOfAnswer([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).toBe(5);
  expect(getNumberOfAnswer([1, 3, 2, 4, 2], [1, 2, 3, 4, 5])).toBe(2);
  expect(getNumberOfAnswer([1, 2, 3, 4, 5, 1, 2, 3], [1, 2, 3, 4, 5])).toBe(8);
});

test("2번 수포자의 정답 개수 얻기", () => {
  expect(getNumberOfAnswer([1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5])).toBe(0);
  expect(getNumberOfAnswer([1, 3, 2, 4, 2], [2, 1, 2, 3, 2, 4, 2, 5])).toBe(2);
});

test("3번 수포자의 정답 개수 얻기", () => {
  expect(
    getNumberOfAnswer([1, 2, 3, 4, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5])
  ).toBe(0);
  expect(
    getNumberOfAnswer([1, 3, 2, 4, 2], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5])
  ).toBe(2);
});
