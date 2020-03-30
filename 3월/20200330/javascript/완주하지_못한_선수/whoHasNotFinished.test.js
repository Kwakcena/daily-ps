const solution = (participant, completion) => {
  [...completion].forEach(c => {
    const index = participant.indexOf(c);
    if (index > -1) participant.splice(index, 1);
  });
  return participant[0];
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
