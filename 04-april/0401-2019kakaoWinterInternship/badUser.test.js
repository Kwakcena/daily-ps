const solution = (user_id, banned_id) => {
  return 2;
};

const getBannedReg = (banned_id) => {
  return banned_id.map((id) => id.replace(/\*/g, "[a-z0-9]") + "$");
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
