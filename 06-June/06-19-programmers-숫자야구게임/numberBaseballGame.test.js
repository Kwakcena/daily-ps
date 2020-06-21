const solution = (baseball) => {
  let baseballList = getBaseballList();
  baseball.forEach(([ball, s, b]) => {
    baseballList = playGame(baseballList, ball, s, b);
  })
  return baseballList.length;
};

const getBaseballList = () => {
  return Array(900)
    .fill(0)
    .map((_, index) => index + 123 + "")
    .filter(isPossible);
};

const isPossible = (x) =>
  !x.split("").find((num) => num === "0") &&
  x[0] !== x[1] &&
  x[1] !== x[2] &&
  x[0] !== x[2];

  
const playGame = (list, ball, s, b) => {
  ball += "";
  return list.filter((number) => {
    let [strikeCount, ballCount] = [0, 0];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (ball[i] !== number[j]) continue;
        if (i === j) {
          strikeCount += 1;
        } else {
          ballCount += 1;
        }
      }
    }
    if (strikeCount === s && b === ballCount) return true;
    return false;
  });
};

test("solution", () => {
  expect(solution([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])).toBe(2);
})
  
test("게임 수행하기", () => {
  expect(
    playGame(["123", "124", "125", "126", "127", "128", "129", "132", "134", "135", "136", "137", "138", "139", "142", "143", "145", "146", "147", "148", "149", "152", "153", "154", "156", "157", "158", "159", "162", "163", "164", "165", "167", "168", "169", "172", "173", "174", "175", "176", "178", "179", "182", "183", "184", "185", "186", "187", "189", "192", "193", "194", "195", "196", "197", "198", "213", "214", "215", "216", "217", "218", "219", "231", "234", "235", "236", "237", "238", "239", "241", "243", "245", "246", "247", "248", "249", "251", "253", "254", "256", "257", "258", "259", "261", "263", "264", "265", "267", "268", "269", "271", "273", "274", "275", "276", "278", "279", "281", "283", "284", "285", "286", "287", "289", "291", "293", "294", "295", "296", "297", "298", "312", "314", "315", "316", "317", "318", "319", "321", "324", "325", "326", "327", "328", "329", "341", "342", "345", "346", "347", "348", "349", "351", "352", "354", "356", "357", "358", "359", "361", "362", "364", "365", "367", "368", "369", "371", "372", "374", "375", "376", "378", "379", "381", "382", "384", "385", "386", "387", "389", "391", "392", "394", "395", "396", "397", "398", "412", "413", "415", "416", "417", "418", "419", "421", "423", "425", "426", "427", "428", "429", "431", "432", "435", "436", "437", "438", "439", "451", "452", "453", "456", "457", "458", "459", "461", "462", "463", "465", "467", "468", "469", "471", "472", "473", "475", "476", "478", "479", "481", "482", "483", "485", "486", "487", "489", "491", "492", "493", "495", "496", "497", "498", "512", "513", "514", "516", "517", "518", "519", "521", "523", "524", "526", "527", "528", "529", "531", "532", "534", "536", "537", "538", "539", "541", "542", "543", "546", "547", "548", "549", "561", "562", "563", "564", "567", "568", "569", "571", "572", "573", "574", "576", "578", "579", "581", "582", "583", "584", "586", "587", "589", "591", "592", "593", "594", "596", "597", "598", "612", "613", "614", "615", "617", "618", "619", "621", "623", "624", "625", "627", "628", "629", "631", "632", "634", "635", "637", "638", "639", "641", "642", "643", "645", "647", "648", "649", "651", "652", "653", "654", "657", "658", "659", "671", "672", "673", "674", "675", "678", "679", "681", "682", "683", "684", "685", "687", "689", "691", "692", "693", "694", "695", "697", "698", "712", "713", "714", "715", "716", "718", "719", "721", "723", "724", "725", "726", "728", "729", "731", "732", "734", "735", "736", "738", "739", "741", "742", "743", "745", "746", "748", "749", "751", "752", "753", "754", "756", "758", "759", "761", "762", "763", "764", "765", "768", "769", "781", "782", "783", "784", "785", "786", "789", "791", "792", "793", "794", "795", "796", "798", "812", "813", "814", "815", "816", "817", "819", "821", "823", "824", "825", "826", "827", "829", "831", "832", "834", "835", "836", "837", "839", "841", "842", "843", "845", "846", "847", "849", "851", "852", "853", "854", "856", "857", "859", "861", "862", "863", "864", "865", "867", "869", "871", "872", "873", "874", "875", "876", "879", "891", "892", "893", "894", "895", "896", "897", "912", "913", "914", "915", "916", "917", "918", "921", "923", "924", "925", "926", "927", "928", "931", "932", "934", "935", "936", "937", "938", "941", "942", "943", "945", "946", "947", "948", "951", "952", "953", "954", "956", "957", "958", "961", "962", "963", "964", "965", "967", "968", "971", "972", "973", "974", "975", "976", "978", "981", "982", "983", "984", "985", "986", "987"],
    123, 1, 1)
  ).toStrictEqual(["134", "135", "136", "137", "138", "139", "142", "152", "162", "172", "182", "192", "243", "253", "263", "273", "283", "293", "324", "325", "326", "327", "328", "329", "413", "421", "513", "521", "613", "621", "713", "721", "813", "821", "913", "921"]);

  expect(playGame(["134", "135", "136", "137", "138", "139", "142", "152", "162", "172", "182", "192", "243", "253", "263", "273", "283", "293", "324", "325", "326", "327", "328", "329", "413", "421", "513", "521", "613", "621", "713", "721", "813", "821", "913", "921"],
  356, 1, 0)).toStrictEqual(["152", "324", "327", "328", "329"]);

  expect(playGame(["152", "324", "327", "328", "329"], 327, 2, 0)).toStrictEqual(["324", "328", "329"]);
  expect(playGame(["324", "328", "329"], 489, 0, 1)).toStrictEqual(["324", "328"]);
});
