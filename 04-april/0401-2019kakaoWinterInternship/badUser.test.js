const solution = (user_id, banned_id) => {
  return 2;
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

test("solution", () => {
  expect(
    solution(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["fr*d*", "abc1**"]
    )
  ).toBe(2);
});

test("baaned_id 목록의 * 을 정규식으로 바꾸기", () => {
  expect(getBannedReg(["fr*d*", "abc1**"])).toStrictEqual([
    "fr[a-z0-9]d[a-z0-9]$",
    "abc1[a-z0-9][a-z0-9]$",
  ]);
});

test("바뀐 목록과 일치하는 응모자 아이디의 목록을 구한다.", () => {
  expect(
    getRestrictId(
      ["frodo", "fradi", "crodo", "abc123", "frodoc"],
      ["fr[a-z0-9]d[a-z0-9]$", "abc1[a-z0-9][a-z0-9]$"]
    )
  ).toStrictEqual();
});
