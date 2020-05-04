const solution = (n, losts, reserves) => {
  const students = initStudents(n, losts, reserves);
  for (let i = 0; i < n; i++) {
    processStudent(students, i);
  }
  return students.filter((x) => x >= 0).length;
};

const initStudents = (n, losts, reserves) =>
  Array(n)
    .fill(1)
    .map(
      (_, index) => reserves.includes(index + 1) - losts.includes(index + 1)
    );

const processStudent = (students, index) => {
  if (students[index] >= 0) {
    return students;
  }
  for (const targetIndex of [index - 1, index + 1]) {
    if (targetIndex < 0 || targetIndex >= students.length) {
      continue;
    }
    if (students[targetIndex] > 0) {
      students[targetIndex] -= 1;
      students[index] += 1;
      return students;
    }
  }
  return students;
};

test("옷 빌려오기", () => {
  expect(processStudent([1, -1, 1, -1, 1], 1)).toStrictEqual([0, 0, 1, -1, 1]);
  expect(processStudent([0, 0, 1, -1, 1], 2)).toStrictEqual([0, 0, 1, -1, 1]);
  expect(processStudent([0, 0, 1, -1, 1], 3)).toStrictEqual([0, 0, 0, 0, 1]);
  expect(processStudent([0, 0, 0, 0, 1], 4)).toStrictEqual([0, 0, 0, 0, 1]);
});
test("옷 보유 상태 만들기", () => {
  expect(initStudents(5, [2, 4], [1, 3, 5])).toStrictEqual([1, -1, 1, -1, 1]);
  expect(initStudents(5, [2, 4], [3])).toStrictEqual([0, -1, 1, -1, 0]);
  expect(initStudents(5, [3], [1])).toStrictEqual([1, 0, -1, 0, 0]);
});

test("solution", () => {
  expect(solution(9, [2, 4, 7, 8], [3, 6, 9])).toBe(8);
  expect(solution(5, [2, 4], [3, 5])).toBe(5);
  expect(solution(5, [2, 4], [3])).toBe(4);
  expect(solution(3, [3], [1])).toBe(2);
  expect(solution(5, [3, 4], [5])).toBe(4);
  expect(solution(5, [3, 4], [3])).toBe(4);
  expect(solution(5, [3, 4], [3, 4])).toBe(5);
  expect(solution(5, [3, 4], [3, 4])).toBe(5);
  expect(solution(5, [], [])).toBe(5);
  expect(solution(5, [1, 2, 3, 4, 5], [])).toBe(0);
  expect(solution(5, [1, 2], [4, 5])).toBe(3);
  expect(solution(5, [1, 2], [2, 3])).toBe(4);
});
