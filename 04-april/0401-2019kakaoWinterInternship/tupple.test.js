const solution = s => tupple(doubleArrToSingleArr(getSets(s)));

const getSets = s =>
  s
    .match(/{[\d,]+}/g)
    .map(set => set.match(/[\d]+,?/g).map(v => parseInt(v)))
    .sort((a, b) => a.length - b.length);

const doubleArrToSingleArr = sets =>
  sets.reduce((arr, set) => arr.concat(set), []);

const tupple = arr => [
  ...arr.reduce((set, value) => set.add(value), new Set())
];

const solution2 = s =>
  JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .reduce(
      (arr, v, n) => (n ? arr.concat(v.filter(f => !arr.includes(f))) : v),
      []
    );

test("solution2 다른 사람의 풀이", () => {
  expect(solution2("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toEqual([2, 1, 3, 4]);
  expect(solution2("{{1,2,3},{2,1},{1,2,4,3},{2}}")).toEqual([2, 1, 3, 4]);
  expect(solution2("{{20,111},{111}}")).toEqual([111, 20]);
  expect(solution2("{{123}}")).toEqual([123]);
  expect(solution2("{{4,2,3},{3},{2,3,4,1},{2,3}}")).toEqual([3, 2, 4, 1]);
});

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
  expect(doubleArrToSingleArr([[2], [2, 1], [1, 2, 3], [1, 2, 4, 3]])).toEqual([
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

const jsonParse = text => {};

test("JSON.parse 테스트", () => {
  expect(JSON.parse("[2, 3]")).toEqual([2, 3]);
  expect(JSON.parse('{"2" : 3}')).toEqual({ "2": 3 });
  expect(JSON.parse("[1,2,[3,4],5]")).toEqual([1, 2, [3, 4], 5]);
  expect(JSON.parse("[[1,2],[3,4],[5,6]]")).toEqual([
    [1, 2],
    [3, 4],
    [5, 6]
  ]);
});
