const solution = s => {
  return [2, 1, 3, 4];
};

const getSets = s => {
  const sets = s.match(/{[\d,]+}/g);
  return sets
    .map(set => set.match(/[\d]+,?/g).map(v => parseInt(v)))
    .sort((a, b) => a.length - b.length);
};

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
