const solution = (participants, completions) => {
  participants = participants.sort();
  completions = completions.sort();
  return participants.find((it, index) => it !== completions[index]);
};

test("solution", () => {
  expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo");
  expect(
    solution(
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"]
    )
  ).toBe("vinko");
  expect(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
  ).toBe("mislav");
});
