function origami(n) {
  return n === 1 ? [0] : [
    ...origami(n-1),
    0,
    ...origami(n-1).reverse().map((x) => 1-x)
  ]
}

const solution = (n) => origami(n);

test("solution", () => {
  expect(solution(1)).toStrictEqual([0])
  expect(solution(2)).toStrictEqual([0,0,1])
  expect(solution(3)).toStrictEqual([0,0,1,0,0,1,1]);
  expect(solution(4)).toStrictEqual([0,0,1,0,0,1,1,0,0,0,1,1,0,1,1]);
})