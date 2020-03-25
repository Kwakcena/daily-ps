const solution = numbers => {
  const EratosArray = Eratosthenes(Array(9999999).fill(1));
  const numberSet = new Set();

  for (let digit = 1; digit <= numbers.length; digit++) {
    combination(
      numbers.split(""),
      "",
      Array(numbers.length).fill(false),
      digit,
      numberSet
    );
  }

  return getPrimeCount(numberSet, EratosArray);
};

const getPrimeCount = (numberSet, Eratos) => {
  let cnt = 0;
  numberSet.forEach(number => (cnt += Eratos[number] ? 1 : 0));
  return cnt;
};

test("set에 있는 숫자가 소수인지 판단하여 갯수 반환하기", () => {
  expect(
    getPrimeCount(
      new Set([1, 2, 3, 12, 13, 21, 23, 31, 32, 123, 132, 213, 231, 312, 321]),
      Eratosthenes(Array(150).fill(1))
    )
  ).toBe(5);
});

function combination(numbersArray, number, checked, digit, numberSet) {
  if (number.length == digit) {
    numberSet.add(Number(number));
    return;
  }
  let used = Array(numbersArray.length).fill(false);
  for (let i = 0; i < numbersArray.length; i++) {
    if (used[numbersArray[i]] || checked[i]) continue;

    number += numbersArray[i];
    checked[i] = true;
    used[numbersArray[i]] = true;

    combination(numbersArray, number, checked, digit, numberSet);

    number = number.slice(0, -1);
    checked[i] = false;
  }
}

const Eratosthenes = EratosArray => {
  EratosArray[0] = 0;
  EratosArray[1] = 0;
  for (let i = 2; i < EratosArray.length; i++) {
    if (!EratosArray[i]) continue;
    EratosArray[i] = i;
    for (let j = i + i; j < EratosArray.length; j += i) {
      EratosArray[j] = 0;
    }
  }
  return EratosArray;
};

test("solution", () => {
  expect(solution("123")).toBe(5);
  expect(solution("17")).toBe(3);
  expect(solution("011")).toBe(2);
});

test("만들수 있는 숫자의 조합 구하기", () => {
  expect(
    combination(
      "123".split("").sort((a, b) => a - b),
      "",
      [...Array(3).fill(false)],
      3,
      new Set()
    )
  ).toEqual();
});

test("에라토스테네스의 체 만들기", () => {
  expect(Eratosthenes(Array(21).fill(1))).toEqual([
    0,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    0,
    0,
    11,
    0,
    13,
    0,
    0,
    0,
    17,
    0,
    19,
    0
  ]);
});
