const solution = (progresses, speeds) => {
  return getNumberOfReleaseDates(getRemainProgresses(progresses, speeds));
};

const getRemainProgresses = (progresses, speeds) => {
  return progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
};

const getNumberOfReleaseDates = remainProgresses => {
  let max = remainProgresses[0];
  return Object.values(
    remainProgresses.reduce((obj, current) => {
      max < current ? (max = current) : max;
      obj[max] = ++obj[max] || 1;
      return obj;
    }, {})
  );
};

test("solution", () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
});

test("get remain progresses", () => {
  expect(getRemainProgresses([93, 30, 55], [1, 30, 5])).toEqual([7, 3, 9]);
});

test("get number of release dates", () => {
  expect(getNumberOfReleaseDates([7, 3, 9])).toEqual([2, 1]);
  expect(getNumberOfReleaseDates([7, 7, 7])).toEqual([3]);
  expect(getNumberOfReleaseDates([1, 3, 4])).toEqual([1, 1, 1]);
});
