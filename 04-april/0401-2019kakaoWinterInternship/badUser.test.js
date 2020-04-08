const solution = (user_id, banned_id) => {
  return numberOfCases(
    getUsedIdObject(user_id),
    getBannedList(user_id, banned_id)
  );
};

const isPossible = (user_id, banned_id) => {
  if (user_id.length != banned_id.length) return false;
  for (let i = 0; i < user_id.length; i++) {
    if (banned_id[i] != "*" && user_id[i] != banned_id[i]) return false;
  }
  return true;
};

const getBannedList = (user_id, banned_id) => {
  return banned_id.reduce((bannnedList, banned) => {
    return bannnedList.concat([
      user_id.reduce((userList, user) => {
        return isPossible(user, banned) ? [...userList, user] : userList;
      }, []),
    ]);
  }, []);
};

const getBannedReg = (banned_id) => {
  return banned_id.map((id) => `^${id.replace(/\*/g, "[a-z0-9]")}$`);
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

function numberOfCases(
  isUsed,
  banned_id,
  banneds = new Set(),
  index = 0,
  id = []
) {
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
      numberOfCases({ ...isUsed }, banned_id, banneds, i + 1, [...id]);
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
    "^fr[a-z0-9]d[a-z0-9]$",
    "^abc1[a-z0-9][a-z0-9]$",
  ]);
  expect(getBannedReg(["fr*d*", "*rodo", "******", "******"])).toStrictEqual([
    "^fr[a-z0-9]d[a-z0-9]$",
    "^[a-z0-9]rodo$",
    "^[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]$",
    "^[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]$",
  ]);
});

test("바뀐 목록과 일치하는 응모자 아이디의 목록을 구한다.", () => {
  expect(
    getRestrictId(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["^fr[a-z0-9]d[a-z0-9]$", "^abc1[a-z0-9][a-z0-9]$"]
    )
  ).toStrictEqual([["frodo", "fradi"], ["abc123"]]);
  expect(
    getRestrictId(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      [
        "^fr[a-z0-9]d[a-z0-9]$",
        "^[a-z0-9]rodo$",
        "^[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]$",
        "^[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]$",
      ]
    )
  ).toStrictEqual([
    ["frodo", "fradi"],
    ["frodo", "crodo"],
    ["abc123", "frodoc"],
    ["abc123", "frodoc"],
  ]);
  expect(
    getRestrictId(
      ["abcdef", "frodoc"],
      ["^[a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9][a-z0-9]$"]
    )
  ).toStrictEqual([["abcdef", "frodoc"]]);
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
      [
        ["frodo", "fradi"],
        ["frodo", "crodo"],
        ["abc123", "frodoc"],
        ["abc123", "frodoc"],
      ],
      new Set(),
      0,
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
      [["frodo", "fradi"], ["abc123"]],
      new Set(),
      0,
      []
    )
  ).toBe(2);
});

test("정규식 안쓰고 매칭 사용자 찾기", () => {
  expect(isPossible("frodo", "fr*d*")).toBe(true);
  expect(isPossible("frodo", "*****")).toBe(true);
  expect(isPossible("fradi", "c****")).toBe(false);
});

test("제재 아이디 구하기", () => {
  expect(
    getBannedList(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["fr*d*", "*rodo", "******", "******"]
    )
  ).toStrictEqual([
    ["frodo", "fradi"],
    ["frodo", "crodo"],
    ["abc123", "frodoc"],
    ["abc123", "frodoc"],
  ]);
});
