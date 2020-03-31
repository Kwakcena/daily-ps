const solution = (participant, completion) => {
  const participants = [...participant].sort();
  const completions = [...completion].sort();
  return participants.find((it, index) => it !== completions[index]);
};

test("solution", () => {
  expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toEqual("leo");
  expect(
    solution(
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"]
    )
  ).toEqual("vinko");
  expect(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
  ).toEqual("mislav");
});
