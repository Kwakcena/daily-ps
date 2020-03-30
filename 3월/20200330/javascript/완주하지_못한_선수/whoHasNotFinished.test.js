const solution = (participant, completion) => {
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (
      sortedParticipant[i] !== sortedCompletion[i] ||
      sortedCompletion == undefined
    )
      return sortedParticipant[i];
  }
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
