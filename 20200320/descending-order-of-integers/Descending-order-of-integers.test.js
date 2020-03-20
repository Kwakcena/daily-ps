const solution = n => descending(getDigitsArray(n));

const getDigitsArray = n =>
  String(n)
    .match(/[0-9]/g)
    .map(v => 0 | v);

const descending = digits => Number(digits.sort((a, b) => b - a).join(""));

test("정수 내림차순으로 배치하기", () => {
  expect(solution(118372)).toBe(873211);
});

test("n을 String으로 바꿔 각 자리를 원소로 갖는 배열 얻기", () => {
  expect(getDigitsArray(1234)).toEqual([1, 2, 3, 4]);
  expect(getDigitsArray(800000)).toEqual([8, 0, 0, 0, 0, 0]);
  expect(getDigitsArray(1)).toEqual([1]);
});

test("내림차순 정렬 후 하나의 정수로 합치기", () => {
  expect(descending([1, 2, 3, 4])).toBe(4321);
  expect(descending([8, 0, 0, 0, 0, 0])).toBe(800000);
});
