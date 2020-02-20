const solution = p => convertParentheses(p);

function convertParentheses(brackets) {
  if (isUpright(brackets)) return brackets;
  if (!brackets) return "";

  let bracketCount = { "(": 0, ")": 0 };
  let [upright, balanced] = "";

  for (let i = 0; i < brackets.length; i++) {
    bracketCount[brackets[i]] += 1;
    if (bracketCount["("] === bracketCount[")"]) {
      upright = brackets.substr(0, i + 1);
      balanced = brackets.substr(i + 1, brackets.lenght);
      if (isUpright(upright)) {
        return upright + convertParentheses(balanced);
      }
      return (
        "(" +
        convertParentheses(balanced) +
        ")" +
        reverseBracket(upright.substr(1, upright.length - 2))
      );
    }
  }
}

const isUpright = str => {
  const strArr = str.split("");
  let bracketCount = 0;
  for (let i in strArr) {
    if (strArr[i] === "(") {
      bracketCount += 1;
    } else if (strArr[i] === ")") {
      bracketCount -= 1;
    }
    if (bracketCount < 0) return false;
  }
  return bracketCount === 0;
};

const reverseBracket = str => {
  const reversed = str.split("");
  return reversed
    .map((bracket, i) => (reversed[i] = bracket == ")" ? "(" : ")"))
    .join("");
};

test("reverseBracket", () => {
  expect(reverseBracket("))))")).toBe("((((");
  expect(reverseBracket("(())")).toBe("))((");
  expect(reverseBracket("()()()")).toBe(")()()(");
  expect(reverseBracket("(()))(((()()((()")).toBe("))((())))()()))(");
});

test("isUpright", () => {
  expect(isUpright("()")).toBe(true);
  expect(isUpright(")(")).toBe(false);
});

test("convertParentheses", () => {
  expect(convertParentheses(")(")).toBe("()");
  expect(convertParentheses("")).toBe("");
  expect(convertParentheses("(()())()")).toBe("(()())()");
  expect(convertParentheses("()))((()")).toBe("()(())()");
});
