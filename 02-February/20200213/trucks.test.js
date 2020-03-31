const solution = (bridge_length, weight, truck_weights) => {
  const bridgeTrucks = Array(bridge_length).fill(0);
  let bridgeTruckWeights = 0;
  let second = 0;
  while (bridgeTruckWeights || truck_weights.length) {
    let truck = bridgeTrucks.shift();
    bridgeTruckWeights -= truck;

    let shiftTruck = 0;
    if (bridgeTruckWeights + truck_weights[0] <= weight) {
      shiftTruck = truck_weights.shift();
      bridgeTruckWeights += shiftTruck;
    }
    bridgeTrucks.push(shiftTruck);
    second += 1;
  }

  return second;
};

test("solution", () => {
  expect(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(
    110
  );
  expect(solution(100, 100, [10])).toBe(101);
  expect(solution(2, 10, [7, 4, 5, 6])).toBe(8);
});
