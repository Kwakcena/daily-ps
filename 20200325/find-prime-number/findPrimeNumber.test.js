const solution = numbers => {
  return 3;
};

function combination(numbersArray, number, checked, digit) {
  if (number.length == digit) {
    console.log(number);
    return;
  }
  let used = Array(numbersArray.length).fill(false);
  for (let i = 0; i < numbersArray.length; i++) {
    if (used[numbersArray[i]] || checked[i]) continue;

    number += numbersArray[i];
    checked[i] = true;
    used[numbersArray[i]] = true;

    combination(numbersArray, number, checked, digit);

    number = number.slice(0, -1);
    checked[i] = false;
  }
}

test("solution", () => {
  expect(solution("123")).toBe(3);
});

test("만들수 있는 숫자의 조합 구하기", () => {
  expect(
    combination(
      "123".split("").sort((a, b) => a - b),
      "",
      [...Array(3).fill(false)],
      3
    )
  ).toEqual();
});
