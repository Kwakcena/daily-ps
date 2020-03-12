const solution = s =>
  s
    .split(" ")
    .map(word =>
      word
        .split("")
        .map((character, index) =>
          index % 2 == 0 ? character.toUpperCase() : character.toLowerCase()
        )
        .join("")
    )
    .join(" ");

test("solution", () => {
  expect(solution("try hello world")).toBe("TrY HeLlO WoRlD");
  expect(solution("AaA AaAaA AaA")).toBe("AaA AaAaA AaA");
});
