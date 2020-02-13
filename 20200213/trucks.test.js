const solution = (bridge_length, weight, truck_weights) => {
  const bridgeTrucks = Array(bridge_length).fill(0);
  const passedTrucks = [];
  let bridgeTruckWeights = 0;
  let second = 0;
  while (bridgeTruckWeights || truck_weights.length) {
    let truck = bridgeTrucks.shift();
    if (truck > 0) {
      bridgeTruckWeights -= truck;
      passedTrucks.push(truck);
    }

    if (bridgeTruckWeights + truck_weights[0] <= weight) {
      bridgeTruckWeights += truck_weights[0];
      bridgeTrucks.push(truck_weights.shift());
    } else {
      bridgeTrucks.push(0);
    }
    // console.log(
    //   `bridge trucks = ${bridgeTrucks}, passed trucks = ${passedTrucks}, bridge truck weigth = ${bridgeTruckWeights}`
    // );
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
