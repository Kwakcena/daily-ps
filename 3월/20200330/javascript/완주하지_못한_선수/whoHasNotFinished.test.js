const solution = (participant, completion) =>
  participant.filter(p => (completion.indexOf(p) !== -1 ? false : true));

test("solution", () => {
  expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toEqual(["leo"]);
  expect(
    solution(
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"]
    )
  ).toEqual(["vinko"]);
  expect(
    solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
  ).toEqual(["mislav"]);
});
