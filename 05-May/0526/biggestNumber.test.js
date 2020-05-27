const solution = (numbers) => {
  const answer = numbers
    .sort((a, b) => (`${a}${b}` - `${b}${a}` > 0 ? -1 : 1))
    .join("");
  return answer[0] === "0" ? "0" : answer;
};
test("solution", () => {
  expect(solution([6, 10, 2])).toBe("6210");
  expect(solution([3, 30, 34, 5, 9])).toBe("9534330");
  expect(solution([9, 90, 99, 19, 91])).toBe("999919019");
  expect(solution([999, 99, 9, 9, 9])).toBe("99999999");
  expect(solution([10, 6, 10, 6])).toBe("661010");
  expect(solution([0, 1000])).toBe("10000");
  expect(solution([0, 99, 1000])).toBe("9910000");
  expect(solution([1, 2, 35, 4, 5])).toBe("543521");
  expect(solution([0, 0, 0, 0])).toBe("0");
});
