const solution = (bridgeLength, weight, truckWeights) => {
  const bridge = Array(bridgeLength).fill(0);
  let time = 0;
  let total = 0;

  for(let i = 0; total || truckWeights.length; i++) {
    let goHomeTruck = bridge.shift();
    if(goHomeTruck) {
      total -= goHomeTruck;
    }

    if(total + truckWeights[0] <= weight) {
      total += truckWeights[0];
      bridge.push(truckWeights.shift());
    }
    else {
      bridge.push(0);
      i--;
    }
    time++;
  }  
  return time;
}

test('solution', () => {
  expect(solution(100, 100, [10,10,10,10,10,10,10,10,10,10])).toBe(110);
  expect(solution(100, 100,	[10])).toBe(101);
  expect(solution(2, 10, [7,4,5,6])).toBe(8);
})
