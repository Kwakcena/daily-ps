const commands = {
  Enter: "님이 들어왔습니다.",
  Leave: "님이 나갔습니다."
};

const solution = record => {
  const records = splitRecords(record);
  const userInformation = getUserInfo(records);
  return getChatRecord(records, userInformation);
};

const splitWith = seperator => str => str.split(seperator);

const splitRecords = records => records.map(splitWith(" "));

const getUserInfo = records =>
  records.reduce(
    (userInfo, [_, userId, nickname]) => ({
      ...userInfo,
      [userId]: nickname || userInfo[userId]
    }),
    {}
  );

const getChatRecord = (records, userInfo) =>
  records.reduce(
    (chatRecord, [command, userId]) =>
      command === "Change"
        ? chatRecord
        : [...chatRecord, `${userInfo[userId]}${commands[command]}`],
    []
  );

test("userInformation", () => {
  expect(
    getUserInfo([
      ["Enter", "uid1234", "Muzi"],
      ["Enter", "uid4567", "Prodo"],
      ["Leave", "uid1234"],
      ["Enter", "uid1234", "Prodo"],
      ["Change", "uid4567", "Ryan"]
    ])
  ).toStrictEqual({
    uid1234: "Prodo",
    uid4567: "Ryan"
  });
});

test("getChatRecord", () => {
  expect(
    getChatRecord(
      [
        ["Enter", "uid1234", "Muzi"],
        ["Enter", "uid4567", "Prodo"],
        ["Leave", "uid1234"],
        ["Enter", "uid1234", "Prodo"],
        ["Change", "uid4567", "Ryan"]
      ],
      {
        uid1234: "Prodo",
        uid4567: "Ryan"
      }
    )
  ).toEqual([
    "Prodo님이 들어왔습니다.",
    "Ryan님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다."
  ]);
});

test("get split chatting record", () => {
  expect(
    splitRecords([
      "Enter uid1234 Muzi",
      "Enter uid4567 Prodo",
      "Leave uid1234",
      "Enter uid1234 Prodo",
      "Change uid4567 Ryan"
    ])
  ).toEqual([
    ["Enter", "uid1234", "Muzi"],
    ["Enter", "uid4567", "Prodo"],
    ["Leave", "uid1234"],
    ["Enter", "uid1234", "Prodo"],
    ["Change", "uid4567", "Ryan"]
  ]);
});

test("solution", () => {
  expect(
    solution([
      "Enter uid1234 Muzi",
      "Enter uid4567 Prodo",
      "Leave uid1234",
      "Enter uid1234 Prodo",
      "Change uid4567 Ryan"
    ])
  ).toEqual([
    "Prodo님이 들어왔습니다.",
    "Ryan님이 들어왔습니다.",
    "Prodo님이 나갔습니다.",
    "Prodo님이 들어왔습니다."
  ]);
});
