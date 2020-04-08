const solution = (user_id, banned_id) => {
  return numberOfCases(
    getUsedIdObject(user_id),
    getBannedList(user_id, banned_id)
  );
};

const getBannedList = (users, bans) =>
  bans
    .map((ban) => new RegExp(`^${ban.replace(/\*/g, ".")}$`))
    .reduce((acc, ban) => {
      const possibleBanUsers = users.filter((user) => user.match(ban));
      return [...acc, possibleBanUsers];
    }, []);

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
