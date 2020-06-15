const solution = (priorities, location) => {
  let count = 0;
  priorities = change(priorities);
  while(priorities.length >= 1) {
    if(isMaxNumber(priorities, priorities[0][0])) {
      count += 1;
      if(priorities.shift()[1] === location) {
        break;
      }
    }
    else {
      priorities = shiftAndPush(priorities);
    }
  }
  return count;
}

const isMaxNumber = (array, findNumber) => 
  array.every(([value, _]) => value <= findNumber);


const shiftAndPush = (array) => [...array.slice(1), array[0]]


const change = (array) => 
  array.reduce((acc, value, index) => ([...acc, [value, index]]), [])


test("solution", () => {
  expect(solution([2, 1, 3, 2], 2)).toBe(1);
  expect(solution([1, 2, 3], 0)).toBe(3);
  expect(solution([1, 1, 9, 1, 1, 1], 0)).toBe(5);
  expect(solution([1, 1, 9, 1, 1, 1], 1)).toBe(6);
})

test("최초 location 과 현재 value가 짝 지어진 2차원 배열 만들기", () => {
  expect(change([2, 1, 3, 2])).toStrictEqual([
    [2, 0],
    [1, 1],
    [3, 2],
    [2, 3],
  ]);
})

test("자신보다 큰 값의 index 찾기", () => {
  expect(isMaxNumber([[1,0], [2,1], [3,2]], 1)).toBe(false)
  expect(isMaxNumber([[2,1], [3,2], [1,0]], 2)).toBe(false)
  expect(isMaxNumber([[3,2], [1,0], [2,1]], 3)).toBe(true)
  expect(isMaxNumber([[1,0], [2,1]], 1)).toBe(false)
  expect(isMaxNumber([[2,1], [1,0]], 2)).toBe(true)
  expect(isMaxNumber([[1,0]], 1)).toBe(true)
  expect(isMaxNumber([[2,0], [1,1], [3,2], [2,2]], 2)).toBe(false)
  expect(isMaxNumber([[1,1], [3,2], [2,2], [2,0]], 1)).toBe(false)
  expect(isMaxNumber([[3,2], [2,2], [2,0], [1,1]], 3)).toBe(true)
})

test("index를 찾았으면 shift 하고 맨 뒤에 넣기", () => {
  expect(shiftAndPush([[2,0], [1,1], [3,2], [2,3]])).toStrictEqual([[1,1], [3,2], [2,3], [2,0]])
  expect(shiftAndPush([[1,1], [3,2], [2,3], [2,0]])).toStrictEqual([[3,2], [2,3], [2,0], [1,1]])
  expect(shiftAndPush([[1,0], [1,1], [9,2], [1,3], [1,4], [1,5]])).toStrictEqual([[1,1], [9,2], [1,3], [1,4], [1,5], [1,0]])
})
