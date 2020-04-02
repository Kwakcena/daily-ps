const solution = s => tupple(changeMatrix(getSets(s)));

const getSets = s => {
  const sets = s.match(/{[\d,]+}/g);
  return sets
    .map(set => set.match(/[\d]+,?/g).map(v => parseInt(v)))
    .sort((a, b) => a.length - b.length);
};

const changeMatrix = sets => sets.reduce((_, set) => _.concat(set), []);

const tupple = arr => [
  ...arr.reduce((set, value) => set.add(value), new Set())
];

test("solution", () => {
  expect(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")).toEqual([2, 1, 3, 4]);
});

test("집합 단위로 추출하기", () => {
  expect(getSets("{{20,111},{111}}")).toStrictEqual([[111], [20, 111]]);
  expect(getSets("{{1,2,3},{2,1},{1,2,4,3},{2}}")).toStrictEqual([
    [2],
    [2, 1],
    [1, 2, 3],
    [1, 2, 4, 3]
  ]);
  expect(getSets("{{123}}")).toStrictEqual([[123]]);
  expect(getSets("{{4,2,3},{3},{2,3,4,1},{2,3}}")).toStrictEqual([
    [3],
    [2, 3],
    [4, 2, 3],
    [2, 3, 4, 1]
  ]);
});

test("2차원 배열을 1차원 배열로 만들기", () => {
  expect(changeMatrix([[2], [2, 1], [1, 2, 3], [1, 2, 4, 3]])).toEqual([
    2,
    2,
    1,
    1,
    2,
    3,
    1,
    2,
    4,
    3
  ]);
});

test("tupple 만들기", () => {
  expect(tupple([2, 2, 1, 1, 2, 3, 1, 2, 4, 3])).toEqual([2, 1, 3, 4]);
});
