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

const solution2 = s =>
  s
    .toUpperCase()
    .replace(/(\w)(\w)/g, a => a[0].toUpperCase() + a[1].toLowerCase());

test("solution", () => {
  expect(solution("try hello world")).toBe("TrY HeLlO WoRlD");
  expect(solution("AaA AaAaA AaA")).toBe("AaA AaAaA AaA");
});

test("solution2", () => {
  // expect(solution2("AaA AaAaA AaA")).toBe("AaA AaAaA AaA");
  expect(solution2("try hello world")).toBe("TrY HeLlO WoRlD");
});
