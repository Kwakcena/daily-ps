const solution = p => convertParentheses(p);

function convertParentheses(brackets) {
  if (isUpright(brackets)) {
    return brackets;
  }

  if (!brackets) {
    return "";
  }

  const [upright, balanced] = split(brackets);

  if (isUpright(upright)) {
    return upright + convertParentheses(balanced);
  }
  return `
    (
    ${convertParentheses(balanced)}
    )
    ${reverseBracket(upright.slice(1, -1))}
    `;
}

const split = brackets => {
  let count = 0;
  const i = [...brackets].findIndex(it => {
    count += it === "(" ? 1 : -1;
    return count === 0;
  });
  return [brackets.slice(0, i + 1), brackets.slice(i + 1)];
};

test("split", () => {
  expect(split("()(())")).toEqual(["()", "(())"]);
});

const isUpright = str => {
  let bracketCount = 0;
  return !str.split("").some(it => {
    bracketCount += it === "(" ? 1 : -1;
    if (bracketCount < 0) {
      return true;
    }
  });
};

const reverseBracket = str =>
  [...str].map(it => (it === ")" ? "(" : ")")).join("");

test("reverseBracket", () => {
  // expect(reverseBracket("))))")).toBe("((((");
  // expect(reverseBracket("(())")).toBe("))((");
  // expect(reverseBracket("()()()")).toBe(")()()(");
  // expect(reverseBracket("(()))(((()()((()")).toBe("))((())))()()))(");
});

test("isUpright", () => {
  // expect(isUpright("()")).toBe(true);
  // expect(isUpright("(((())))")).toBe(true);
  expect(isUpright("(()))")).toBe(false);
  // expect(isUpright(")(")).toBe(false);
});

test("convertParentheses", () => {
  // expect(convertParentheses(")(")).toBe("()");
  // expect(convertParentheses("")).toBe("");
  // expect(convertParentheses("(()())()")).toBe("(()())()");
  // expect(convertParentheses("()))((()")).toBe("()(())()");
});
