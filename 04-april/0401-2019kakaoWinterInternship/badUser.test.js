const solution = (user_id, banned_id) => {
  return numberOfCases(
    getUsedIdObject(user_id),
    new Set(),
    0,
    getRestrictId(user_id, getBannedReg(banned_id)),
    []
  );
};

const getBannedReg = (banned_id) => {
  return banned_id.map((id) => id.replace(/\*/g, "[a-z0-9]") + "$");
};

const getRestrictId = (user_id, banned_id) => {
  return banned_id.map((id) =>
    user_id.reduce((banneds, user) => {
      const matchUser = user.match(id);
      return matchUser ? banneds.concat(matchUser) : banneds;
    }, [])
  );
};

const getUsedIdObject = (user_id) => {
  return user_id.reduce((obj, id) => {
    obj[id] = obj[id] || false;
    return obj;
  }, {});
};

function numberOfCases(isUsed, banneds, index, banned_id, id) {
  if (id.length == banned_id.length) {
    banneds.add(id.sort().join(" "));
    return;
  }
  for (let i = index; i < banned_id.length; i++) {
    for (let j = 0; j < banned_id[i].length; j++) {
      const banned = banned_id[i][j];
      if (isUsed[banned]) continue;
      id.push(banned);
      isUsed[banned] = true;
      numberOfCases({ ...isUsed }, banneds, i + 1, banned_id, [...id]);
      isUsed[banned] = false;
      id.pop();
    }
  }

  return [...banneds].length;
}

test("solution", () => {
  expect(
    solution(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["fr*d*", "abc1**"]
    )
  ).toBe(2);
  expect(
    solution(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["fr*d*", "*rodo", "******", "******"]
    )
  ).toBe(3);
});

test("baaned_id 목록의 * 을 정규식으로 바꾸기", () => {
  expect(getBannedReg(["fr*d*", "abc1**"])).toStrictEqual([
    "fr[a-z0-9]d[a-z0-9]$",
    "abc1[a-z0-9][a-z0-9]$",
  ]);
  expect(getBannedReg(["fr*d*", "*rodo", "******", "******"])).toStrictEqual([
    "fr[a-z0-9]d[a-z0-9]$",
    "[a-z0-9]rodo$",
    "[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]$",
    "[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]$",
  ]);
});

test("바뀐 목록과 일치하는 응모자 아이디의 목록을 구한다.", () => {
  expect(
    getRestrictId(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["fr[a-z0-9]d[a-z0-9]$", "abc1[a-z0-9][a-z0-9]$"]
    )
  ).toStrictEqual([["frodo", "fradi"], ["abc123"]]);
  expect(
    getRestrictId(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      [
        "fr[a-z0-9]d[a-z0-9]$",
        "[a-z0-9]rodo$",
        "[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]$",
        "[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]$",
      ]
    )
  ).toStrictEqual([
    ["frodo", "fradi"],
    ["frodo", "crodo"],
    ["abc123", "frodoc"],
    ["abc123", "frodoc"],
  ]);
});

test("사용 횟수 객체 구하기", () => {
  expect(
    getUsedIdObject(["frodo", "fradi", "crodo", "abc123", "frodoc"])
  ).toStrictEqual({
    abc123: false,
    crodo: false,
    fradi: false,
    frodo: false,
    frodoc: false,
  });
});

test("재귀를 이용해서 경우의 수를 구한다", () => {
  expect(
    numberOfCases(
      {
        abc123: false,
        crodo: false,
        fradi: false,
        frodo: false,
        frodoc: false,
      },
      new Set(),
      0,
      [
        ["frodo", "fradi"],
        ["frodo", "crodo"],
        ["abc123", "frodoc"],
        ["abc123", "frodoc"],
      ],
      []
    )
  ).toBe(3);
  expect(
    numberOfCases(
      {
        abc123: false,
        crodo: false,
        fradi: false,
        frodo: false,
        frodoc: false,
      },
      new Set(),
      0,
      [["frodo", "fradi"], ["abc123"]],
      []
    )
  ).toBe(2);
});
