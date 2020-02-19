const solution = record => {
  const splitRecords = getSplitRecords(record);
  const userInformation = getUserInfo(splitRecords);
  return getChatRecord(splitRecords, userInformation);
};

const getSplitRecords = records => {
  return records.reduce((chatRecord, record) => {
    chatRecord.push(record.split(" "));
    return chatRecord;
  }, []);
};

const getUserInfo = splitRecords => {
  return splitRecords.reduce((userInfo, record) => {
    userInfo[record[1]] = record[2] || userInfo[record[1]];
    return userInfo;
  }, {});
};

const getChatRecord = (splitRecords, userInfo) => {
  return splitRecords.reduce((chatRecord, splitRecord) => {
    const [command, userId] = splitRecord;
    if (command === "Change") {
      return chatRecord;
    }
    chatRecord.push(
      command === "Enter"
        ? `${userInfo[userId]}님이 들어왔습니다.`
        : `${userInfo[userId]}님이 나갔습니다.`
    );
    return chatRecord;
  }, []);
};

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
    getSplitRecords([
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
