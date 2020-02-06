const solution = (progresses, speeds) => {
  const deadline = getDeadline(progresses, speeds);
  return deuplication(updateDeadline(deadline));
};

const getDeadline = (progresses, speeds) => {
  return progresses.map((x, i) => Math.ceil((100 - x) / speeds[i]));
};

const updateDeadline = deadline => {
  return deadline.reduce((array, current, index) => {
    if (index !== 0)
      array.push(array[index - 1] < current ? current : array[index - 1]);
    else array.push(current);

    return array;
  }, []);
};

const deuplication = updateDeadline => {
  return Object.values(
    updateDeadline.reduce((obj, current, index) => {
      obj[current] = ++obj[current] || 1;
      return obj;
    }, {})
  );
};

test("solution", () => {
  expect(solution([93, 30, 55], [1, 30, 5])).toEqual([2, 1]);
});

test("get deadline", () => {
  expect(getDeadline([93, 30, 55], [1, 30, 5])).toEqual([7, 3, 9]);
});

test("updateDeadline", () => {
  expect(updateDeadline([7, 3, 9])).toEqual([7, 7, 9]);
  expect(updateDeadline([7, 3, 1])).toEqual([7, 7, 7]);
  expect(updateDeadline([1, 3, 4])).toEqual([1, 3, 4]);
  expect(updateDeadline([1, 3, 2])).toEqual([1, 3, 3]);
  expect(updateDeadline([1, 9, 8, 7, 6, 10])).toEqual([1, 9, 9, 9, 9, 10]);
});

test("중복 제거", () => {
  expect(deuplication([7, 7, 9])).toEqual([2, 1]);
  expect(deuplication([7, 7, 7])).toEqual([3]);
  expect(deuplication([1, 3, 4])).toEqual([1, 1, 1]);
});
