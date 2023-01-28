const _0x296265 = (function () {
    let _0x53de88 = true;
    return function (_0x17c671, _0x51c958) {
      const _0x215815 = _0x53de88
        ? function () {
            if (_0x51c958) {
              const _0xce7645 = _0x51c958.apply(_0x17c671, arguments);
              return (_0x51c958 = null), _0xce7645;
            }
          }
        : function () {};
      return (_0x53de88 = false), _0x215815;
    };
  })(),
  _0x1ae660 = _0x296265(this, function () {
    return _0x1ae660
      .toString()
      .search("(((.+)+)+)+$")
      .toString()
      .constructor(_0x1ae660)
      .search("(((.+)+)+)+$");
  });
_0x1ae660();
const {
    BufferJSON,
    WA_DEFAULT_EPHEMERAL,
    generateWAMessageFromContent,
    proto,
    generateWAMessageContent,
    generateWAMessage,
    prepareWAMessageMedia,
    areJidsSameUser,
    getContentType,
  } = require("@adiwajshing/baileys"),
  fs = require("fs"),
  fetch = (..._0x2215e7) =>
    import("node-fetch").then(({ default: _0x4088f2 }) =>
      _0x4088f2(..._0x2215e7)
    ),
  translate = require("@vitalets/google-translate-api"),
  util = require("util"),
  chalk = require("chalk"),
  { exec, spawn, execSync } = require("child_process"),
  axios = require("axios"),
  path = require("path"),
  os = require("os"),
  toMS = require("ms"),
  ms = require("parse-ms"),
  nou = require("node-os-utils"),
  kotz = require("kotz-api"),
  gtts = require("node-gtts"),
  bochil = require("@bochilteam/scraper"),
  hxz = require("hxz-api"),
  ra = require("ra-api");
const FormData = require("form-data"),
  moment = require("moment-timezone"),
  { JSDOM } = require("jsdom"),
  speed = require("performance-now"),
  { performance } = require("perf_hooks"),
  { sizeFormatter } = require("human-readable"),
  _0x3ba752 = {};
_0x3ba752.std = "JEDEC";
_0x3ba752.decimalPlaces = 2;
_0x3ba752.keepTrailingZeroes = false;
_0x3ba752.render = (_0xf45980, _0x4a7880) => _0xf45980 + " " + _0x4a7880 + "B";
let format = sizeFormatter(_0x3ba752);
const _prem = require("../lib/premium"),
  _sewa = require("../lib/sewa"),
  {
    isSetWelcome,
    addSetWelcome,
    changeSetWelcome,
    removeSetWelcome,
  } = require("../lib/setwelcome"),
  {
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
  } = require("../lib/setleft"),
  {
    getLimit,
    isLimit,
    limitAdd,
    giveLimit,
    addBalance,
    kurangBalance,
    getBalance,
    isGame,
    gameAdd,
    givegame,
    cekGLimit,
  } = require("../lib/limit"),
  {
    addResponList,
    delResponList,
    isAlreadyResponList,
    isAlreadyResponListGroup,
    sendResponList,
    updateResponList,
    getDataResponList,
  } = require("../lib/respon-list"),
  { addRespons, checkRespons, deleteRespons } = require("../lib/respon"),
  {
    isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
  } = require("../lib/setproses"),
  {
    isSetDone,
    addSetDone,
    removeSetDone,
    changeSetDone,
    getTextSetDone,
  } = require("../lib/setdone"),
  {
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
  } = require("../lib/setopen"),
  {
    isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
  } = require("../lib/setclose"),
  { casinoSave, setCasino, deleteCasino } = require("../lib/casino"),
  msgFilter = require("../lib/antispam"),
  {
    generateProfilePicture,
    removeEmojis,
    smsg,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    sleep,
    clockString,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    parseMention,
    getRandom,
    getGroupAdmins,
  } = require("../lib/myfunc"),
  { yta, ytv } = require("../lib/y2mate"),
  { goLens } = require("../lib/googlens"),
  { topUp } = require("../lib/duniagames"),
  { TelegraPh } = require("../lib/uploader");
const { pinterest } = require("../lib/scraper"),
  { color, bgcolor } = require("../lib/color"),
  { getTextSetWelcome } = require("../lib/setwelcome"),
  { getTextSetLeft } = require("../lib/setleft"),
  afk = require("../lib/afk");
let setiker = JSON.parse(fs.readFileSync("./database/stik.json"));
let audionye = JSON.parse(fs.readFileSync("./database/vn.json")),
  imagenye = JSON.parse(fs.readFileSync("./database/image.json")),
  videonye = JSON.parse(fs.readFileSync("./database/video.json")),
  set_welcome_db = JSON.parse(fs.readFileSync("./database/set_welcome.json")),
  set_left_db = JSON.parse(fs.readFileSync("./database/set_left.json")),
  set_proses = JSON.parse(fs.readFileSync("./database/set_proses.json")),
  set_done = JSON.parse(fs.readFileSync("./database/set_done.json")),
  set_open = JSON.parse(fs.readFileSync("./database/set_open.json")),
  set_close = JSON.parse(fs.readFileSync("./database/set_close.json")),
  _afk = JSON.parse(fs.readFileSync("./database/afk.json"));
let db_respon_list = JSON.parse(
    fs.readFileSync("./database/list-message.json")
  ),
  sewa = JSON.parse(fs.readFileSync("./database/sewa.json")),
  opengc = JSON.parse(fs.readFileSync("./database/opengc.json")),
  _nsfw = JSON.parse(fs.readFileSync("./database/nsfw.json")),
  user = JSON.parse(fs.readFileSync("./database/user.json")),
  mess = JSON.parse(fs.readFileSync("./command/mess.json")),
  premium = JSON.parse(fs.readFileSync("./database/premium.json")),
  balance = JSON.parse(fs.readFileSync("./database/balance.json")),
  limit = JSON.parse(fs.readFileSync("./database/limit.json")),
  glimit = JSON.parse(fs.readFileSync("./database/glimit.json")),
  antilink = JSON.parse(fs.readFileSync("./database/antilink.json")),
  antiwame = JSON.parse(fs.readFileSync("./database/antiwame.json")),
  listCmd = JSON.parse(fs.readFileSync("./database/listcmd.json")),
  _cmd = JSON.parse(fs.readFileSync("./database/command.json")),
  _cmdUser = JSON.parse(fs.readFileSync("./database/commandUser.json")),
  modsNumber = JSON.parse(fs.readFileSync("./database/modsNumber.json")),
  responDB = JSON.parse(fs.readFileSync("./database/respon.json")),
  listStore = JSON.parse(fs.readFileSync("./database/list-message.json")),
  _limit = JSON.parse(fs.readFileSync("./database/user/limit.json")),
  _buruan = JSON.parse(fs.readFileSync("./database/user/hasil_buruan.json")),
  _darahOrg = JSON.parse(fs.readFileSync("./database/user/darah.json"));
const _petualang = JSON.parse(
    fs.readFileSync("./database/user/inventory.json")
  ),
  {
    addInventoriDarah,
    cekDuluJoinAdaApaKagaDiJson,
    addDarah,
    kurangDarah,
    getDarah,
  } = require("../database/user/darah.js"),
  { cekInventoryAdaAtauGak } = require("../database/user/alat_tukar.js"),
  {
    addInventoriMonay,
    cekDuluJoinAdaApaKagaMonaynyaDiJson,
    addMonay,
    kurangMonay,
    getMonay,
  } = require("../database/user/monay.js"),
  {
    addInventoriLimit,
    cekDuluJoinAdaApaKagaLimitnyaDiJson,
    addLimit,
    kurangLimit,
  } = require("../database/user/limit.js"),
  {
    cekDuluHasilBuruanNya,
    addInventoriBuruan,
    addAyam,
    addKelinci,
    addDomba,
    addSapi,
    addGajah,
    kurangIkan,
    kurangAyam,
    kurangKelinci,
    kurangDomba,
    kurangSapi,
    kurangGajah,
    getIkan,
    getAyam,
    getKelinci,
    getDomba,
    getSapi,
    getGajah,
  } = require("../database/user/buruan.js"),
  {
    getLevelingXp,
    getLevelingLevel,
    getLevelingId,
    addLevelingXp,
    addLevelingLevel,
    addLevelingId,
    addATM,
    addKoinUser,
    checkATMuser,
    addIkan,
    getMancingIkan,
    getMancingId,
    addMancingId,
    jualIkan,
    addPlanet,
    getBertualangPlanet,
    getPlaneId,
    addPlaneId,
    jualbahankimia,
    addCoal,
    getMiningcoal,
    getMiningId,
    addMiningId,
    jualcoal,
    addStone,
    getMiningstone,
    getBatuId,
    addBatuId,
    jualstone,
    addOre,
    getMiningore,
    getOreId,
    addOreId,
    jualore,
    addIngot,
    getMiningingot,
    getIngotId,
    addIngotId,
    jualingot,
    addKayu,
    getNebangKayu,
    getNebangId,
    addNebangId,
    jualKayu,
    checkPetualangUser,
    addInventori,
    sellBesi,
    addDm,
    sellDm,
    getDm,
    sellEmas,
    addFish,
    sellFish,
    getFish,
    addBesi,
    addEmas,
    addEmerald,
    addUmpan,
    addPotion,
    kurangBesi,
    kurangEmas,
    kurangEmerald,
    kurangUmpan,
    kurangPotion,
    getBesi,
    getEmas,
    getEmerald,
    getUmpan,
    getPotion,
  } = require("../database/user/rpg.js");
let DarahAwal = 100;
const ikan = ["\uD83D\uDC1F", "\uD83D\uDC20", "\uD83D\uDC21"],
  enter = "\n";
let tictactoe = [],
  tebakgambar = [],
  kuis = [],
  tebaklagu = [],
  family100 = [];
setInterval(function () {
  var _0x3e3cf5 = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Jakarta",
    }),
    _0x29aed2 = _0x3e3cf5.split(":")[0] < 10 ? "0" + _0x3e3cf5 : _0x3e3cf5;
  if (_0x29aed2 === "12:00:00 AM") {
    limit = [];
    fs.writeFileSync("./database/limit.json", JSON.stringify(limit));
    glimit = [];
    fs.writeFileSync("./database/glimit.json", JSON.stringify(glimit));
    console.log("Limit Sudah Di Reset!");
  }
}, 1000);
async function checkBandwidth() {
  let _0x53ed5f = 0;
  let _0x3c1d3e = 0;
  for (let _0x34af55 of await require("node-os-utils").netstat.stats()) {
    (_0x53ed5f += parseInt(_0x34af55.inputBytes)),
      (_0x3c1d3e += parseInt(_0x34af55.outputBytes));
  }
  return {
    download: format(_0x53ed5f),
    upload: format(_0x3c1d3e),
  };
}
moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = haruka = async (
  hisoka,
  bot,
  _0x39fd85,
  _0x17324d,
  ownerBio,
  _0x39cc3f,
  _0x44157a,
  _0x3fcc3c,
  _0x5f33c3,
  _0x83a516,
  _0x247224
) => {
  try {
    var body =
        bot.mtype === "conversation"
          ? bot.message.conversation
          : bot.mtype == "imageMessage"
          ? bot.message.imageMessage.caption
          : bot.mtype == "videoMessage"
          ? bot.message.videoMessage.caption
          : bot.mtype == "extendedTextMessage"
          ? bot.message.extendedTextMessage.text
          : bot.mtype == "buttonsResponseMessage"
          ? bot.message.buttonsResponseMessage.selectedButtonId
          : bot.mtype == "listResponseMessage"
          ? bot.message.listResponseMessage.singleSelectReply.selectedRowId
          : bot.mtype == "templateButtonReplyMessage"
          ? bot.message.templateButtonReplyMessage.selectedId
          : bot.mtype === "messageContextInfo"
          ? bot.message.buttonsResponseMessage?.selectedButtonId ||
            bot.message.listResponseMessage?.singleSelectReply.selectedRowId ||
            bot.text
          : "",
      isText = typeof bot.text == "string" ? bot.text : "",
      prefix = hisoka.prefa
        ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
          ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
          : ""
        : hisoka.prefa ?? hisoka.prefa;
    const isCmd = body.startsWith(prefix),
      command = body
        .replace(prefix, "")
        .trim()
        .split(/ +/)
        .shift()
        .toLowerCase(),
      args = body.trim().split(/ +/).slice(1),
      pushname = bot.pushName || "No Name",
      botNumber = await hisoka.decodeJid(hisoka.user.id),
      {
        ownerNumber: ownerNumber,
        ownerName: ownerName,
        botName: botName,
        footer: footer,
        pathimg: pathimg,
        gamewaktu: gamewaktu,
        limitCount: limitCount,
      } = ownerBio,
      isCreator = [botNumber, ...ownerNumber]
        .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
        .includes(bot.sender),
      itsMe = bot.sender == botNumber ? true : false,
      text = (q = args.join(" ")),
      fatkuns = bot.quoted ? bot.quoted : bot,
      mime = (fatkuns.msg || fatkuns).mimetype || "",
      isMedia = /image|video|sticker|audio/.test(mime),
      { allMenu: _0x45598b, donate: _0x2579f7 } = require("./help");
    let _0xcd848b = footer + " \xA9 2022";
    const dateTimeNow = moment(Date.now())
        .tz("Asia/Jakarta")
        .locale("id")
        .format("HH:mm:ss z"),
      _0x52032e = moment().format("HH:mm:ss z");
    let dateNow = moment(Date.now())
      .tz("Asia/Jakarta")
      .locale("id")
      .format("a");
    var skyZone =
      dateNow == "pagi"
        ? dateNow + "\uD83C\uDF1D"
        : dateNow == "siang"
        ? dateNow + "\uD83C\uDF1E"
        : dateNow == "sore"
        ? dateNow + "\uD83C\uDF1D"
        : dateNow + "\uD83C\uDF1A";
    const skyZoneString = skyZone.charAt(0).toUpperCase() + skyZone.slice(1),
      groupMetadata = bot.isGroup
        ? await hisoka.groupMetadata(bot.chat).catch((_0x5d8553) => {})
        : "",
      _0x47a9d4 = bot.isGroup ? groupMetadata.subject : "",
      _0x589500 = bot.isGroup ? groupMetadata.participants : "",
      participants = bot.isGroup ? await groupMetadata.participants : "",
      groupAdmins = bot.isGroup ? await getGroupAdmins(participants) : "",
      isBotAdmins = bot.isGroup ? groupAdmins.includes(botNumber) : false,
      isAdmins = bot.isGroup ? groupAdmins.includes(bot.sender) : false,
      _0x5d4823 = user.includes(bot.sender),
      _0x3e070b = checkPetualangUser(bot.sender),
      isPremium = isCreator
        ? true
        : _prem.checkPremiumUser(bot.sender, premium),
      _0x44c490 = _sewa.checkSewaGroup(bot.chat, sewa),
      antilinkck = antilink.includes(bot.chat) ? true : false,
      afkck = afk.checkAfkUser(bot.sender, _afk),
      nsfwck = _nsfw.includes(bot.chat) ? true : false,
      antwameck = antiwame.includes(bot.chat) ? true : false,
      gcountck = ownerBio.gcount,
      _0xc3b69b = isPremium ? gcountck.prem : gcountck.user;
    let speedck = speed(),
      _0x22593e = speed() - speedck;
    const _0x59aa7b = { remoteJid: "6283136505591-1614953337@g.us" };
    const _0x549103 = {
        participant: "0@s.whatsapp.net",
        ...(bot.chat ? _0x59aa7b : {}),
      },
      _0x16ddfe = {
        key: _0x549103,
        message: {
          contactMessage: {
            displayName: "" + pushname,
            vcard:
              "BEGIN:VCARD\nVERSION:3.0\nN:XL;" +
              pushname +
              ",;;;\nFN:" +
              pushname +
              ",\nitem1.TEL;waid=" +
              bot.sender.split("@")[0] +
              ":" +
              bot.sender.split("@")[0] +
              "\nitem1.X-ABLabel:Ponsel\nEND:VCARD",
            jpegThumbnail: pathimg,
            thumbnail: pathimg,
            sendEphemeral: true,
          },
        },
      },
      _0x66bbf5 = await cekDuluJoinAdaApaKagaDiJson(bot.sender),
      _0x9898c = await getDarah(bot.sender),
      _0x1d4b2e = await getUmpan(bot.sender),
      _0x38118c = await getPotion(bot.sender),
      _0x43e8d2 = await getIkan(bot.sender),
      _0x1cbc30 = await getAyam(bot.sender),
      _0x4239d7 = await getKelinci(bot.sender),
      _0xd8f839 = await getDomba(bot.sender),
      _0x4fdb6e = await getSapi(bot.sender),
      _0x4bce28 = await getGajah(bot.sender),
      _0x4671bd = await getMonay(bot.sender),
      _0x35bb36 = await getBesi(bot.sender),
      _0x2a9057 = await getEmas(bot.sender),
      _0x3e7951 = await getEmerald(bot.sender),
      _0x146d31 = await cekInventoryAdaAtauGak(bot.sender),
      _0x2e6483 = await cekDuluHasilBuruanNya(bot.sender),
      _0x187b32 = await cekDuluJoinAdaApaKagaLimitnyaDiJson(bot.sender),
      _0x255e75 = await cekDuluJoinAdaApaKagaMonaynyaDiJson(bot.sender),
      _0x54ae70 = (_0x3a1be7) => {
        return hisoka.sendMessage(
          bot.chat,
          {
            text: _0x3a1be7,
            mentions: parseMention(_0x3a1be7),
          },
          { quoted: bot }
        );
      },
      randomNumbers = (_0x1219bb) => {
        return Math.floor(_0x1219bb);
      };
    function _0x763a2c(_0x153b16, _0x5242da) {
      let _0xc8603f = new Date(
          _0x153b16 + " " + _0x5242da + ", 2023 00:00:00"
        ).getTime(),
        _0x1a4bc9 = Date.now(),
        _0x51938d = _0xc8603f - _0x1a4bc9,
        _0x549c41 = Math.floor(_0x51938d / 86400000),
        _0x30f9b9 = Math.floor((_0x51938d % 86400000) / 3600000),
        _0x34bdf3 = Math.floor((_0x51938d % 3600000) / 60000),
        _0x1b7ec0 = Math.floor((_0x51938d % 60000) / 1000);
      return (
        _0x549c41 +
        "Hari " +
        _0x30f9b9 +
        "Jam " +
        _0x34bdf3 +
        "Menit " +
        _0x1b7ec0 +
        "Detik"
      );
    }
    const _0x141288 = (_0x239a82) => {
      let _0xce64a0 = new RegExp(
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
        "gi"
      );
      return _0x239a82.match(_0xce64a0);
    };
    async function _0xe84902(_0x5aa14a) {
      try {
        let _0x581349 = await hisoka.groupMetadata(_0x5aa14a);
        return _0x581349.subject;
      } catch (_0x20d4c0) {
        return "-";
      }
    }
    function _0x8f2ff1(_0x333a8f, _0x3d5168 = null) {
      if (_0x3d5168 !== null) {
        return (
          (_0x333a8f = Math.ceil(_0x333a8f)),
          (_0x3d5168 = Math.floor(_0x3d5168)),
          Math.floor(Math.random() * (_0x3d5168 - _0x333a8f + 1)) + _0x333a8f
        );
      } else {
        return Math.floor(Math.random() * _0x333a8f) + 1;
      }
    }
    try {
      let _0x1361f5 = db.data.chats[bot.chat];
      if (typeof _0x1361f5 !== "object") {
        db.data.chats[bot.chat] = {};
      }
      if (_0x1361f5) {
        if (!("goodbye" in _0x1361f5)) {
          _0x1361f5.goodbye = ownerBio.auto_leaveMsg;
        }
        if (!("welcome" in _0x1361f5)) {
          _0x1361f5.welcome = ownerBio.auto_welcomeMsg;
        }
      } else {
        db.data.chats[bot.chat] = {
          goodbye: ownerBio.auto_leaveMsg,
          welcome: ownerBio.auto_welcomeMsg,
        };
      }
    } catch (_0x3eb5db) {
      console.log(_0x3eb5db);
    }
    if (!hisoka.public) {
      if (!bot.key.fromMe) {
        return;
      }
    }
    if (bot.isGroup) {
      const _0x1378dd = await getMancingIkan(bot.sender),
        _0x17b23a = await getMancingId(bot.sender);
      if (_0x1378dd === undefined && _0x17b23a === undefined) {
        await addMancingId(bot.sender);
      }
    }
    if (bot.isGroup) {
      const _0x210ab4 = await getBertualangPlanet(bot.sender),
        _0x2a0145 = await getPlaneId(bot.sender);
      if (_0x210ab4 === undefined && _0x2a0145 === undefined) {
        await addPlaneId(bot.sender);
      }
    }
    if (bot.isGroup) {
      const _0x2e5400 = await getMiningcoal(bot.sender),
        _0x55c924 = await getMiningId(bot.sender);
      if (_0x2e5400 === undefined && _0x55c924 === undefined) {
        await addMiningId(bot.sender);
      }
    }
    if (bot.isGroup) {
      const _0x4f2f65 = await getMiningstone(bot.sender),
        _0x3c0fce = await getBatuId(bot.sender);
      if (_0x4f2f65 === undefined && _0x3c0fce === undefined) {
        await addBatuId(bot.sender);
      }
    }
    if (bot.isGroup) {
      const _0x323b40 = await getMiningore(bot.sender),
        _0xeb466e = await getOreId(bot.sender);
      if (_0x323b40 === undefined && _0xeb466e === undefined) {
        await addOreId(bot.sender);
      }
    }
    if (bot.isGroup) {
      const _0x54d349 = await getMiningingot(bot.sender),
        _0x53cb1e = await getIngotId(bot.sender);
      if (_0x54d349 === undefined && _0x53cb1e === undefined) {
        await addIngotId(bot.sender);
      }
    }
    if (bot.isGroup) {
      const _0x316802 = await getNebangKayu(bot.sender),
        _0x29ea1d = await getNebangId(bot.sender);
      if (_0x316802 === undefined && _0x29ea1d === undefined) {
        await addNebangId(bot.sender);
      }
    }
    if (bot.isGroup) {
      const _0x213172 = await checkATMuser(bot.sender);
      try {
        if (_0x213172 === undefined) {
          await addATM(bot.sender);
        }
        const _0x1c8c1d = Math.floor(Math.random() * 10) + 90;
        addKoinUser(bot.sender, _0x1c8c1d);
      } catch (_0x379dc2) {
        console.error(_0x379dc2);
      }
    }
    const _0x255b4c = await getLevelingLevel(bot.sender);
    var _0x5266a5 = "Bronze 1";
    if (_0x255b4c <= 2) {
      _0x5266a5 = "Bronze 1";
    } else {
      if (_0x255b4c <= 10) {
        _0x5266a5 = "Bronze 2";
      } else {
        if (_0x255b4c <= 20) {
          _0x5266a5 = "Bronze 3";
        } else {
          if (_0x255b4c <= 30) {
            _0x5266a5 = "Bronze 4";
          } else {
            if (_0x255b4c <= 40) {
              _0x5266a5 = "Bronze 5";
            } else {
              if (_0x255b4c <= 70) {
                _0x5266a5 = "Silver 1";
              } else {
                if (_0x255b4c <= 85) {
                  _0x5266a5 = "Silver 2";
                } else {
                  if (_0x255b4c <= 95) {
                    _0x5266a5 = "Silver 3";
                  } else {
                    if (_0x255b4c <= 105) {
                      _0x5266a5 = "Silver 4";
                    } else {
                      if (_0x255b4c <= 125) {
                        _0x5266a5 = "Silver 5";
                      } else {
                        if (_0x255b4c <= 150) {
                          _0x5266a5 = "Gold 1";
                        } else {
                          if (_0x255b4c <= 170) {
                            _0x5266a5 = "Gold 2";
                          } else {
                            if (_0x255b4c <= 190) {
                              _0x5266a5 = "Gold 3";
                            } else {
                              if (_0x255b4c <= 210) {
                                _0x5266a5 = "Gold 4";
                              } else {
                                if (_0x255b4c <= 230) {
                                  _0x5266a5 = "Gold 5";
                                } else {
                                  if (_0x255b4c <= 260) {
                                    _0x5266a5 = "Platinum 1";
                                  } else {
                                    if (_0x255b4c <= 290) {
                                      _0x5266a5 = "Platinum 2";
                                    } else {
                                      if (_0x255b4c <= 320) {
                                        _0x5266a5 = "Platinum 3";
                                      } else {
                                        if (_0x255b4c <= 350) {
                                          _0x5266a5 = "Platinum 4";
                                        } else {
                                          if (_0x255b4c <= 380) {
                                            _0x5266a5 = "Platinum 5";
                                          } else {
                                            if (_0x255b4c <= 410) {
                                              _0x5266a5 = "Diamond 1";
                                            } else {
                                              if (_0x255b4c <= 450) {
                                                _0x5266a5 = "Diamond 2";
                                              } else {
                                                if (_0x255b4c <= 500) {
                                                  _0x5266a5 = "Diamond 3";
                                                } else {
                                                  if (_0x255b4c <= 550) {
                                                    _0x5266a5 = "Diamond 4";
                                                  } else {
                                                    if (_0x255b4c <= 600) {
                                                      _0x5266a5 = "Diamond 5";
                                                    } else {
                                                      if (_0x255b4c <= 700) {
                                                        _0x5266a5 = "Master";
                                                      } else {
                                                        if (_0x255b4c <= 800) {
                                                          _0x5266a5 =
                                                            "Master \u2729";
                                                        } else {
                                                          if (
                                                            _0x255b4c <= 900
                                                          ) {
                                                            _0x5266a5 =
                                                              "Master \u2729\u2729";
                                                          } else {
                                                            if (
                                                              _0x255b4c <= 1000
                                                            ) {
                                                              _0x5266a5 =
                                                                "Master \u2729\u2729\u2729";
                                                            } else {
                                                              if (
                                                                _0x255b4c <=
                                                                1100
                                                              ) {
                                                                _0x5266a5 =
                                                                  "Master \u272F";
                                                              } else {
                                                                if (
                                                                  _0x255b4c <=
                                                                  1225
                                                                ) {
                                                                  _0x5266a5 =
                                                                    "Master \u272F\u272F";
                                                                } else {
                                                                  if (
                                                                    _0x255b4c <=
                                                                    1340
                                                                  ) {
                                                                    _0x5266a5 =
                                                                      "Master \u272F\u272F\u272F";
                                                                  } else {
                                                                    if (
                                                                      _0x255b4c <=
                                                                      1400
                                                                    ) {
                                                                      _0x5266a5 =
                                                                        "GrandMaster";
                                                                    } else {
                                                                      if (
                                                                        _0x255b4c <=
                                                                        1555
                                                                      ) {
                                                                        _0x5266a5 =
                                                                          "GrandMaster \u2729";
                                                                      } else {
                                                                        if (
                                                                          _0x255b4c <=
                                                                          1660
                                                                        ) {
                                                                          _0x5266a5 =
                                                                            "GrandMaster \u2729\u2729";
                                                                        } else {
                                                                          if (
                                                                            _0x255b4c <=
                                                                            1710
                                                                          ) {
                                                                            _0x5266a5 =
                                                                              "GrandMaster \u2729\u2729\u2729";
                                                                          } else {
                                                                            if (
                                                                              _0x255b4c <=
                                                                              1825
                                                                            ) {
                                                                              _0x5266a5 =
                                                                                "GrandMaster \u272F";
                                                                            } else {
                                                                              if (
                                                                                _0x255b4c <=
                                                                                1950
                                                                              ) {
                                                                                _0x5266a5 =
                                                                                  "GrandMaster \u272F\u272F";
                                                                              } else {
                                                                                if (
                                                                                  _0x255b4c <=
                                                                                  2000
                                                                                ) {
                                                                                  _0x5266a5 =
                                                                                    "GrandMaster \u272F\u272F\u272F";
                                                                                } else {
                                                                                  if (
                                                                                    _0x255b4c <=
                                                                                    2220
                                                                                  ) {
                                                                                    _0x5266a5 =
                                                                                      "Legends";
                                                                                  } else {
                                                                                    if (
                                                                                      _0x255b4c <=
                                                                                      2500
                                                                                    ) {
                                                                                      _0x5266a5 =
                                                                                        "Legends 2";
                                                                                    } else {
                                                                                      if (
                                                                                        _0x255b4c <=
                                                                                        2700
                                                                                      ) {
                                                                                        _0x5266a5 =
                                                                                          "Legends 3";
                                                                                      } else {
                                                                                        if (
                                                                                          _0x255b4c <=
                                                                                          2900
                                                                                        ) {
                                                                                          _0x5266a5 =
                                                                                            "Legends 4";
                                                                                        } else {
                                                                                          if (
                                                                                            _0x255b4c <=
                                                                                            3100
                                                                                          ) {
                                                                                            _0x5266a5 =
                                                                                              "Legends 5";
                                                                                          } else {
                                                                                            if (
                                                                                              _0x255b4c <=
                                                                                              3300
                                                                                            ) {
                                                                                              _0x5266a5 =
                                                                                                "Legends 6";
                                                                                            } else {
                                                                                              if (
                                                                                                _0x255b4c <=
                                                                                                3600
                                                                                              ) {
                                                                                                _0x5266a5 =
                                                                                                  "Legends 7";
                                                                                              } else {
                                                                                                if (
                                                                                                  _0x255b4c <=
                                                                                                  3900
                                                                                                ) {
                                                                                                  _0x5266a5 =
                                                                                                    "Legends 8";
                                                                                                } else {
                                                                                                  if (
                                                                                                    _0x255b4c <=
                                                                                                    4200
                                                                                                  ) {
                                                                                                    _0x5266a5 =
                                                                                                      "Legends 9";
                                                                                                  } else {
                                                                                                    if (
                                                                                                      _0x255b4c <=
                                                                                                      4450
                                                                                                    ) {
                                                                                                      _0x5266a5 =
                                                                                                        "Legends 10";
                                                                                                    } else {
                                                                                                      if (
                                                                                                        _0x255b4c <=
                                                                                                        4700
                                                                                                      ) {
                                                                                                        _0x5266a5 =
                                                                                                          "Legends 忍";
                                                                                                      } else {
                                                                                                        if (
                                                                                                          _0x255b4c <=
                                                                                                          4900
                                                                                                        ) {
                                                                                                          _0x5266a5 =
                                                                                                            "Legends 忍\xB9";
                                                                                                        } else {
                                                                                                          if (
                                                                                                            _0x255b4c <=
                                                                                                            5100
                                                                                                          ) {
                                                                                                            _0x5266a5 =
                                                                                                              "Legends 忍\xB2";
                                                                                                          } else {
                                                                                                            if (
                                                                                                              _0x255b4c <=
                                                                                                              5600
                                                                                                            ) {
                                                                                                              _0x5266a5 =
                                                                                                                "Legends 忍\xB3";
                                                                                                            } else {
                                                                                                              if (
                                                                                                                _0x255b4c <=
                                                                                                                6100
                                                                                                              ) {
                                                                                                                _0x5266a5 =
                                                                                                                  "Legends 忍\u2074";
                                                                                                              } else {
                                                                                                                if (
                                                                                                                  _0x255b4c <=
                                                                                                                  7000
                                                                                                                ) {
                                                                                                                  _0x5266a5 =
                                                                                                                    "GrandLegends";
                                                                                                                } else {
                                                                                                                  if (
                                                                                                                    _0x255b4c <=
                                                                                                                    10000
                                                                                                                  ) {
                                                                                                                    _0x5266a5 =
                                                                                                                      "GrandLegends 1";
                                                                                                                  } else {
                                                                                                                    if (
                                                                                                                      _0x255b4c <=
                                                                                                                      20000
                                                                                                                    ) {
                                                                                                                      _0x5266a5 =
                                                                                                                        "GrandLegends 2";
                                                                                                                    } else {
                                                                                                                      if (
                                                                                                                        _0x255b4c <=
                                                                                                                        30000
                                                                                                                      ) {
                                                                                                                        _0x5266a5 =
                                                                                                                          "GrandLegends 3";
                                                                                                                      } else {
                                                                                                                        if (
                                                                                                                          _0x255b4c <=
                                                                                                                          40000
                                                                                                                        ) {
                                                                                                                          _0x5266a5 =
                                                                                                                            "GrandLegends 4";
                                                                                                                        } else {
                                                                                                                          if (
                                                                                                                            _0x255b4c <=
                                                                                                                            50000
                                                                                                                          ) {
                                                                                                                            _0x5266a5 =
                                                                                                                              "GrandLegends 忍\xB9";
                                                                                                                          } else {
                                                                                                                            if (
                                                                                                                              _0x255b4c <=
                                                                                                                              60000
                                                                                                                            ) {
                                                                                                                              _0x5266a5 =
                                                                                                                                "GrandLegends 忍\xB2";
                                                                                                                            } else {
                                                                                                                              if (
                                                                                                                                _0x255b4c <=
                                                                                                                                70000
                                                                                                                              ) {
                                                                                                                                _0x5266a5 =
                                                                                                                                  "GrandLegends 忍\xB3";
                                                                                                                              } else {
                                                                                                                                if (
                                                                                                                                  _0x255b4c <=
                                                                                                                                  80000
                                                                                                                                ) {
                                                                                                                                  _0x5266a5 =
                                                                                                                                    "GrandLegends 忍\u2074";
                                                                                                                                } else {
                                                                                                                                  if (
                                                                                                                                    _0x255b4c <=
                                                                                                                                    90000
                                                                                                                                  ) {
                                                                                                                                    _0x5266a5 =
                                                                                                                                      "Pro 숒";
                                                                                                                                  } else {
                                                                                                                                    if (
                                                                                                                                      _0x255b4c <=
                                                                                                                                      100000
                                                                                                                                    ) {
                                                                                                                                      _0x5266a5 =
                                                                                                                                        "Pro \xD7 GrandLegends 숒";
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (bot.message) {
      console.log(
        "\x1B[1;31m~\x1B[1;37m>",
        "[\x1B[1;32m CMD \x1B[1;37m]",
        dateTimeNow,
        chalk.green(isText || bot.mtype),
        "from",
        chalk.green(pushname),
        "in",
        chalk.green(_0x47a9d4 ? _0x47a9d4 : "Private Chat"),
        "args :",
        chalk.green(text.length)
      );
    }
    const instagramU = {
      displayText: "Instagram",
      url: "" + ownerBio.instagram,
    };
    const instaButton = { urlButton: instagramU };
    const ownerU = {
      displayText: "\uD83D\uDC64 Owner",
      id: ".owner",
    };
    const ownerButton = { quickReplyButton: ownerU };
    const donateU = {
      displayText: "\uD83D\uDCB0 Donate",
      id: ".donate",
    };
    const donateButton = { quickReplyButton: donateU };
    const _0x537dec = [instaButton, ownerButton, donateButton];
    if (ownerBio.autobio) {
      if (ownerBio.autobio === false) {
        return;
      }
      let _0x551c5f = 0;
      new Date() * 1 - _0x551c5f > 1000 &&
        (await hisoka.setStatus(
          "I'm " +
            hisoka.user.name +
            " ?? | " +
            runtime(process.uptime()) +
            " \u23F0 | Status : " +
            (hisoka.mode ? "Public Mode" : "Self Mode") +
            " | " +
            user.length +
            " Users"
        ),
        (_0x551c5f = new Date() * 1));
    }
    var _0x4f40d7 =
      bot.mtype == "listResponseMessage"
        ? bot.message.listResponseMessage.singleSelectReply.selectedRowId
        : bot.mtype == "messageContextInfo"
        ? bot.message.buttonsResponseMessage?.selectedButtonId ||
          bot.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          bot.text
        : "";
    for (let _0xdcd6ac of setiker) {
      if (!_0x4f40d7 && isText === _0xdcd6ac) {
        _0x2dce13 = fs.readFileSync("./database/" + _0xdcd6ac + ".webp");
        const _0x75731b = {
          packname: ownerBio.botName,
          author: ownerBio.ownerName,
        };
        hisoka.sendImageAsSticker(bot.chat, _0x2dce13, bot, _0x75731b);
      }
    }
    for (let audioI of audionye) {
      if (!_0x4f40d7 && isText === audioI) {
        _0x2dce13 = fs.readFileSync("./database/" + audioI + ".mp3");
        hisoka.sendAudio(bot.chat, _0x2dce13, bot, true);
      }
    }
    for (let imageI of imagenye) {
      if (!_0x4f40d7 && isText === imageI) {
        _0x2dce13 = fs.readFileSync("./database/" + imageI + ".jpg");
        hisoka.sendImage(bot.chat, _0x2dce13, "", bot);
      }
    }
    for (let videoI of videonye) {
      !_0x4f40d7 &&
        isText === videoI &&
        ((_0x2dce13 = fs.readFileSync("./database/" + videoI + ".mp4")),
        hisoka.sendVideo(bot.chat, _0x2dce13, false, "", bot));
    }
    async function _0x1b9778(_0x372f4a, _0x20d25a, _0x2117e4) {
      var _0x5a8522 = null,
        _0x27e6fc = null;
      Object.keys(_0x2117e4).forEach((_0x21852f) => {
        if (_0x2117e4[_0x21852f].jid === _0x20d25a) {
          _0x5a8522 = _0x21852f;
        }
      });
      if (_0x5a8522 === null) {
        const _0x214426 = {
          nama: _0x372f4a,
          count: 0,
        };
        const _0x182e86 = {
          jid: bot.sender,
          db: [_0x214426],
        };
        _0x2117e4.push(_0x182e86);
        fs.writeFileSync(
          "./database/commandUser.json",
          JSON.stringify(_0x2117e4, null, 2)
        );
        Object.keys(_0x2117e4).forEach((_0x2d1aa6) => {
          if (_0x2117e4[_0x2d1aa6].jid === bot.sender) {
            _0x5a8522 = _0x2d1aa6;
          }
        });
      }
      if (_0x5a8522 !== null) {
        Object.keys(_0x2117e4[_0x5a8522].db).forEach((_0x439dc5) => {
          _0x2117e4[_0x5a8522].db[_0x439dc5].nama === _0x372f4a &&
            (_0x27e6fc = _0x439dc5);
        });
        if (_0x27e6fc === null) {
          const _0x56cbf9 = {
            nama: _0x372f4a,
            count: 1,
          };
          _0x2117e4[_0x5a8522].db.push(_0x56cbf9);
          fs.writeFileSync(
            "./database/commandUser.json",
            JSON.stringify(_0x2117e4, null, 2)
          );
        } else {
          _0x2117e4[_0x5a8522].db[_0x27e6fc].count += 1;
          fs.writeFileSync(
            "./database/commandUser.json",
            JSON.stringify(_0x2117e4, null, 2)
          );
        }
      }
    }
    async function _0x302128(_0x1da9df, _0x44a071) {
      var _0x51aa76 = null;
      return (
        Object.keys(_0x44a071).forEach((_0x53bae0) => {
          _0x44a071[_0x53bae0].jid === _0x1da9df && (_0x51aa76 = _0x53bae0);
        }),
        _0x51aa76
      );
    }
    async function _0x250c09(_0x44fca, _0xe66bc8, _0x270ed7) {
      _0x1b9778(_0x44fca, bot.sender, _cmdUser);
      var _0x59bac4 = null;
      Object.keys(_0x270ed7).forEach((_0x56aea6) => {
        _0x270ed7[_0x56aea6].nama === _0x44fca && (_0x59bac4 = _0x56aea6);
      });
      if (_0x59bac4 === null) {
        const _0x457d68 = {
          nama: _0x44fca,
          count: 1,
        };
        _0x270ed7.push(_0x457d68);
        fs.writeFileSync(
          "./database/command.json",
          JSON.stringify(_0x270ed7, null, 2)
        );
      } else {
        _0x270ed7[_0x59bac4].count += 1;
        fs.writeFileSync(
          "./database/command.json",
          JSON.stringify(_0x270ed7, null, 2)
        );
      }
    }
    if (bot.isGroup && isAlreadyResponList(bot.chat, body, db_respon_list)) {
      var _0x27c321 = getDataResponList(bot.chat, body, db_respon_list);
      if (_0x27c321.isImage === false) {
        hisoka.sendMessage(
          bot.chat,
          { text: sendResponList(bot.chat, body, db_respon_list) },
          { quoted: bot }
        );
      } else {
        hisoka.sendMessage(
          bot.chat,
          {
            image: await getBuffer(_0x27c321.image_url),
            caption: _0x27c321.response,
          },
          { quoted: bot }
        );
      }
    }
    const _0x249097 = async (
      _0x56461e,
      _0x16d354,
      captionck,
      _0x3b3494,
      mentionsck
    ) => {
      let _0x2ab8a9 = "",
        _0x408f91 = await axios.head(_0x16d354);
      _0x2ab8a9 = _0x408f91.headers["content-type"];
      if (_0x2ab8a9.split("/")[1] === "gif") {
        return hisoka.sendMessage(
          bot.chat,
          {
            video: await getBuffer(_0x16d354),
            caption: captionck,
            gifPlayback: true,
            mentions: mentionsck ? mentionsck : [],
            mimetype: "video/mp4",
          },
          { quoted: bot }
        );
      }
      let _0x4c9146 = _0x2ab8a9.split("/")[0] + "Message";
      if (_0x2ab8a9 === "application/pdf") {
        return hisoka.sendMessage(
          bot.chat,
          {
            document: await getBuffer(_0x16d354),
            mimetype: "application/pdf",
            caption: captionck,
            mentions: mentionsck ? mentionsck : [],
          },
          { quoted: bot }
        );
      }
      if (_0x2ab8a9.split("/")[0] === "image") {
        return hisoka.sendMessage(
          bot.chat,
          {
            image: await getBuffer(_0x16d354),
            caption: captionck,
            mentions: mentionsck ? mentionsck : [],
          },
          { quoted: bot }
        );
      }
      if (_0x2ab8a9.split("/")[0] === "video") {
        return hisoka.sendMessage(
          bot.chat,
          {
            video: await getBuffer(_0x16d354),
            caption: captionck,
            mentions: mentionsck ? mentionsck : [],
            mimetype: "video/mp4",
          },
          { quoted: bot }
        );
      }
      if (_0x2ab8a9.split("/")[0] === "audio") {
        return hisoka.sendMessage(
          bot.chat,
          {
            audio: await getBuffer(_0x16d354),
            caption: captionck,
            mentions: mentionsck ? mentionsck : [],
            mimetype: "audio/mpeg",
          },
          { quoted: bot }
        );
      }
    };
    if (!bot.key.fromMe && ownerBio.autoread) {
      const _0x3efffb = {
        remoteJid: bot.chat,
        id: bot.key.id,
        participant: bot.isGroup ? bot.key.participant : undefined,
      };
      const _0x3f5897 = _0x3efffb;
      await hisoka.readMessages([_0x3f5897]);
    }
    hisoka.sendPresenceUpdate("available", bot.chat);
    if (isCmd && !_0x5d4823) {
      user.push(bot.sender);
      fs.writeFileSync("./database/user.json", JSON.stringify(user, null, 2));
    }
    if (bot.sender.startsWith("212") && ownerBio.autoblok212 === true) {
      return hisoka.updateBlockStatus(bot.sender, "block");
    }
    if (!bot.isGroup && !bot.key.fromMe && ownerBio.autorespond === true) {
      simi = await fetchJson(
        "https://api.simsimi.net/v2/?lc=id&cf=false&text=" + command
      );
      bot.reply("_" + simi.success + "_");
    }
    if (antilinkck) {
      if (isText.match("chat.whatsapp.com")) {
        bot.reply(
          "*\u300C GROUP LINK DETECTOR \u300D*\n\nIt looks like you sent a group link, sorry you will be kicked"
        );
        if (!isBotAdmins) {
          return bot.reply("forgot I'm not an admin");
        }
        let _0x1c973f =
            "https://chat.whatsapp.com/" +
            (await hisoka.groupInviteCode(bot.chat)),
          _0x3abc2e = new RegExp(_0x1c973f, "i"),
          _0x212451 = _0x3abc2e.test(bot.text);
        if (_0x212451) {
          return bot.reply(
            "It didn't happen, because you sent the link to this group"
          );
        }
        if (isAdmins) {
          return bot.reply("you are the admin");
        }
        if (isCreator) {
          return bot.reply("you are my owner");
        }
        hisoka.groupParticipantsUpdate(bot.chat, [bot.sender], "remove");
      }
    }
    if (bot.isGroup && antwameck && !isCreator && !isAdmins && isBotAdmins) {
      if (isText.match("https://wa.me")) {
        if (!isBotAdmins) {
          return bot.reply("Luckily the bot is not an admin");
        }
        bot.reply(
          "*\u300C DETECTOR LINK NUMBER \u300D*\n\nIt looks like you sent a wa.me link, sorry you will be kicked"
        );
        hisoka.groupParticipantsUpdate(bot.chat, [bot.sender], "remove");
      }
    }
    if (
      isMedia &&
      bot.msg.fileSha256 &&
      bot.msg.fileSha256.toString("base64") in db.data.sticker
    ) {
      let _0x5a27ba = db.data.sticker[bot.msg.fileSha256.toString("base64")],
        { text: _0x493c5c, mentionedJid: _0x2f7c6e } = _0x5a27ba;
      const _0x5cc209 = {
        text: _0x493c5c,
        mentions: _0x2f7c6e,
      };
      let _0x1ebb05 = await generateWAMessage(bot.chat, _0x5cc209, {
        userJid: hisoka.user.id,
        quoted: bot.quoted && bot.quoted.fakeObj,
      });
      _0x1ebb05.key.fromMe = areJidsSameUser(bot.sender, hisoka.user.id);
      _0x1ebb05.key.id = bot.key.id;
      _0x1ebb05.pushName = bot.pushName;
      if (bot.isGroup) {
        _0x1ebb05.participant = bot.sender;
      }
      let _0x2bfcf3 = {
        ..._0x39fd85,
        messages: [proto.WebMessageInfo.fromObject(_0x1ebb05)],
        type: "append",
      };
      hisoka.ev.emit("messages.upsert", _0x2bfcf3);
    }
    this.game = this.game ? this.game : {};
    let _0x1c7f6a = Object.values(this.game).find(
      (_0x283cae) =>
        _0x283cae.id &&
        _0x283cae.game &&
        _0x283cae.state &&
        _0x283cae.id.startsWith("tictactoe") &&
        [_0x283cae.game.playerX, _0x283cae.game.playerO].includes(bot.sender) &&
        _0x283cae.state == "PLAYING"
    );
    if (_0x1c7f6a) {
      let _0x17c214,
        _0x12b4c9 = false,
        _0x4e19e7 = false,
        _0x446d7d = false;
      if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(bot.text)) {
        return;
      }
      _0x446d7d = !/^[1-9]$/.test(bot.text);
      if (bot.sender !== _0x1c7f6a.game.currentTurn) {
        if (!_0x446d7d) {
          return true;
        }
      }
      if (
        !_0x446d7d &&
        1 >
          (_0x17c214 = _0x1c7f6a.game.turn(
            bot.sender === _0x1c7f6a.game.playerO,
            parseInt(bot.text) - 1
          ))
      ) {
        const _0x5cae97 = {};
        return (
          (_0x5cae97["-3"] = "Game is over"),
          (_0x5cae97["-2"] = "Invalid"),
          (_0x5cae97["-1"] = "Invalid position"),
          (_0x5cae97["0"] = "Invalid position"),
          bot.reply(_0x5cae97[_0x17c214]),
          true
        );
      }
      if (bot.sender === _0x1c7f6a.game.winner) {
        _0x12b4c9 = true;
      } else {
        if (_0x1c7f6a.game.board === 511) {
          _0x4e19e7 = true;
        }
      }
      let _0x2abd8b = _0x1c7f6a.game.render().map((_0x627bbe) => {
        const _0x113f18 = {};
        return (
          (_0x113f18.X = "\u274C"),
          (_0x113f18.O = "\u2B55"),
          (_0x113f18["1"] = "1️\u20E3"),
          (_0x113f18["2"] = "2️\u20E3"),
          (_0x113f18["3"] = "3️\u20E3"),
          (_0x113f18["4"] = "4️\u20E3"),
          (_0x113f18["5"] = "5️\u20E3"),
          (_0x113f18["6"] = "6️\u20E3"),
          (_0x113f18["7"] = "7️\u20E3"),
          (_0x113f18["8"] = "8️\u20E3"),
          (_0x113f18["9"] = "9️\u20E3"),
          _0x113f18[_0x627bbe]
        );
      });
      _0x446d7d &&
        ((_0x1c7f6a.game["_currentTurn"] =
          bot.sender === _0x1c7f6a.game.playerX),
        (_0x12b4c9 = true));
      let _0x2ba4a9 = _0x446d7d
          ? _0x1c7f6a.game.currentTurn
          : _0x1c7f6a.game.winner,
        _0x2f6b74 =
          "Room ID: " +
          _0x1c7f6a.id +
          "\n\n" +
          _0x2abd8b.slice(0, 3).join("") +
          "\n" +
          _0x2abd8b.slice(3, 6).join("") +
          "\n" +
          _0x2abd8b.slice(6).join("") +
          "\n\n" +
          (_0x12b4c9
            ? "@" + _0x2ba4a9.split("@")[0] + " Menang!"
            : _0x4e19e7
            ? "Game berakhir"
            : "Giliran " +
              ["\u274C", "\u2B55"][1 * _0x1c7f6a.game["_currentTurn"]] +
              " (@" +
              _0x1c7f6a.game.currentTurn.split("@")[0] +
              ")") +
          "\n\u274C: @" +
          _0x1c7f6a.game.playerX.split("@")[0] +
          "\n\u2B55: @" +
          _0x1c7f6a.game.playerO.split("@")[0] +
          "\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan";
      if (
        (_0x1c7f6a.game["_currentTurn"] ^ _0x446d7d
          ? _0x1c7f6a.x
          : _0x1c7f6a.o) !== bot.chat
      ) {
        _0x1c7f6a[_0x1c7f6a.game["_currentTurn"] ^ _0x446d7d ? "x" : "o"] =
          bot.chat;
      }
      if (_0x1c7f6a.x !== _0x1c7f6a.o) {
        await hisoka.sendText(_0x1c7f6a.x, _0x2f6b74, bot, {
          mentions: parseMention(_0x2f6b74),
        });
      }
      await hisoka.sendText(_0x1c7f6a.o, _0x2f6b74, bot, {
        mentions: parseMention(_0x2f6b74),
      });
      if (_0x4e19e7 || _0x12b4c9) {
        delete this.game[_0x1c7f6a.id];
      }
    }
    if (fs.existsSync("./database/casino/" + bot.chat + ".json")) {
      var _0x33e35f = setCasino("" + bot.chat);
      if (
        bot.sender == _0x33e35f.Y + "@s.whatsapp.net" &&
        isText.toLowerCase() == "n"
      ) {
        const _0x2c889f = { quoted: msg };
        hisoka.sendMessage(
          bot.chat,
          {
            text:
              "\u300C Game Casino Rejected \u300D\n\n\u2022 @" +
              _0x33e35f.Y +
              " Membatalkan Game",
            mentions: [_0x33e35f.Y + "@s.whatsapp.net"],
          },
          _0x2c889f
        );
        deleteCasino(bot.chat);
      }
      if (
        bot.sender == _0x33e35f.Y + "@s.whatsapp.net" &&
        isText.toLowerCase() == "y"
      ) {
        var _0x2d5769 = await _0x8f2ff1(10, 20),
          _0x9577dd = await _0x8f2ff1(10, 20);
        if (_0x2d5769 > _0x9577dd) {
          _0xd3dc8c =
            "\uD83C\uDFB0 Casino Game \uD83D\uDCB0\n\n\u2022 @" +
            _0x33e35f.Z +
            " --> " +
            _0x2d5769 +
            " \uD83D\uDC51\n\u2022 @" +
            _0x33e35f.Y +
            " --> " +
            _0x9577dd +
            " \uD83E\uDD48\n\nPemenangnya adalah [ @" +
            _0x33e35f.Z +
            " ]\nMendapatkan: $ " +
            randomNumbers(_0x33e35f.nominal);
          hisoka.sendMessage(
            bot.chat,
            {
              text: _0xd3dc8c,
              mentions: [
                _0x33e35f.Z + "@s.whatsapp.net",
                _0x33e35f.Y + "@s.whatsapp.net",
              ],
            },
            { quoted: bot }
          );
          await addBalance(
            _0x33e35f.Z + "@s.whatsapp.net",
            randomNumbers(_0x33e35f.nominal),
            balance
          );
          await kurangBalance(
            _0x33e35f.Y + "@s.whatsapp.net",
            randomNumbers(_0x33e35f.nominal),
            balance
          );
          deleteCasino(bot.chat);
        } else {
          if (_0x2d5769 < _0x9577dd) {
            _0xd3dc8c =
              "\uD83C\uDFB0 Casino Game \uD83D\uDCB0\n\n\u2022 @" +
              _0x33e35f.Z +
              " --> " +
              _0x2d5769 +
              " \uD83E\uDD48\n\u2022 @" +
              _0x33e35f.Y +
              " --> " +
              _0x9577dd +
              " \uD83D\uDC51\n\nPemenangnya adalah [ @" +
              _0x33e35f.Y +
              " ]\nMendapatkan: $ " +
              randomNumbers(_0x33e35f.nominal);
            hisoka.sendMessage(
              bot.chat,
              {
                text: _0xd3dc8c,
                mentions: [
                  _0x33e35f.Z + "@s.whatsapp.net",
                  _0x33e35f.Y + "@s.whatsapp.net",
                ],
              },
              { quoted: bot }
            );
            await addBalance(
              _0x33e35f.Y + "@s.whatsapp.net",
              randomNumbers(_0x33e35f.nominal),
              balance
            );
            await kurangBalance(
              _0x33e35f.Z + "@s.whatsapp.net",
              randomNumbers(_0x33e35f.nominal),
              balance
            );
            deleteCasino(bot.chat);
          } else {
            (_0x2d5769 = _0x9577dd) &&
              ((_0xd3dc8c =
                "\uD83C\uDFB0 Casino Game \uD83D\uDCB0\n\n\u2022 @" +
                _0x33e35f.Z +
                " --> " +
                _0x2d5769 +
                " \uD83D\uDCCD\n\u2022 @" +
                _0x33e35f.Y +
                " --> " +
                _0x9577dd +
                " \uD83D\uDCCD\n\nGames Draw, Tidak Ada Pemenang"),
              hisoka.sendMessage(
                bot.chat,
                {
                  text: _0xd3dc8c,
                  mentions: [
                    _0x33e35f.Z + "@s.whatsapp.net",
                    _0x33e35f.Y + "@s.whatsapp.net",
                  ],
                },
                { quoted: bot }
              ),
              deleteCasino(bot.chat));
          }
        }
      }
    }
    if (bot.isGroup && !bot.key.fromMe) {
      let _0x5a7103 = [
        ...new Set([
          ...(bot.mentionedJid || []),
          ...(bot.quoted ? [bot.quoted.sender] : []),
        ]),
      ];
      for (let _0x56f989 of _0x5a7103) {
        if (afk.checkAfkUser(_0x56f989, _afk)) {
          let _0x52587b = afk.getAfkId(_0x56f989, _afk),
            _0x3ab8fa = afk.getAfkReason(_0x52587b, _afk),
            _0x15253e = Date.now() - afk.getAfkTime(_0x52587b, _afk),
            _0x3c4e61 = ms(_0x15253e);
          _0x54ae70(
            "Jangan tag, dia sedang afk\n\n*Reason :* " +
              _0x3ab8fa +
              "\n*Sejak :* " +
              _0x3c4e61.hours +
              " jam, " +
              _0x3c4e61.minutes +
              " menit, " +
              _0x3c4e61.seconds +
              " detik yg lalu\n"
          );
        }
      }
      if (afk.checkAfkUser(bot.sender, _afk)) {
        let _0x5b8a6b = afk.getAfkId(bot.sender, _afk),
          _0x3f2870 = afk.getAfkReason(_0x5b8a6b, _afk),
          _0x214c98 = Date.now() - afk.getAfkTime(_0x5b8a6b, _afk),
          _0x4a10ad = ms(_0x214c98);
        _afk.splice(afk.getAfkPosition(bot.sender, _afk), 1);
        fs.writeFileSync("./database/afk.json", JSON.stringify(_afk));
        hisoka.sendTextWithMentions(
          bot.chat,
          "@" +
            bot.sender.split("@")[0] +
            " telah kembali dari afk\n\n*Reason :* " +
            _0x3f2870 +
            "\n*Selama :* " +
            _0x4a10ad.hours +
            " jam " +
            _0x4a10ad.minutes +
            " menit " +
            _0x4a10ad.seconds +
            " detik\n",
          bot
        );
      }
    }
    switch (command) {
      case "chika":
      case "rikagusriani":
      case "bocil":
      case "geayubi":
      case "santuy":
      case "ukhty":
      case "asupan":
      case "delvira":
      case "ayu":
      case "bunga":
      case "aura":
      case "nisa":
      case "ziva":
      case "yana":
      case "viona":
      case "syania":
      case "riri":
      case "syifa":
      case "mama_gina":
      case "alcakenya":
      case "mangayutri":
        {
          _0x54ae70(mess.wait);
          const _0x1a69a5 = {
            url:
              "https://api.zeeoneofc.xyz/api/asupan/" +
              command +
              "?apikey=" +
              ownerBio.BotKey,
            mimetype: "video/mp4",
          };
          const _0x375741 = {
            video: _0x1a69a5,
            caption: "Asupan guys \uD83D\uDE0B",
          };
          hisoka.sendMessage(bot.chat, _0x375741, {
            quoted: bot,
          });
        }
        break;
      case "baka":
      case "smug":
      case "neko_sfw":
      case "hentai_gif":
      case "spank":
      case "blowjob":
      case "cumarts":
      case "eroyuri":
      case "eroneko":
      case "erokemonomimi":
      case "erokitsune":
      case "ero":
      case "feet":
      case "erofeet":
      case "feetgif":
      case "femdom":
      case "futanari":
      case "hentai":
      case "holoero":
      case "holo":
      case "keta":
      case "kitsune":
      case "kemonomimi":
      case "pussyart":
      case "pussywankgif":
      case "girl_solo":
      case "girl_solo_gif":
      case "tits":
      case "trap":
      case "yuri":
      case "avatar2":
      case "anal":
      case "bj":
      case "boobs":
      case "classic":
      case "cumsluts":
      case "kuni":
      case "lesbian":
      case "neko":
      case "neko_gif":
      case "ahegao":
      case "bdsm":
      case "cuckold":
      case "cum":
      case "foot":
      case "gangbang":
      case "glasses":
      case "jahy":
      case "masturbation":
      case "nsfw_neko":
      case "orgy":
      case "panties":
      case "tentacles":
      case "thighs":
      case "zettai":
        {
          if (!bot.isGroup) {
            return bot.reply(mess.OnlyGrup);
          }
          if (!nsfwck && !bot.key.fromMe && !isCreator) {
            return bot.reply("Fitur nsfw belum di aktifkan");
          }
          _0x54ae70(mess.wait);
          let _0x14772f = await getBuffer(
            "https://api.zeeoneofc.xyz/api/nsfw/" +
              command +
              "?apikey=" +
              ownerBio.BotKey
          );
          const _0x4694e6 = {
            image: _0x14772f,
            caption: "Hentai Nya guys \uD83D\uDE0B",
          };
          await hisoka.sendMessage(bot.chat, _0x4694e6, {
            quoted: bot,
          });
        }
        break;
      case "sewabot":
        {
          const { sewanya: _0xfab887 } = require("./help");
          bot.reply("" + _0xfab887);
        }
        break;
      case "menu":
      case "help":
        {
          _0x250c09("#menu", bot.sender, _cmd);
          let _0x2f2c70 = _0x763a2c(1, 1);
          var { download: _0x4f5253, upload: _0x1224df } =
            await checkBandwidth();
          let _0x48a431 = await hisoka.reSize("" + ownerBio.pathimg, 300, 300);
          const _0x17203a = {
            buttonId: ".owner",
            buttonText: {},
            type: 1,
          };
          _0x17203a.buttonText.displayText = "Owner";
          const _0x293651 = {
            buttonId: ".ping",
            buttonText: {},
            type: 1,
          };
          _0x293651.buttonText.displayText = "Speed";
          let _0x138f1a = [_0x17203a, _0x293651],
            _0x203b3b = {
              document: fs.readFileSync(ownerBio.pathimg),
              jpegThumbnail: fs.readFileSync(ownerBio.pathimg),
              mimetype:
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
              fileName: botName,
              fileLength: 88789091000000000,
              pageCount: 999,
              caption: _0x45598b(
                _0x5266a5,
                skyZoneString,
                pushname,
                _0x2f2c70,
                _0x1224df,
                _0x4f5253,
                ownerName,
                botName,
                _0x52032e,
                tanggal,
                runtime,
                isCreator,
                isPremium,
                bot.sender,
                limitCount,
                limit,
                _0xc3b69b,
                glimit,
                balance,
                prefix
              ),
              footer: botName,
              buttons: _0x138f1a,
              headerType: 4,
              contextInfo: {
                externalAdReply: {
                  title: "Bot WhatsApp Md",
                  mediaType: 1,
                  renderLargerThumbnail: true,
                  showAdAttribution: true,
                  jpegThumbnail: fs.readFileSync(ownerBio.pathimg),
                  mediaUrl: "" + ownerBio.instagram,
                  thumbnail: fs.readFileSync(ownerBio.pathimg),
                  sourceUrl: "" + ownerBio.instagram,
                },
              },
            };
          const _0x20fcba = { quoted: _0x16ddfe };
          hisoka.sendMessage(bot.chat, _0x203b3b, _0x20fcba);
        }
        break;
      case "infobot":
      case "info":
      case "botinfo":
        {
          _0x250c09("#infobot", bot.sender, _cmd);
          let _0x5f4196 = await hisoka.reSize("" + ownerBio.pathimg, 300, 300);
          var _0x1f8d34 =
            "_*" +
            botName +
            " Information*_\n\n*\u2022 Name :* " +
            hisoka.user.name +
            "\n*\u2022 Number :* " +
            botNumber.split("@")[0] +
            "\n*\u2022 Owner :* " +
            prefix +
            "owner\n*\u2022 Total Pengguna :* " +
            user.length +
            "\n*\u2022 Prefix :* " +
            prefix +
            "\n";
          const _0x233333 = { displayText: "\uD83D\uDC51 Owner" };
          const _0x549c2c = {
            buttonId: ".owner",
            buttonText: _0x233333,
            type: 1,
          };
          const _0x98b7f8 = { displayText: "Donasi \uD83D\uDCB0" };
          const _0x4c51e2 = {
            buttonId: ".donasi",
            buttonText: _0x98b7f8,
            type: 1,
          };
          hisoka.sendButLoc(
            bot.chat,
            "" + _0x1f8d34,
            _0xcd848b,
            _0x5f4196,
            [_0x549c2c, _0x4c51e2],
            {
              userJid: bot.chat,
              quoted: bot,
            }
          );
        }
        break;
      case "donate":
      case "donasi":
        _0x250c09("#donate", bot.sender, _cmd),
          hisoka.sendMessage(
            bot.chat,
            {
              image: fs.readFileSync(ownerBio.fotoDonasi),
              caption: _0x2579f7(pushname, ownerNumber).split("@")[0],
            },
            { quoted: bot }
          );
        break;
      case "dashboard":
        _0x250c09("#dashboard", bot.sender, _cmd);
        var _0x5703ba = await _0x302128(bot.sender, _cmdUser);
        _cmdUser[_0x5703ba].db.sort((_0x240cb3, _0x2056da) =>
          _0x240cb3.count < _0x2056da.count ? 1 : -1
        ),
          _cmd.sort((_0x278aec, _0x48e41d) =>
            _0x278aec.count < _0x48e41d.count ? 1 : -1
          );
        var _0x5703ba = await _0x302128(bot.sender, _cmdUser),
          _0x16888f = _cmd.length;
        if (_0x16888f > 10) {
          _0x16888f = 10;
        }
        var _0xb589e8 = _cmdUser[_0x5703ba].db.length;
        if (_0xb589e8 > 5) {
          _0xb589e8 = 5;
        }
        var _0x511d97 = 0;
        for (let _0x4f88e7 of _cmdUser[_0x5703ba].db) {
          _0x511d97 = _0x511d97 + _0x4f88e7.count;
        }
        var _0x210245 = 0;
        for (let _0x130a93 of _cmd) {
          _0x210245 = _0x210245 + _0x130a93.count;
        }
        var _0x48c355 =
          "*\u221A DASHBOARD*\n\n*HIT*\n\u2022 GLOBAL : " +
          _0x210245 +
          "\n\u2022 USER : " +
          _0x511d97 +
          "\n\n";
        _0x48c355 += "*Most Command Global*\n";
        for (let _0x433cc2 = 0; _0x433cc2 < _0x16888f; _0x433cc2++) {
          _0x48c355 +=
            "\u2022 " +
            _cmd[_0x433cc2].nama +
            " : " +
            _cmd[_0x433cc2].count +
            "\n";
        }
        _0x48c355 += "\n*Most Command User*\n";
        for (let _0x379876 = 0; _0x379876 < _0xb589e8; _0x379876++) {
          _0x48c355 +=
            "\u2022 " +
            _cmdUser[_0x5703ba].db[_0x379876].nama +
            " : " +
            _cmdUser[_0x5703ba].db[_0x379876].count +
            "\n";
        }
        _0x54ae70(_0x48c355);
        break;
      case "owner":
      case "creator":
        {
          hisoka.sendContact(
            bot.chat,
            ownerNumber.map((_0x3184de) => _0x3184de.split("@")[0]),
            bot
          );
        }
        break;
      case "cekdrive":
      case "drive":
        var _0x2dce13 = await nou.drive.info();
        _0x250c09("#cekdrive", bot.sender, _cmd),
          _0x54ae70(
            "*Drive Server Info*\n\n *\u2022 Total :* " +
              _0x2dce13.totalGb +
              " GB\n *\u2022 Used :* " +
              _0x2dce13.usedGb +
              " GB (" +
              _0x2dce13.usedPercentage +
              "%)\n *\u2022 Free :* " +
              _0x2dce13.freeGb +
              " GB (" +
              _0x2dce13.freePercentage +
              "%)"
          );
        break;
      case "cekbandwidth":
      case "bandwidth":
        _0x54ae70(mess.wait), _0x250c09("#cekbandwidth", bot.sender, _cmd);
        var { download: _0x4f5253, upload: _0x1224df } = await checkBandwidth();
        _0x54ae70(
          "*Bandwidth Server*\n\n*>* Upload : " +
            _0x1224df +
            "\n*>* Download : " +
            _0x4f5253
        );
        break;
      case "cekprem":
      case "cekpremium":
        if (!isPremium) {
          return bot.reply(
            "Kamu bukan user premium, kirim perintah *" +
              prefix +
              "daftarprem* untuk membeli premium"
          );
        }
        _0x250c09("#cekpremium", bot.sender, _cmd);
        if (isCreator) {
          return bot.reply("Khusus user aja bkn untuk owner");
        }
        if (_prem.getPremiumExpired(bot.sender, premium) == "PERMANENT") {
          return bot.reply("PERMANENT");
        }
        let _0x3e67dc = ms(
            _prem.getPremiumExpired(bot.sender, premium) - Date.now()
          ),
          _0x4a38d0 =
            "*Expire :* " +
            _0x3e67dc.days +
            " day(s) " +
            _0x3e67dc.hours +
            " hour(s) " +
            _0x3e67dc.minutes +
            " minute(s)";
        _0x54ae70(_0x4a38d0);
        break;
      case "listpremium":
      case "listprem":
        _0x250c09("#listpremium", bot.sender, _cmd);
        let _0x2ec610 =
            "*List Premium User*\nJumlah : " + premium.length + "\n\n",
          _0x41773d = [];
        for (let _0x2121bf of premium) {
          _0x41773d.push(_0x2121bf.id);
          _0x2ec610 += "*ID :* @" + _0x2121bf.id.split("@")[0] + "\n";
          if (_0x2121bf.expired === "PERMANENT") {
            let _0x7aaca6 = "PERMANENT";
            _0x2ec610 += "*Expire :* PERMANENT\n\n";
          } else {
            let _0x5bd165 = ms(_0x2121bf.expired - Date.now());
            _0x2ec610 +=
              "*Expire :* " +
              _0x5bd165.days +
              " day(s) " +
              _0x5bd165.hours +
              " hour(s) " +
              _0x5bd165.minutes +
              " minute(s) " +
              _0x5bd165.seconds +
              " second(s)\n\n";
          }
        }
        hisoka.sendTextWithMentions(bot.chat, _0x2ec610, bot);
        break;
      case "listsewa":
        let _0x23f043 = "*LIST-SEWA-GROUP*\n\n*Total:* " + sewa.length + "\n\n",
          _0x28078c = [];
        for (let _0x26bfc3 of sewa) {
          _0x250c09("#listsewa", bot.sender, _cmd);
          _0x23f043 +=
            "*Name:* " +
            (await _0xe84902(_0x26bfc3.id)) +
            "\n*ID :* " +
            _0x26bfc3.id +
            "\n";
          if (_0x26bfc3.expired === "PERMANENT") {
            let _0x4767d6 = "PERMANENT";
            _0x23f043 += "*Expire :* PERMANENT\n\n";
          } else {
            let _0x229be9 = ms(_0x26bfc3.expired - Date.now());
            _0x23f043 +=
              "*Expire :* " +
              _0x229be9.days +
              " day(s) " +
              _0x229be9.hours +
              " hour(s) " +
              _0x229be9.minutes +
              " minute(s) " +
              _0x229be9.seconds +
              " second(s)\n\n";
          }
        }
        const _0x241da5 = {};
        (_0x241da5.text = _0x23f043),
          hisoka.sendMessage(bot.chat, _0x241da5, {
            quoted: bot,
          });
        break;
      case "speed":
      case "ping":
        _0x250c09("#speed", bot.sender, _cmd),
          _0x54ae70(_0x22593e.toFixed(4) + " Second");
        break;
      case "runtime":
        _0x250c09("#runtime", bot.sender, _cmd),
          _0x54ae70("" + runtime(process.uptime()));
        break;
      case "listbahasa":
        _0x250c09("#listbahasa", bot.sender, _cmd);
        var _0x2a3732 = ["auto", "isSupported", "getCode"],
          _0x48c355 = "List Bahasa Yang Tersedia\n\n";
        for (let _0xceab in translate.languages) {
          if (!_0x2a3732.includes(_0xceab)) {
            _0x48c355 +=
              "*" + _0xceab + "* untuk " + translate.languages[_0xceab] + "\n";
          }
        }
        _0x54ae70(_0x48c355);
        break;
      case "stiker":
      case "sticker":
      case "s":
      case "stickergif":
      case "sgif":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          _0x250c09("#sticker", bot.sender, _cmd);
          if (!fatkuns) {
            return bot.reply(
              "Balas Video/Image Dengan Caption " + (prefix + command)
            );
          }
          if (/image/.test(mime)) {
            let _0x2e61df = await fatkuns.download();
            const _0x4691e2 = {
              packname: ownerBio.botName,
              author: ownerBio.ownerName,
            };
            let _0x5da873 = await hisoka.sendImageAsSticker(
              bot.chat,
              _0x2e61df,
              bot,
              _0x4691e2
            );
            await fs.unlinkSync(_0x5da873);
          } else {
            if (/video/.test(mime)) {
              if ((fatkuns.msg || fatkuns).seconds > 11) {
                return bot.reply("Maksimal 10 detik!");
              }
              let _0x208c43 = await fatkuns.download();
              const _0x30df3e = {
                packname: ownerBio.botName,
                author: ownerBio.ownerName,
              };
              let _0x5841e2 = await hisoka.sendVideoAsSticker(
                bot.chat,
                _0x208c43,
                bot,
                _0x30df3e
              );
              await fs.unlinkSync(_0x5841e2);
            } else {
              return bot.reply(
                "Balas Video/Image Dengan Caption " + (prefix + command)
              );
            }
          }
        }
        break;
      case "stickerwm":
      case "swm":
      case "stickergifwm":
      case "sgifwm":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!fatkuns) {
            return bot.reply(
              "Balas Video/Image Dengan Caption " +
                (prefix + command) +
                " teks1|teks2"
            );
          }
          _0x250c09("#stickerwm", bot.sender, _cmd);
          let [_0x4adabf, _0x1ce2f0] = text.split`|`;
          if (!_0x4adabf) {
            return bot.reply(
              "Balas Video/Image Dengan Caption " +
                (prefix + command) +
                " teks1|teks2"
            );
          }
          if (!_0x1ce2f0) {
            return bot.reply(
              "Balas Video/Image Dengan Caption " +
                (prefix + command) +
                " teks1|teks2"
            );
          }
          bot.reply(mess.wait);
          if (/image/.test(mime)) {
            let _0x2ef528 = await fatkuns.download();
            const _0x2e5346 = {
              packname: _0x4adabf,
              author: _0x1ce2f0,
            };
            let _0x568769 = await hisoka.sendImageAsSticker(
              bot.chat,
              _0x2ef528,
              bot,
              _0x2e5346
            );
            await fs.unlinkSync(_0x568769);
          } else {
            if (/video/.test(mime)) {
              if ((fatkuns.msg || fatkuns).seconds > 11) {
                return bot.reply("Maksimal 10 detik!");
              }
              let _0x4bf0b5 = await fatkuns.download();
              const _0x4c9af4 = {
                packname: _0x4adabf,
                author: _0x1ce2f0,
              };
              let _0x527d0c = await hisoka.sendVideoAsSticker(
                bot.chat,
                _0x4bf0b5,
                bot,
                _0x4c9af4
              );
              await fs.unlinkSync(_0x527d0c);
            } else {
              _0x54ae70(
                "Balas Video/Image Dengan Caption " +
                  (prefix + command) +
                  " teks1|teks2"
              );
            }
          }
        }
        break;
      case "smeme":
      case "stickmeme":
      case "stikmeme":
      case "stickermeme":
      case "stikermeme":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          _0x250c09("#smeme", bot.sender, _cmd);
          if (!/webp/.test(mime) && /image/.test(mime)) {
            bot.reply(mess.wait);
            atas = text.split("|")[0] ? text.split("|")[0] : "-";
            bawah = text.split("|")[1] ? text.split("|")[1] : "-";
            mee = await hisoka.downloadAndSaveMediaMessage(fatkuns);
            mem = await TelegraPh(mee);
            let _0x5770b8 =
              "https://api.memegen.link/images/custom/" +
              encodeURIComponent(atas) +
              "/" +
              encodeURIComponent(bawah) +
              ".png?background=" +
              mem;
            const _0x42dd12 = {
              packname: ownerBio.botName,
              author: ownerBio.ownerName,
            };
            let _0x15319d = await hisoka.sendImageAsSticker(
              bot.chat,
              _0x5770b8,
              bot,
              _0x42dd12
            );
            await fs.unlinkSync(_0x15319d);
          } else {
            _0x54ae70(
              "Kirim/reply image dengan caption " +
                (prefix + command) +
                " text1|text2"
            );
          }
        }
        break;
      case "toimage":
      case "toimg":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          _0x250c09("#toimage", bot.sender, _cmd);
          if (!fatkuns) {
            return bot.reply("Reply Image");
          }
          if (!/webp/.test(mime)) {
            return bot.reply(
              "Balas sticker dengan caption *" + (prefix + command) + "*"
            );
          }
          bot.reply(mess.wait);
          let _0x3ec562 = await hisoka.downloadAndSaveMediaMessage(fatkuns),
            _0x4b2eaf = await getRandom(".png");
          exec("ffmpeg -i " + _0x3ec562 + " " + _0x4b2eaf, (_0x1a064f) => {
            fs.unlinkSync(_0x3ec562);
            if (_0x1a064f) {
              throw _0x1a064f;
            }
            let _0x4195d8 = fs.readFileSync(_0x4b2eaf);
            const _0x5c7a69 = { image: _0x4195d8 };
            hisoka.sendMessage(bot.chat, _0x5c7a69, {
              quoted: bot,
            });
            fs.unlinkSync(_0x4b2eaf);
          });
        }
        break;
      case "tomp3":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          _0x250c09("#tomp3", bot.sender, _cmd);
          if (!/video/.test(mime) && !/audio/.test(mime)) {
            return bot.reply(
              "Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption " +
                (prefix + command)
            );
          }
          if (!fatkuns) {
            return bot.reply(
              "Reply Video/Vn Yang Ingin Dijadikan MP3 Dengan Caption " +
                (prefix + command)
            );
          }
          bot.reply(mess.wait);
          let _0x5c0f0c = await fatkuns.download(),
            { toAudio: _0x144ef8 } = require("../lib/converter"),
            _0x407401 = await _0x144ef8(_0x5c0f0c, "mp4");
          hisoka.sendMessage(
            bot.chat,
            {
              document: _0x407401,
              mimetype: "audio/mpeg",
              fileName: "Convert By " + hisoka.user.name + ".mp3",
            },
            { quoted: bot }
          );
        }
        break;
      case "ttp":
      case "attp":
        if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
          return bot.reply(
            "Limit kamu sudah habis silahkan kirim " +
              prefix +
              "limit untuk mengecek limit"
          );
        }
        _0x250c09("#attp", bot.sender, _cmd);
        if (!text) {
          return bot.reply("Example : " + (prefix + command) + " text");
        }
        bot.reply(mess.wait);
        const _0x391b20 = {};
        (_0x391b20.packname = ownerBio.botName),
          (_0x391b20.author = ownerBio.ownerName);
        let _0x3512b4 = await hisoka.sendMediaAsSticker(
          bot.chat,
          "https://xteam.xyz/" + command + "?file&text=" + text,
          bot,
          _0x391b20
        );
        await fs.unlinkSync(_0x3512b4);
        break;
      case "emojimix":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          _0x250c09("#emojimix", bot.sender, _cmd);
          let [_0x412f04, _0x5df61] = text.split`+`;
          if (!_0x412f04) {
            return bot.reply(
              "Example : " + (prefix + command) + " \uD83D\uDE05+\uD83D\uDCA9"
            );
          }
          if (!_0x5df61) {
            return bot.reply(
              "Example : " + (prefix + command) + " \uD83D\uDE05+\uD83D\uDCA9"
            );
          }
          let _0x119ba0 = await fetchJson(
            "https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" +
              encodeURIComponent(_0x412f04) +
              "_" +
              encodeURIComponent(_0x5df61)
          );
          for (let _0x18e0a9 of _0x119ba0.results) {
            let _0x5c843d = await hisoka.sendImageAsSticker(
              bot.chat,
              _0x18e0a9.url,
              bot,
              {
                packname: ownerBio.botName,
                author: ownerBio.ownerName,
                categories: _0x18e0a9.tags,
              }
            );
            await fs.unlinkSync(_0x5c843d);
          }
        }
        break;
      case "nulis":
        _0x250c09("#nulis", bot.sender, _cmd),
          _0x54ae70(
            "*Pilihan Fitur Nulis*\n1. " +
              prefix +
              "nuliskiri\n2. " +
              prefix +
              "nuliskanan\n3. " +
              prefix +
              "foliokiri\n4. " +
              prefix +
              "foliokanan\n\nContoh:\n" +
              prefix +
              "nuliskiri Subscribe Ya https://youtube.com/c/zeeoneofc"
          );
        break;
      case "nuliskiri":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " text\n\nContoh : " +
                command +
                " haruka"
            );
          }
          _0x54ae70(mess.wait);
          const _0x1203d9 = body.slice(11);
          _0x250c09("#nuliskiri", bot.sender, _cmd);
          const _0x48a444 = _0x1203d9.replace(/(\S+\s*){1,9}/g, "$&\n"),
            _0x36ad91 = _0x48a444.split("\n").slice(0, 31).join("\n");
          spawn("convert", [
            "./media/nulis/images/buku/sebelumkiri.jpg",
            "-font",
            "./media/nulis/font/Indie-Flower.ttf",
            "-size",
            "960x1280",
            "-pointsize",
            "22",
            "-interline-spacing",
            "2",
            "-annotate",
            "+140+153",
            _0x36ad91,
            "./media/nulis/images/buku/setelahkiri.jpg",
          ])
            .on("error", () => _0x54ae70(mess.error.api))
            .on("exit", () => {
              hisoka.sendMessage(
                bot.chat,
                {
                  caption: "Lain kali tulis sendiri",
                  image: fs.readFileSync(
                    "./media/nulis/images/buku/setelahkiri.jpg"
                  ),
                },
                {
                  quoted: bot,
                  thumbnail: Buffer.alloc(0),
                }
              );
              limitAdd(bot.sender, limit);
            });
        }
        break;
      case "nuliskanan":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " text\n\nContoh : " +
                command +
                " haruka"
            );
          }
          _0x54ae70(mess.wait);
          const _0x1d5153 = body.slice(12);
          _0x250c09("#nuliskanan", bot.sender, _cmd);
          const _0x2f6fa1 = _0x1d5153.replace(/(\S+\s*){1,9}/g, "$&\n"),
            _0x1467d3 = _0x2f6fa1.split("\n").slice(0, 31).join("\n");
          spawn("convert", [
            "./media/nulis/images/buku/sebelumkanan.jpg",
            "-font",
            "./media/nulis/font/Indie-Flower.ttf",
            "-size",
            "960x1280",
            "-pointsize",
            "23",
            "-interline-spacing",
            "2",
            "-annotate",
            "+128+129",
            _0x1467d3,
            "./media/nulis/images/buku/setelahkanan.jpg",
          ])
            .on("error", () => _0x54ae70(mess.error.api))
            .on("exit", () => {
              hisoka.sendMessage(
                bot.chat,
                {
                  caption: "Lain kali tulis sendiri",
                  image: fs.readFileSync(
                    "./media/nulis/images/buku/setelahkanan.jpg"
                  ),
                },
                {
                  quoted: bot,
                  thumbnail: Buffer.alloc(0),
                }
              ),
                limitAdd(bot.sender, limit);
            });
        }
        break;
      case "foliokiri":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " text\n\nContoh : " +
                command +
                " haruka"
            );
          }
          _0x54ae70(mess.wait);
          const _0x4af774 = body.slice(11);
          _0x250c09("#foliokiri", bot.sender, _cmd);
          const _0x54eb11 = _0x4af774.replace(/(\S+\s*){1,13}/g, "$&\n"),
            _0x3ffb76 = _0x54eb11.split("\n").slice(0, 38).join("\n");
          spawn("convert", [
            "./media/nulis/images/folio/sebelumkiri.jpg",
            "-font",
            "./media/nulis/font/Indie-Flower.ttf",
            "-size",
            "1720x1280",
            "-pointsize",
            "23",
            "-interline-spacing",
            "4",
            "-annotate",
            "+48+185",
            _0x3ffb76,
            "./media/nulis/images/folio/setelahkiri.jpg",
          ])
            .on("error", () => _0x54ae70(mess.error.api))
            .on("exit", () => {
              hisoka.sendMessage(
                bot.chat,
                {
                  caption: "Lain kali tulis sendiri",
                  image: fs.readFileSync(
                    "./media/nulis/images/folio/setelahkiri.jpg"
                  ),
                },
                {
                  quoted: bot,
                  thumbnail: Buffer.alloc(0),
                }
              );
              limitAdd(bot.sender, limit);
            });
        }
        break;
      case "foliokanan":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " text\n\nContoh : " +
                command +
                " haruka"
            );
          }
          _0x54ae70(mess.wait);
          const _0x33d19d = body.slice(12);
          _0x250c09("#foliokanan", bot.sender, _cmd);
          const _0xc2f0a4 = _0x33d19d.replace(/(\S+\s*){1,13}/g, "$&\n"),
            _0x43d15a = _0xc2f0a4.split("\n").slice(0, 38).join("\n");
          spawn("convert", [
            "./media/nulis/images/folio/sebelumkanan.jpg",
            "-font",
            "./media/nulis/font/Indie-Flower.ttf",
            "-size",
            "960x1280",
            "-pointsize",
            "23",
            "-interline-spacing",
            "3",
            "-annotate",
            "+89+190",
            _0x43d15a,
            "./media/nulis/images/folio/setelahkanan.jpg",
          ])
            .on("error", () => _0x54ae70(mess.error.api))
            .on("exit", () => {
              hisoka.sendMessage(
                bot.chat,
                {
                  caption: "Lain kali tulis sendiri",
                  image: fs.readFileSync(
                    "./media/nulis/images/folio/setelahkanan.jpg"
                  ),
                },
                {
                  quoted: bot,
                  thumbnail: Buffer.alloc(0),
                }
              );
              limitAdd(bot.sender, limit);
            });
        }
        break;
      case "say":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Your limit is over, please send " +
                prefix +
                "limit to check the limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Use in a way " +
                command +
                " text\n\nExample : " +
                command +
                " hello"
            );
          }
          _0x250c09("#say", bot.sender, _cmd);
          var _0x2fce0d = text.split("--")[1];
          if (!_0x2fce0d) {
            _0x2fce0d = "id";
          }
          long = "id";
          function _0x2888d4(_0x10a312, _0x3d1c44 = "id") {
            return new Promise((_0x15a7f2, _0x269045) => {
              try {
                let _0x37faf5 = gtts(_0x3d1c44),
                  _0x5620d4 = path.join(
                    __dirname,
                    "../lib",
                    1 * new Date() + ".wav"
                  );
                _0x37faf5.save(_0x5620d4, _0x10a312, () => {
                  _0x15a7f2(fs.readFileSync(_0x5620d4)),
                    fs.unlinkSync(_0x5620d4);
                });
              } catch (_0x1d1a32) {
                _0x269045(_0x1d1a32);
              }
            });
          }
          let _0x402e9e;
          try {
            _0x402e9e = await _0x2888d4(text, long);
          } catch (_0x4b1415) {
            bot.reply(_0x4b1415 + ""), (_0x402e9e = await _0x2888d4(text));
          } finally {
            const _0x686aa2 = {
              audio: _0x402e9e,
              mimetype: "audio/mpeg",
              ptt: true,
            };
            hisoka.sendMessage(bot.chat, _0x686aa2, {});
          }
          limitAdd(bot.sender, limit);
        }
        break;
      case "translate":
      case "tr":
        {
          if (!text) {
            return bot.reply(_0x2fce0d.TrLate(prefix, command));
          }
          let _0x31ff92 = bot.quoted
            ? fatkuns.text
            : fatkuns.text.split(args[0])[1];
          const _0x5202f1 = { to: args[0] };
          translate(_0x31ff92, _0x5202f1).then((_0x34f94f) => {
            hisoka.sendText(bot.chat, "" + _0x34f94f.text, bot);
          });
        }
        break;
      case "anonymous":
        {
          if (bot.isGroup) {
            return bot.reply("Fitur Tidak Dapat Digunakan Untuk Group!");
          }
          const _0x3c7d39 = {
            buttonId: ".start",
            buttonText: {},
            type: 1,
          };
          _0x3c7d39.buttonText.displayText = "CARI TEMAN";
          let _0x28a3c9 = [_0x3c7d39];
          await hisoka.sendButtonText(
            _0x1c7f6a.a,
            _0x28a3c9,
            "Hi " +
              (await hisoka.getName(bot.sender)) +
              " Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner",
            _0xcd848b,
            bot
          );
        }
        break;
      case "keluar":
      case "leave":
        {
          if (bot.isGroup) {
            return bot.reply("Fitur Tidak Dapat Digunakan Untuk Group!");
          }
          this.anonymous = this.anonymous ? this.anonymous : {};
          let _0x31e3f6 = Object.values(this.anonymous).find((_0x65447b) =>
            _0x65447b.check(bot.sender)
          );
          if (!_0x31e3f6) {
            const _0x46befe = {
              buttonId: ".start",
              buttonText: {},
              type: 1,
            };
            _0x46befe.buttonText.displayText = "Start";
            let _0x5cc4bf = [_0x46befe];
            await hisoka.sendButtonText(
              bot.chat,
              _0x5cc4bf,
              "Kamu Sedang Tidak Berada Di Sesi Anonymous"
            );
            throw false;
          }
          bot.reply("Berhasil keluar dari anonymous chat");
          let _0x42ebd5 = _0x31e3f6.other(bot.sender);
          if (_0x42ebd5) {
            await hisoka.sendText(
              _0x42ebd5,
              "Partner Telah Meninggalkan Sesi Anonymous",
              bot
            );
          }
          delete this.anonymous[_0x31e3f6.id];
          if (command === "leave") {
            break;
          }
        }
        break;
      case "mulai":
      case "start": {
        if (bot.isGroup) {
          return bot.reply("Fitur Tidak Dapat Digunakan Untuk Group!");
        }
        this.anonymous = this.anonymous ? this.anonymous : {};
        if (
          Object.values(this.anonymous).find((_0x1ce279) =>
            _0x1ce279.check(bot.sender)
          )
        ) {
          const _0x4a90bd = {
            buttonId: "keluar",
            buttonText: {},
            type: 1,
          };
          _0x4a90bd.buttonText.displayText = "Stop";
          let _0x64f958 = [_0x4a90bd];
          await hisoka.sendButtonText(
            bot.chat,
            _0x64f958,
            "Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda",
            hisoka.user.name,
            bot
          );
          throw false;
        }
        let _0x152ca1 = Object.values(this.anonymous).find(
          (_0x525702) =>
            _0x525702.state === "WAITING" && !_0x525702.check(bot.sender)
        );
        if (_0x152ca1) {
          const _0x2f7632 = {
            buttonId: "next",
            buttonText: {},
            type: 1,
          };
          _0x2f7632.buttonText.displayText = "Skip";
          const _0xde583b = {
            buttonId: "keluar",
            buttonText: {},
            type: 1,
          };
          _0xde583b.buttonText.displayText = "Stop";
          let _0x10aeec = [_0x2f7632, _0xde583b];
          await hisoka.sendButtonText(
            _0x152ca1.a,
            _0x10aeec,
            "Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan",
            hisoka.user.name,
            bot
          );
          _0x152ca1.b = bot.sender;
          _0x152ca1.state = "CHATTING";
          await hisoka.sendButtonText(
            _0x152ca1.b,
            _0x10aeec,
            "Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan",
            hisoka.user.name,
            bot
          );
        } else {
          let _0x4a832f = +new Date();
          this.anonymous[_0x4a832f] = {
            id: _0x4a832f,
            a: bot.sender,
            b: "",
            state: "WAITING",
            check: function (_0x98b27b = "") {
              return [this.a, this.b].includes(_0x98b27b);
            },
            other: function (_0x5e3678 = "") {
              return _0x5e3678 === this.a
                ? this.b
                : _0x5e3678 === this.b
                ? this.a
                : "";
            },
          };
          const _0x44a52f = {
            buttonId: "keluar",
            buttonText: {},
            type: 1,
          };
          _0x44a52f.buttonText.displayText = "Stop";
          let _0x2e9afa = [_0x44a52f];
          await hisoka.sendButtonText(
            bot.chat,
            _0x2e9afa,
            "Mohon Tunggu Sedang Mencari Partner",
            hisoka.user.name,
            bot
          );
        }
        break;
      }
      case "next":
      case "lanjut": {
        if (bot.isGroup) {
          return bot.reply("Fitur Tidak Dapat Digunakan Untuk Group!");
        }
        this.anonymous = this.anonymous ? this.anonymous : {};
        let _0x1e81a = Object.values(this.anonymous).find((_0x37b3dd) =>
          _0x37b3dd.check(bot.sender)
        );
        if (!_0x1e81a) {
          const _0x458d69 = {
            buttonId: "start",
            buttonText: {},
            type: 1,
          };
          _0x458d69.buttonText.displayText = "Start";
          let _0x527bff = [_0x458d69];
          await hisoka.sendButtonText(
            bot.chat,
            _0x527bff,
            "Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner"
          );
          throw false;
        }
        let _0x53c420 = _0x1e81a.other(bot.sender);
        if (_0x53c420) {
          await hisoka.sendText(
            _0x53c420,
            "Partner Telah Meninggalkan Sesi Anonymous",
            bot
          );
        }
        delete this.anonymous[_0x1e81a.id];
        let _0x268377 = Object.values(this.anonymous).find(
          (_0x51d092) =>
            _0x51d092.state === "WAITING" && !_0x51d092.check(bot.sender)
        );
        if (_0x268377) {
          const _0x20d43d = {
            buttonId: "next",
            buttonText: {},
            type: 1,
          };
          _0x20d43d.buttonText.displayText = "Skip";
          const _0x149ac8 = {
            buttonId: "keluar",
            buttonText: {},
            type: 1,
          };
          _0x149ac8.buttonText.displayText = "Stop";
          let _0x14ffe0 = [_0x20d43d, _0x149ac8];
          await hisoka.sendButtonText(
            _0x268377.a,
            _0x14ffe0,
            "Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan",
            hisoka.user.name,
            bot
          );
          _0x268377.b = bot.sender;
          _0x268377.state = "CHATTING";
          await hisoka.sendButtonText(
            _0x268377.b,
            _0x14ffe0,
            "Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan",
            hisoka.user.name,
            bot
          );
        } else {
          let _0x28cbaf = +new Date();
          this.anonymous[_0x28cbaf] = {
            id: _0x28cbaf,
            a: bot.sender,
            b: "",
            state: "WAITING",
            check: function (_0x407278 = "") {
              return [this.a, this.b].includes(_0x407278);
            },
            other: function (_0x12781f = "") {
              return _0x12781f === this.a
                ? this.b
                : _0x12781f === this.b
                ? this.a
                : "";
            },
          };
          const _0x3189c1 = {
            buttonId: "keluar",
            buttonText: {},
            type: 1,
          };
          _0x3189c1.buttonText.displayText = "Stop";
          let _0x2c57d0 = [_0x3189c1];
          await hisoka.sendButtonText(
            bot.chat,
            _0x2c57d0,
            "Mohon Tunggu Sedang Mencari Partner",
            hisoka.user.name,
            bot
          );
        }
        break;
      }
      case "sendprofile":
      case "sendprofil":
        if (bot.isGroup) {
          return bot.reply("Fitur Tidak Dapat Digunakan Untuk Group!");
        }
        this.anonymous = this.anonymous ? this.anonymous : {};
        let _0x3b0ac9 = Object.values(this.anonymous).find((_0x52d9cc) =>
          _0x52d9cc.check(bot.sender)
        );
        if (!_0x3b0ac9) {
          const _0x3be57b = {
            buttonId: ".start",
            buttonText: {},
            type: 1,
          };
          _0x3be57b.buttonText.displayText = "SEARCH";
          let _0x4136d7 = [_0x3be57b];
          await hisoka.sendButtonText(
            bot.chat,
            _0x4136d7,
            "\u26A0️ Kamu belum pernah memulai chat!",
            _0xcd848b,
            bot
          );
          throw false;
        } else {
          let _0x5b4305 = Object.values(this.anonymous).find(
            (_0xf87865) =>
              [_0xf87865.a, _0xf87865.b].includes(bot.sender) &&
              _0xf87865.state == "CHATTING"
          );
          var _0x355414 = _0x5b4305.other(bot.sender),
            _0x3e1fb6 = await hisoka.sendContact(_0x355414, [
              bot.sender.split("@")[0],
            ]);
          const _0x3619a0 = {
            text: "\u2705 Berhasil mengirim profil ke teman chat anda!",
          };
          const _0x2726df = { quoted: msg };
          hisoka.sendMessage(bot.chat, _0x3619a0, _0x2726df);
          const _0x1a5b84 = {
            text: "\uD83D\uDC68\uD83D\uDC69 Teman chat kamu memberikan kontak profil nya!",
          };
          const _0x3c0160 = { quoted: _0x3e1fb6 };
          hisoka.sendMessage(_0x355414, _0x1a5b84, _0x3c0160);
        }
        break;
      case "list":
      case "store":
        if (db_respon_list.length === 0) {
          return bot.reply("Belum ada list message di database");
        }
        if (!isAlreadyResponListGroup(bot.chat, db_respon_list)) {
          return bot.reply(
            "Belum ada list message yang terdaftar di group ini"
          );
        }
        var _0x29c691 = [];
        for (let _0x538495 of db_respon_list) {
          if (_0x538495.id === bot.chat) {
            const _0x201a82 = {
              title: _0x538495.key,
              rowId: _0x538495.key,
            };
            _0x29c691.push(_0x201a82);
          }
        }
        var _0x576c8d = {
          text: skyZoneString + " @" + bot.sender.split("@")[0],
          buttonText: "Click Here",
          footer: "List " + _0x47a9d4 + "\n\n" + _0xcd848b,
          mentions: [bot.sender],
          sections: [
            {
              title: _0x47a9d4,
              rows: _0x29c691,
            },
          ],
        };
        hisoka.sendMessage(bot.chat, _0x576c8d);
        break;
      case "dellist":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (db_respon_list.length === 0) {
          return bot.reply("Belum ada list message di database");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              (prefix + command) +
              " *key*\n\n_Contoh_\n\n" +
              (prefix + command) +
              " hello"
          );
        }
        if (!isAlreadyResponList(bot.chat, q, db_respon_list)) {
          return bot.reply(
            "List respon dengan key *" + q + "* tidak ada di database!"
          );
        }
        delResponList(bot.chat, q, db_respon_list),
          _0x54ae70("Sukses delete list message dengan key *" + q + "*");
        break;
      case "addlist":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        var _0x453f84 = q.split("|")[0],
          _0x1c0537 = q.split("|")[1];
        if (!q.includes("|")) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *key|response*\n\n_Contoh_\n\n" +
              command +
              " tes|apa"
          );
        }
        if (isAlreadyResponList(bot.chat, _0x453f84, db_respon_list)) {
          return bot.reply(
            "List respon dengan key : *" +
              _0x453f84 +
              "* sudah ada di group ini."
          );
        }
        if (/image/.test(mime)) {
          let _0x42a83b = await hisoka.downloadAndSaveMediaMessage(fatkuns);
          const _0x448d3c = new FormData();
          _0x448d3c.append("file", fs.readFileSync(_0x42a83b), ".tmp", ".jpg");
          fetch("https://telegra.ph/upload", {
            method: "POST",
            body: _0x448d3c,
          })
            .then((_0x511db7) => _0x511db7.json())
            .then((_0x158a32) => {
              addResponList(
                bot.chat,
                _0x453f84,
                _0x1c0537,
                true,
                "https://telegra.ph" + _0x158a32[0].src,
                db_respon_list
              );
              _0x54ae70(
                "Sukses set list message dengan key : *" + _0x453f84 + "*"
              );
              if (fs.existsSync(_0x42a83b)) {
                fs.unlinkSync(_0x42a83b);
              }
            });
        } else {
          addResponList(
            bot.chat,
            _0x453f84,
            _0x1c0537,
            false,
            "-",
            db_respon_list
          );
          _0x54ae70("Sukses set list message dengan key : *" + _0x453f84 + "*");
        }
        break;
      case "updatelist":
      case "update":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        var _0x453f84 = q.split("|")[0],
          _0x1c0537 = q.split("|")[1];
        if (!q.includes("|")) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *key|response*\n\n_Contoh_\n\n" +
              command +
              " tes|apa"
          );
        }
        if (!isAlreadyResponListGroup(bot.chat, db_respon_list)) {
          return bot.reply(
            "Maaf, untuk key *" + _0x453f84 + "* belum terdaftar di group ini"
          );
        }
        if (/image/.test(mime)) {
          let _0x160b1d = await hisoka.downloadAndSaveMediaMessage(fatkuns);
          const _0x2b96bb = new FormData();
          _0x2b96bb.append("file", fs.readFileSync(_0x160b1d), ".tmp", ".jpg");
          fetch("https://telegra.ph/upload", {
            method: "POST",
            body: _0x2b96bb,
          })
            .then((_0xb348f5) => _0xb348f5.json())
            .then((_0x4ea2e3) => {
              updateResponList(
                bot.chat,
                _0x453f84,
                _0x1c0537,
                true,
                "https://telegra.ph" + _0x4ea2e3[0].src,
                db_respon_list
              );
              _0x54ae70(
                "Sukses update respon list dengan key *" + _0x453f84 + "*"
              );
              if (fs.existsSync(_0x160b1d)) {
                fs.unlinkSync(_0x160b1d);
              }
            });
        } else {
          updateResponList(
            bot.chat,
            _0x453f84,
            _0x1c0537,
            false,
            "-",
            db_respon_list
          ),
            _0x54ae70(
              "Sukses update respon list dengan key *" + _0x453f84 + "*"
            );
        }
        break;
      case "jeda":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          if (!text) {
            return bot.reply(
              "kirim " +
                command +
                " waktu\nContoh: " +
                command +
                " 30m\n\nlist waktu:\ns = detik\nm = menit\nh = jam\nd = hari"
            );
          }
          opengc[bot.chat] = {
            id: bot.chat,
            time: Date.now() + toMS(text),
          };
          fs.writeFileSync("./database/opengc.json", JSON.stringify(opengc));
          hisoka
            .groupSettingUpdate(bot.chat, "announcement")
            .then((_0x5c8408) =>
              _0x54ae70("Sukses, group akan dibuka " + text + " lagi")
            )
            .catch((_0x4431ac) => _0x54ae70("Error"));
        }
        break;
      case "tambah":
        {
          if (!text.includes("+")) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *angka* + *angka*\n\n_Contoh_\n\n" +
                command +
                " 1+2"
            );
          }
          arg = args.join(" ");
          atas = arg.split("+")[0];
          bawah = arg.split("+")[1];
          var _0x28124d = Number(atas);
          var _0x9e5f74 = Number(bawah);
          _0x54ae70("" + (_0x28124d + _0x9e5f74));
        }
        break;
      case "kurang":
        {
          if (!text.includes("-")) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *angka* - *angka*\n\n_Contoh_\n\n" +
                command +
                " 1-2"
            );
          }
          arg = args.join(" ");
          atas = arg.split("-")[0];
          bawah = arg.split("-")[1];
          var _0x28124d = Number(atas);
          var _0x9e5f74 = Number(bawah);
          _0x54ae70("" + (_0x28124d - _0x9e5f74));
        }
        break;
      case "kali":
        {
          if (!text.includes("*")) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *angka* * *angka*\n\n_Contoh_\n\n" +
                command +
                " 1*2"
            );
          }
          arg = args.join(" ");
          atas = arg.split("*")[0];
          bawah = arg.split("*")[1];
          var _0x28124d = Number(atas);
          var _0x9e5f74 = Number(bawah);
          _0x54ae70("" + _0x28124d * _0x9e5f74);
        }
        break;
      case "bagi":
        {
          if (!text.includes("/")) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *angka* / *angka*\n\n_Contoh_\n\n" +
                command +
                " 1/2"
            );
          }
          arg = args.join(" ");
          atas = arg.split("/")[0];
          bawah = arg.split("/")[1];
          var _0x28124d = Number(atas);
          var _0x9e5f74 = Number(bawah);
          _0x54ae70("" + _0x28124d / _0x9e5f74);
        }
        break;
      case "p":
      case "proses":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!bot.quoted) {
            return bot.reply("Reply pesanan yang akan proses");
          }
          let _0xf1b427 = bot.quoted
              ? fatkuns.text
              : fatkuns.text.split(args[0])[1],
            _0x59d88e =
              "\u300C *TRANSAKSI PENDING* \u300D\n\n```\uD83D\uDCC6 TANGGAL : @tanggal\n\u231A JAM     : @jam\n\u2728 STATUS  : Pending```\n\n\uD83D\uDCDD Catatan :\n@pesanan\n\nPesanan @user sedang di proses!";
          const _0x449d70 = getTextSetProses(bot.chat, set_proses);
          if (_0x449d70 !== undefined) {
            var _0x377c2c = _0x449d70
              .replace("@pesanan", _0xf1b427 ? _0xf1b427 : "-")
              .replace("@user", "@" + bot.quoted.sender.split("@")[0])
              .replace("@jam", dateTimeNow)
              .replace("@tanggal", tanggal(new Date()))
              .replace("@user", "@" + bot.quoted.sender.split("@")[0]);
            hisoka.sendTextWithMentions(bot.chat, _0x377c2c, bot);
          } else {
            hisoka.sendTextWithMentions(
              bot.chat,
              _0x59d88e
                .replace("@pesanan", _0xf1b427 ? _0xf1b427 : "-")
                .replace("@user", "@" + bot.quoted.sender.split("@")[0])
                .replace("@jam", dateTimeNow)
                .replace("@tanggal", tanggal(new Date()))
                .replace("@user", "@" + bot.quoted.sender.split("@")[0]),
              bot
            );
          }
        }
        break;
      case "setproses":
      case "setp":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              (prefix + command) +
              " *teks*\n\n_Contoh_\n\n" +
              (prefix + command) +
              " Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) "
          );
        }
        if (isSetProses(bot.chat, set_proses)) {
          return bot.reply("Set proses already active");
        }
        addSetProses(text, bot.chat, set_proses),
          _0x54ae70("\u2705 Done set proses!");
        break;
      case "changeproses":
      case "changep":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              (prefix + command) +
              " *teks*\n\n_Contoh_\n\n" +
              (prefix + command) +
              " Pesanan sedang di proses ya @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) "
          );
        }
        if (isSetProses(bot.chat, set_proses)) {
          changeSetProses(text, bot.chat, set_proses);
          bot.reply("Sukses ubah set proses!");
        } else {
          addSetProses(text, bot.chat, set_proses);
          bot.reply("Sukses ubah set proses!");
        }
        break;
      case "delsetproses":
      case "delsetp":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!isSetProses(bot.chat, set_proses)) {
          return bot.reply("Belum ada set proses di gc ini");
        }
        removeSetProses(bot.chat, set_proses),
          _0x54ae70("Sukses delete set proses");
        break;
      case "setdone": {
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              (prefix + command) +
              " *teks*\n\n_Contoh_\n\n" +
              (prefix + command) +
              " Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) "
          );
        }
        if (isSetDone(bot.chat, set_done)) {
          return bot.reply("Udh set done sebelumnya");
        }
        addSetDone(text, bot.chat, set_done);
        _0x54ae70("Sukses set done!");
        break;
      }
      case "changedone":
      case "changed":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              (prefix + command) +
              " *teks*\n\n_Contoh_\n\n" +
              (prefix + command) +
              " Done @user\n\n- @user (tag org yg pesan)\n- @pesanan (pesanan)\n- @jam (waktu pemesanan)\n- @tanggal (tanggal pemesanan) "
          );
        }
        if (isSetDone(bot.chat, set_done)) {
          changeSetDone(text, bot.chat, set_done);
          bot.reply("Sukses ubah set done!");
        } else {
          addSetDone(text, bot.chat, set_done),
            bot.reply("Sukses ubah set done!");
        }
        break;
      case "delsetdone":
      case "delsetd":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!isSetDone(bot.chat, set_done)) {
          return bot.reply("Belum ada set done di gc ini");
        }
        removeSetDone(bot.chat, set_done), bot.reply("Sukses delete set done");
        break;
      case "d":
      case "done":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!bot.quoted) {
            return bot.reply("Reply pesanan yang telah di proses");
          }
          let _0x5a182a = bot.quoted
              ? fatkuns.text
              : fatkuns.text.split(args[0])[1],
            _0x1c7d4f =
              "\u300C *TRANSAKSI BERHASIL* \u300D\n\n```\uD83D\uDCC6 TANGGAL : @tanggal\n\u231A JAM     : @jam\n\u2728 STATUS  : Berhasil```\n\nTerimakasih @user Next Order ya\uD83D\uDE4F";
          const _0x4fe714 = getTextSetDone(bot.chat, set_done);
          if (_0x4fe714 !== undefined) {
            var _0x377c2c = _0x4fe714
              .replace("@pesanan", _0x5a182a ? _0x5a182a : "-")
              .replace("@user", "@" + bot.quoted.sender.split("@")[0])
              .replace("@jam", dateTimeNow)
              .replace("@tanggal", tanggal(new Date()))
              .replace("@user", "@" + bot.quoted.sender.split("@")[0]);
            hisoka.sendTextWithMentions(bot.chat, _0x377c2c, bot);
          } else {
            hisoka.sendTextWithMentions(
              bot.chat,
              _0x1c7d4f
                .replace("@pesanan", _0x5a182a ? _0x5a182a : "-")
                .replace("@user", "@" + bot.quoted.sender.split("@")[0])
                .replace("@jam", dateTimeNow)
                .replace("@tanggal", tanggal(new Date()))
                .replace("@user", "@" + bot.quoted.sender.split("@")[0]),
              bot
            );
          }
        }
        break;
      case "play":
      case "ytplay":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Example : " + (prefix + command) + " Cara membuat bot wa"
            );
          }
          await bot.reply(mess.wait);
          let _0x268bc6 = await fetchJson(
              "https://greetings.zeeoneofc2.repl.co/api/yts?q=" + text
            ),
            _0x6fa96 = _0x268bc6.result,
            _0x16b5f9 =
              "*YOUTUBE PLAY*\n\nあ ID : " +
              _0x6fa96.all[0].videoId +
              "\nあ Title : " +
              _0x6fa96.all[0].title +
              "\nあ Views : " +
              _0x6fa96.all[0].views +
              "\nあ Duration : " +
              _0x6fa96.all[0].timestamp +
              "\nあ Channel : " +
              _0x6fa96.all[0].author.name +
              "\nあ Upload : " +
              _0x6fa96.all[0].ago +
              "\nあ URL Video : " +
              _0x6fa96.videos[0].url +
              "\nあ Description : " +
              _0x6fa96.videos[0].description,
            _0xdb5042 = await getBuffer(_0x6fa96.all[0].image),
            _0x2be705 = await hisoka.reSize(_0xdb5042, 300, 300);
          const _0x3c9ccc = { displayText: "Video" };
          const _0x47f834 = {
            buttonId: "ytmp4 " + _0x6fa96.videos[0].url,
            buttonText: _0x3c9ccc,
            type: 1,
          };
          const _0x5dc07c = { displayText: "Audio" };
          const _0x29b656 = {
            buttonId: "ytmp3 " + _0x6fa96.videos[0].url,
            buttonText: _0x5dc07c,
            type: 1,
          };
          hisoka.sendButLoc(
            bot.chat,
            "" + _0x16b5f9,
            _0xcd848b,
            _0x2be705,
            [_0x47f834, _0x29b656],
            {
              userJid: bot.chat,
              quoted: bot,
            }
          );
        }
        break;
      case "ytmp3":
      case "ytaudio":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                (prefix + command) +
                " *url*\n\n_Contoh_\n\n" +
                (prefix + command) +
                " https://youtu.be/Bjf4lNfGl-w"
            );
          }
          if (!text.includes("youtu.be") && !text.includes("youtube.com")) {
            return bot.reply(
              "Gunakan dengan cara " +
                (prefix + command) +
                " *url*\n\n_Contoh_\n\n" +
                (prefix + command) +
                " https://youtu.be/Bjf4lNfGl-w"
            );
          }
          await bot.reply(mess.wait);
          const {
            youtubedl: _0x4646d7,
            youtubedlv2: _0x44d6d2,
            youtubedlv3: _0x117d0f,
          } = require("@bochilteam/scraper");
          limited = 100;
          jk = args[0];
          let _0x43f85c = db.data.chats[bot.chat];
          const _0x48bdec = /y(es)/gi.test(jk),
            {
              thumbnail: _0x18a789,
              audio: _0x3d943b,
              title: _0x19a5dc,
            } = await _0x4646d7(jk)
              .catch(async (_0x5cef64) => await _0x44d6d2(jk))
              .catch(async (_0x5a9dff) => await _0x117d0f(jk)),
            _0x4e0a67 = (isCreator ? 2000 : limited) * 1024;
          let _0x4f3063, _0x24466a, _0x40baef, _0x5ad1da, _0x35f7d7, _0x13785a;
          for (let _0x5ced11 in _0x3d943b) {
            try {
              _0x4f3063 = _0x3d943b[_0x5ced11];
              if (isNaN(_0x4f3063.fileSize)) {
                continue;
              }
              _0x13785a = _0x4e0a67 < _0x4f3063.fileSize;
              if (_0x13785a) {
                continue;
              }
              _0x5ad1da = await _0x4f3063.download();
              if (_0x5ad1da) {
                _0x40baef = await fetch(_0x5ad1da);
              }
              _0x13785a =
                _0x40baef?.headers.get("content-length") &&
                parseInt(_0x40baef.headers.get("content-length")) < _0x4e0a67;
              if (_0x13785a) {
                continue;
              }
              if (_0x40baef) {
                _0x24466a = await _0x40baef.arrayBuffer();
              }
              if (_0x24466a instanceof ArrayBuffer) {
                break;
              }
            } catch (_0x13b7cc) {
              _0x4f3063 = _0x5ad1da = _0x24466a = null;
              _0x35f7d7 = _0x13b7cc;
            }
          }
          if (
            (!(_0x24466a instanceof ArrayBuffer) ||
              !_0x5ad1da ||
              !_0x40baef.ok) &&
            !_0x13785a
          ) {
            throw "Error: " + (_0x35f7d7 || "Can't download audio");
          }
          let _0x5c9ffc = await getBuffer(_0x18a789);
          if (!_0x48bdec && !_0x13785a) {
            await hisoka.sendButLoc(
              bot.chat,
              "-----\u300C *YOUTUBE MP3* \u300D-----\n\n*\uD83D\uDCAC Title:* " +
                _0x19a5dc +
                "\n*\u25B6️ Size:* " +
                _0x4f3063.fileSizeH +
                "\n*" +
                (_0x13785a
                  ? "Untuk durasi lebih dari batas disajikan dalam bentuk link "
                  : "") +
                "Link:* " +
                _0x5ad1da,
              _0xcd848b,
              _0x5c9ffc,
              [
                {
                  buttonId: ".donasi",
                  buttonText: { displayText: "\uD83C\uDF82 Donasi" },
                  type: 1,
                },
                {
                  buttonId: ".owner",
                  buttonText: { displayText: "Owner \uD83D\uDC64" },
                  type: 1,
                },
              ],
              {
                userJid: bot.chat,
                quoted: bot,
              }
            );
          }
          const _0x5ed575 = { url: _0x5ad1da };
          const _0x248f16 = {
            audio: _0x5ed575,
            mimetype: "audio/mpeg",
          };
          if (!_0x13785a) {
            await hisoka
              .sendMessage(bot.chat, _0x248f16, { quoted: bot })
              .catch((_0x421a2c) => {
                _0x54ae70("Server eror");
              });
          }
        }
        break;
      case "ytmp4":
      case "ytvideo":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                (prefix + command) +
                " *url*\n\n_Contoh_\n\n" +
                (prefix + command) +
                " https://youtu.be/Bjf4lNfGl-w"
            );
          }
          if (!text.includes("youtu.be") && !text.includes("youtube.com")) {
            return bot.reply(
              "Gunakan dengan cara " +
                (prefix + command) +
                " *url*\n\n_Contoh_\n\n" +
                (prefix + command) +
                " https://youtu.be/Bjf4lNfGl-w"
            );
          }
          const {
            youtubedl: _0x332153,
            youtubedlv2: _0x4c9258,
            youtubedlv3: _0x5ec1f3,
          } = require("@bochilteam/scraper");
          limited = 100;
          jk = args[0];
          let _0x2e9840 = db.data.chats[bot.chat];
          const _0x5ddaa6 = /y(es)/gi.test(jk),
            {
              thumbnail: _0x3471ee,
              video: _0x33e551,
              title: _0x27e72b,
            } = await _0x332153(jk)
              .catch(async (_0x42f327) => await _0x4c9258(jk))
              .catch(async (_0x307fa3) => await _0x5ec1f3(jk)),
            _0x127554 = (isCreator ? 2000 : limited) * 1024;
          let _0x1dc8d4, _0x3169e0, _0x560f6e, _0x2b678d, _0x52274f, _0x314217;
          for (let _0x8d0381 in _0x33e551) {
            try {
              _0x1dc8d4 = _0x33e551[_0x8d0381];
              if (isNaN(_0x1dc8d4.fileSize)) {
                continue;
              }
              _0x314217 = _0x127554 < _0x1dc8d4.fileSize;
              if (_0x314217) {
                continue;
              }
              _0x2b678d = await _0x1dc8d4.download();
              if (_0x2b678d) {
                _0x560f6e = await fetch(_0x2b678d);
              }
              _0x314217 =
                _0x560f6e?.headers.get("content-length") &&
                parseInt(_0x560f6e.headers.get("content-length")) < _0x127554;
              if (_0x314217) {
                continue;
              }
              if (_0x560f6e) {
                _0x3169e0 = await _0x560f6e.arrayBuffer();
              }
              if (_0x3169e0 instanceof ArrayBuffer) {
                break;
              }
            } catch (_0xf5d4b0) {
              _0x1dc8d4 = _0x2b678d = _0x3169e0 = null;
              _0x52274f = _0xf5d4b0;
            }
          }
          if (
            (!(_0x3169e0 instanceof ArrayBuffer) ||
              !_0x2b678d ||
              !_0x560f6e.ok) &&
            !_0x314217
          ) {
            throw "Error: " + (_0x52274f || "Can't download video");
          }
          let _0x488204 = await getBuffer(_0x3471ee);
          if (!_0x5ddaa6 && !_0x314217) {
            await hisoka.sendButLoc(
              bot.chat,
              "-----\u300C *YOUTUBE MP4* \u300D-----\n\n*\uD83D\uDCAC Title:* " +
                _0x27e72b +
                "\n*\u25B6️ Size:* " +
                _0x1dc8d4.fileSizeH +
                "\n*" +
                (_0x314217
                  ? "Untuk durasi lebih dari batas disajikan dalam bentuk link"
                  : "") +
                "Link:* " +
                _0x2b678d,
              _0xcd848b,
              _0x488204,
              [
                {
                  buttonId: ".donasi",
                  buttonText: { displayText: "\uD83C\uDF82 Donasi" },
                  type: 1,
                },
                {
                  buttonId: ".owner",
                  buttonText: { displayText: "Owner \uD83D\uDC64" },
                  type: 1,
                },
              ],
              {
                userJid: bot.chat,
                quoted: bot,
              }
            );
          }
          const _0x1367cd = { url: _0x2b678d };
          const _0x5a2f8d = {
            video: _0x1367cd,
            mimetype: "video/mp4",
          };
          if (!_0x314217) {
            await hisoka
              .sendMessage(bot.chat, _0x5a2f8d, { quoted: bot })
              .catch((_0x54719b) => {
                _0x54ae70("Eror!!!");
              });
          }
        }
        break;
      case "instagram":
      case "ig":
      case "igdl":
      case "igphoto":
      case "instaphoto":
      case "instafoto":
      case "igfoto":
      case "igvideo":
      case "instavideo":
      case "instavid":
      case "igreels":
      case "instareels":
      case "instareel":
      case "igtv":
      case "instatv":
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              (prefix + command) +
              " *url*\n\n_Contoh_\n\n" +
              (prefix + command) +
              " https://www.instagram.com/reel/Cf6Ec_xPGcP/?igshid=YmMyMTA2M2Y="
          );
        }
        await bot.reply(mess.wait);
        const {
            instagramdl: _0x31745c,
            instagramdlv2: _0x4004ee,
            instagramdlv3: _0x57fa8d,
            instagramdlv4: _0x3bffb4,
            instagramStory: _0x54a8d5,
            instagramStoryv2: _0x2d5bc0,
          } = require("@bochilteam/scraper"),
          _0x18e991 = await _0x31745c(args[0])
            .catch(async (_0x2ae470) => await _0x4004ee(args[0]))
            .catch(async (_0x167ef8) => await _0x57fa8d(args[0]))
            .catch(async (_0x633685) => await _0x3bffb4(args[0]));
        for (const { url: _0x723944 } of _0x18e991)
          await _0x249097(
            bot.chat,
            _0x723944,
            "Request by " + pushname,
            bot
          ).catch((_0x454388) => {
            bot.reply(
              "Server sedang eror\nSilahkan cek link nya mungkin private. Jika tidak, ulangi command yang sama"
            );
          });
        break;
      case "tiktokwm":
      case "tiktoknowm":
      case "tiktok":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *url*\n\n_Contoh_\n\n" +
                command +
                " https://vt.tiktok.com/ZSR6gUyXN/?k=1"
            );
          }
          if (!isUrl(text)) {
            return bot.reply(mess.error.Iv);
          }
          if (!text.includes("tiktok")) {
            return bot.reply(mess.error.Iv);
          }
          _0x54ae70(mess.wait);
          _0x250c09("#tiktok", bot.sender, _cmd);
          const {
              tiktokdl: _0x34454c,
              tiktokdlv3: _0x211d8e,
              tiktokdlv2: _0x841ac5,
            } = require("@bochilteam/scraper"),
            {
              author: { nickname: _0x3b4389 },
              video: _0x177b41,
              description: _0x4829e8,
            } = await _0x34454c(args[0])
              .catch(async (_0x22702f) => await _0x841ac5(args[0]))
              .catch(async (_0x4613f4) => await _0x211d8e(args[0])),
            _0x1b384d =
              _0x177b41.no_watermark_raw ||
              _0x177b41.no_watermark ||
              _0x177b41.no_watermark_hd ||
              _0x177b41.with_watermark,
            _0x3303ac = { url: _0x1b384d };
          const _0xd02dc7 = {
            video: _0x3303ac,
            caption: "Nih",
            mimetype: "video/mp4",
          };
          hisoka
            .sendMessage(bot.chat, _0xd02dc7, { quoted: bot })
            .catch((_0x3fae75) => {
              bot.reply(mess.error.api);
            });
        }
        break;
      case "tiktokaudio":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *url*\n\n_Contoh_\n\n" +
                command +
                " https://vt.tiktok.com/ZSR6gUyXN/?k=1"
            );
          }
          if (!isUrl(text)) {
            return bot.reply(mess.error.Iv);
          }
          if (!text.includes("tiktok")) {
            return bot.reply(mess.error.Iv);
          }
          _0x54ae70(mess.wait);
          _0x250c09("#tiktokaudio", bot.sender, _cmd);
          const {
              tiktokdl: _0x188f62,
              tiktokdlv3: _0x47635a,
              tiktokdlv2: _0x1a5e2e,
            } = require("@bochilteam/scraper"),
            {
              author: { nickname: _0x2b5728 },
              video: _0x1a16e4,
              description: _0x52233c,
            } = await _0x188f62(args[0])
              .catch(async (_0x1dca89) => await _0x1a5e2e(args[0]))
              .catch(async (_0x2377b2) => await _0x47635a(args[0])),
            _0x2aaeca =
              _0x1a16e4.no_watermark_raw ||
              _0x1a16e4.no_watermark ||
              _0x1a16e4.no_watermark_hd ||
              _0x1a16e4.with_watermark,
            _0x3be777 = { url: _0x2aaeca };
          const _0x3c2e35 = {
            audio: _0x3be777,
            mimetype: "audio/mpeg",
          };
          hisoka
            .sendMessage(bot.chat, _0x3c2e35, { quoted: bot })
            .catch((_0x1a4926) => {
              bot.reply(mess.error.api);
            });
        }
        break;
      case "mediafire":
      case "mfire":
      case "mfdl":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                " limit untuk mengecek limit"
            );
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *url*\n\n_Contoh_\n\n" +
                command +
                " https://www.mediafire.com/file/6tknikx5f3jfsh8/AlphabotV16.zip/file"
            );
          }
          if (!isUrl(text)) {
            return bot.reply(mess.error.Iv);
          }
          if (!text.includes("mediafire.com")) {
            return bot.reply(mess.error.Iv);
          }
          _0x54ae70(mess.wait);
          _0x250c09("#mediafire", bot.sender, _cmd);
          kotz
            .mediafire(text)
            .then(async (_0x3a2311) => {
              _0x3a2311 = _0x3a2311[0];
              _0x3a2311.nama = decodeURIComponent(_0x3a2311.nama);
              var _0x100076 = await getBuffer(_0x3a2311.link);
              if (_0x3a2311.mime.includes("mp4")) {
                const _0x1b4b05 = {
                  document: _0x100076,
                  fileName: _0x3a2311.nama,
                  mimetype: "video/mp4",
                };
                hisoka.sendMessage(bot.chat, _0x1b4b05, {
                  quoted: bot,
                });
              } else {
                if (_0x3a2311.mime.includes("mp3")) {
                  const _0x577d50 = {
                    document: _0x100076,
                    fileName: _0x3a2311.nama,
                    mimetype: "audio/mp3",
                  };
                  hisoka.sendMessage(bot.chat, _0x577d50, {
                    quoted: bot,
                  });
                } else {
                  hisoka.sendMessage(
                    bot.chat,
                    {
                      document: _0x100076,
                      fileName: _0x3a2311.nama,
                      mimetype: "application/" + _0x3a2311.mime,
                    },
                    { quoted: bot }
                  );
                }
              }
            })
            .catch((_0xc1f9aa) => {
              console.log(color("[ ERROR ]", "red"), _0xc1f9aa),
                _0x54ae70(mess.error.api);
            });
        }
        break;
      case "gitclone": {
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *url*\n\n_Contoh_\n\n" +
              command +
              " https://github.com/zeeone-ofc/Haruka-Md"
          );
        }
        if (
          !/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i.test(text)
        ) {
          return bot.reply("Linknya salah");
        }
        _0x54ae70(mess.wait);
        let [, _0x37093d, _0x390d38] =
            text.match(
              /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            ) || [],
          _0x1ac7af = _0x390d38.replace(/.git$/, ""),
          _0x31f43e =
            "https://api.github.com/repos/" +
            _0x37093d +
            "/" +
            _0x1ac7af +
            "/zipball",
          _0x4c19fc = (await fetch(_0x31f43e, { method: "HEAD" })).headers
            .get("content-disposition")
            .match(/attachment; filename=(.*)/)[1];
        const _0x34c61d = { url: _0x31f43e };
        const _0x5672de = {
          document: _0x34c61d,
          mimetype: "application/zip",
          fileName: _0x4c19fc,
        };
        hisoka.sendMessage(bot.chat, _0x5672de, { quoted: bot });
        break;
      }
      case "afk":
        if (!bot.isGroup) {
          return bot.reply(mess.OnlyGrup);
        }
        if (afkck) {
          return bot.reply("Afk sudah diaktifkan sebelumnya");
        }
        _0x250c09("#afk", bot.sender, _cmd);
        let _0x242331 = text ? text : "Nothing.";
        afk.addAfkUser(bot.sender, Date.now(), _0x242331, _afk),
          hisoka.sendTextWithMentions(
            bot.chat,
            "@" +
              bot.sender.split("@")[0] +
              " sedang afk\nAlasan : " +
              _0x242331,
            bot
          );
        break;
      case "welcome":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (args[0] === "on") {
          _0x250c09("#welcome", bot.sender, _cmd);
          if (db.data.chats[bot.chat].welcome === true) {
            return bot.reply("Activated");
          }
          db.data.chats[bot.chat].welcome = true;
          _0x54ae70("Successfully activated welcome in this group");
        } else {
          if (args[0] === "off") {
            _0x250c09("#welcome", bot.sender, _cmd);
            if (db.data.chats[bot.chat].welcome === false) {
              return bot.reply("Deactivated");
            }
            db.data.chats[bot.chat].welcome = false;
            _0x54ae70("Successfully deactivated welcome in this group");
          } else {
            const _0x3e7621 = { displayText: "ON" };
            hisoka.sendButMessage(
              bot.chat,
              "Mode Welcome Message",
              "" + _0xcd848b,
              [
                {
                  buttonId: "welcome on",
                  buttonText: _0x3e7621,
                  type: 1,
                },
                {
                  buttonId: "welcome off",
                  buttonText: { displayText: "OFF" },
                  type: 1,
                },
              ],
              { quoted: bot }
            );
          }
        }
        break;
      case "left":
      case "goodbye":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (args[0] === "on") {
          _0x250c09("#setleft", bot.sender, _cmd);
          if (db.data.chats[bot.chat].goodbye === true) {
            return bot.reply("Udah aktif");
          }
          db.data.chats[bot.chat].goodbye = true;
          _0x54ae70("Sukses mengaktifkan left di grup ini");
        } else {
          if (args[0] === "off") {
            _0x250c09("#setleft", bot.sender, _cmd);
            if (db.data.chats[bot.chat].goodbye === false) {
              return;
            }
            db.data.chats[bot.chat].goodbye = false;
            _0x54ae70("Sukses menonaktifkan left di grup ini");
          } else {
            const _0x4ae84e = { displayText: "ON" };
            hisoka.sendButMessage(
              bot.chat,
              "Mode Left Message",
              "" + _0xcd848b,
              [
                {
                  buttonId: "left on",
                  buttonText: _0x4ae84e,
                  type: 1,
                },
                {
                  buttonId: "left off",
                  buttonText: { displayText: "OFF" },
                  type: 1,
                },
              ],
              { quoted: bot }
            );
          }
        }
        break;
      case "setwelcome":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator && !isAdmins) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *teks_welcome*\n\n_Contoh_\n\n" +
              command +
              " Halo @user, Selamat datang di @group"
          );
        }
        if (_0x39cc3f(bot.chat, _0x3fcc3c)) {
          return bot.reply("Set welcome already active");
        }
        addSetWelcome(text, bot.chat, _0x3fcc3c),
          _0x250c09("#setwelcome", bot.sender, _cmd),
          _0x54ae70("Successfully set welcome!");
        break;
      case "changewelcome":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator && !isAdmins) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *teks_welcome*\n\n_Contoh_\n\n" +
              command +
              " Halo @user, Selamat datang di @group"
          );
        }
        _0x39cc3f(bot.chat, _0x3fcc3c)
          ? (_0x250c09("#changewelcome", bot.sender, _cmd),
            changeSetWelcome(q, bot.chat, _0x3fcc3c),
            _0x54ae70("Sukses change set welcome teks!"))
          : (_0x250c09("#changewelcome", bot.sender, _cmd),
            addSetWelcome(q, bot.chat, _0x3fcc3c),
            _0x54ae70("Sukses change set welcome teks!"));
        break;
      case "delsetwelcome":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator && !isAdmins) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!_0x39cc3f(bot.chat, _0x3fcc3c)) {
          return bot.reply("Belum ada set welcome di sini..");
        }
        removeSetWelcome(bot.chat, _0x3fcc3c),
          _0x250c09("#delsetwelcome", bot.sender, _cmd),
          _0x54ae70("Sukses delete set welcome");
        break;
      case "setleft":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator && !isAdmins) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              (prefix + command) +
              " *teks_left*\n\n_Contoh_\n\n" +
              (prefix + command) +
              " Halo @user, Selamat tinggal dari @group"
          );
        }
        if (_0x83a516(bot.chat, _0x5f33c3)) {
          return bot.reply("Set left already active");
        }
        _0x250c09("#setleft", bot.sender, _cmd),
          addSetLeft(q, bot.chat, _0x5f33c3),
          _0x54ae70("Successfully set left!");
        break;
      case "changeleft":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator && !isAdmins) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              (prefix + command) +
              " *teks_left*\n\n_Contoh_\n\n" +
              (prefix + command) +
              " Halo @user, Selamat tinggal dari @group"
          );
        }
        if (_0x83a516(bot.chat, _0x5f33c3)) {
          _0x250c09("#changeleft", bot.sender, _cmd),
            changeSetLeft(q, bot.chat, _0x5f33c3),
            _0x54ae70("Sukses change set left teks!");
        } else {
          _0x250c09("#changeleft", bot.sender, _cmd);
          addSetLeft(q, bot.chat, _0x5f33c3);
          _0x54ae70("Sukses change set left teks!");
        }
        break;
      case "delsetleft":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator && !isAdmins) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!_0x83a516(bot.chat, _0x5f33c3)) {
          return bot.reply("Belum ada set left di sini..");
        }
        _0x250c09("#delsetleft", bot.sender, _cmd),
          removeSetLeft(bot.chat, _0x5f33c3),
          _0x54ae70("Sukses delete set left");
        break;
      case "linkgrup":
      case "linkgroup":
      case "linkgc":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          let _0x1a85a6 = await hisoka.groupInviteCode(bot.chat);
          const _0x404c0e = { detectLink: true };
          hisoka.sendText(
            bot.chat,
            "https://chat.whatsapp.com/" +
              _0x1a85a6 +
              "\n\nLink Group : " +
              groupMetadata.subject,
            bot,
            _0x404c0e
          );
        }
        break;
      case "pppanjang":
      case "setppbot2":
        {
          if (!isCreator) {
            return bot.reply("Fitur Khusus owner!");
          }
          if (!fatkuns) {
            return _0x54ae70("Reply foto dgn caption " + (prefix + command));
          }
          if (!/image/.test(mime)) {
            return _0x54ae70("Reply foto dgn caption " + (prefix + command));
          }
          if (/webp/.test(mime)) {
            return _0x54ae70("Reply foto dgn caption " + (prefix + command));
          }
          let _0x2f51fe = await hisoka.downloadAndSaveMediaMessage(fatkuns);
          var { img: _0x4f0c6a } = await generateProfilePicture(_0x2f51fe);
          const _0x466860 = {
            to: botNumber,
            type: "set",
            xmlns: "w:profile:picture",
          };
          const _0x95d38b = {
            tag: "picture",
            attrs: {},
            content: _0x4f0c6a,
          };
          _0x95d38b.attrs.type = "image";
          const _0x59ecb0 = {
            tag: "iq",
            attrs: _0x466860,
            content: [_0x95d38b],
          };
          await hisoka.query(_0x59ecb0);
          bot.reply("Done!!!");
        }
        break;
      case "pppanjanggc":
      case "setppgc2":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          if (!fatkuns) {
            return _0x54ae70("Reply foto dgn caption " + (prefix + command));
          }
          if (!/image/.test(mime)) {
            return _0x54ae70("Reply foto dgn caption " + (prefix + command));
          }
          if (/webp/.test(mime)) {
            return _0x54ae70("Reply foto dgn caption " + (prefix + command));
          }
          let _0xe85a1e = await hisoka.downloadAndSaveMediaMessage(fatkuns);
          var { img: _0x4f0c6a } = await generateProfilePicture(_0xe85a1e);
          const _0x4a2f17 = {
            to: bot.chat,
            type: "set",
            xmlns: "w:profile:picture",
          };
          const _0xbbb43c = {
            tag: "picture",
            attrs: {},
            content: _0x4f0c6a,
          };
          _0xbbb43c.attrs.type = "image";
          const _0x27cd90 = {
            tag: "iq",
            attrs: _0x4a2f17,
            content: [_0xbbb43c],
          };
          await hisoka.query(_0x27cd90);
          bot.reply("Done!!!");
        }
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          if (!fatkuns) {
            return bot.reply(
              "Kirim/Reply Image Dengan Caption " + (prefix + command)
            );
          }
          if (!/image/.test(mime)) {
            return bot.reply(
              "Kirim/Reply Image Dengan Caption " + (prefix + command)
            );
          }
          if (/webp/.test(mime)) {
            return bot.reply(
              "Kirim/Reply Image Dengan Caption " + (prefix + command)
            );
          }
          let _0x55e6cf = await hisoka.downloadAndSaveMediaMessage(fatkuns);
          const _0x585dee = { url: _0x55e6cf };
          await hisoka
            .updateProfilePicture(bot.chat, _0x585dee)
            .catch((_0x5ccf6b) => fs.unlinkSync(_0x55e6cf));
          bot.reply("Berhasil mengganti pp group");
        }
        break;
      case "setname":
      case "setsubject":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          if (!text) {
            return bot.reply("Example " + (prefix + command) + " WhatsApp Bot");
          }
          await hisoka
            .groupUpdateSubject(bot.chat, text)
            .then((_0x11975f) => bot.reply("Done"))
            .catch((_0x479cdc) => bot.reply(jsonformat(_0x479cdc)));
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          if (!text) {
            return bot.reply("Example " + (prefix + command) + " WhatsApp Bot");
          }
          await hisoka
            .groupUpdateDescription(bot.chat, text)
            .then((_0x4e1261) => bot.reply("Done"))
            .catch((_0x296e65) => bot.reply(jsonformat(_0x296e65)));
        }
        break;
      case "antilink":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!isBotAdmins) {
          return bot.reply(mess.BotAdmin);
        }
        if (args[0] === "on") {
          _0x250c09("#antilink", bot.sender, _cmd);
          if (antilinkck) {
            return bot.reply("Udah aktif");
          }
          antilink.push(bot.chat);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink, null, 2)
          );
          _0x54ae70("Successfully Activate Antilink In This Group");
        } else {
          if (args[0] === "off") {
            _0x250c09("#antilink", bot.sender, _cmd);
            if (!antilinkck) {
              return bot.reply("Udah nonaktif");
            }
            let _0x59a6a7 = antilink.indexOf(bot.chat);
            antilink.splice(_0x59a6a7, 1);
            fs.writeFileSync(
              "./database/antilink.json",
              JSON.stringify(antilink, null, 2)
            );
            _0x54ae70("Successfully Disabling Antilink In This Group");
          } else {
            const _0x290cb6 = { displayText: "ON" };
            hisoka.sendButMessage(
              bot.chat,
              "Mode Antilink",
              "" + _0xcd848b,
              [
                {
                  buttonId: "antilink on",
                  buttonText: _0x290cb6,
                  type: 1,
                },
                {
                  buttonId: "antilink off",
                  buttonText: { displayText: "OFF" },
                  type: 1,
                },
              ],
              { quoted: bot }
            );
          }
        }
        break;
      case "antiwame":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!isBotAdmins) {
          return bot.reply(mess.BotAdmin);
        }
        if (args[0] === "on") {
          _0x250c09("#antiwame", bot.sender, _cmd);
          if (antwameck) {
            return bot.reply("Udah aktif");
          }
          antilink.push(bot.chat);
          fs.writeFileSync(
            "./database/antiwame.json",
            JSON.stringify(antiwame, null, 2)
          );
          _0x54ae70("Successfully Activate Antiwame In This Group");
        } else {
          if (args[0] === "off") {
            _0x250c09("#antiwame", bot.sender, _cmd);
            if (!antwameck) {
              return bot.reply("Udah nonaktif");
            }
            let _0x5cd922 = antiwame.indexOf(bot.chat);
            antiwame.splice(_0x5cd922, 1);
            fs.writeFileSync(
              "./database/antiwame.json",
              JSON.stringify(antiwame, null, 2)
            );
            _0x54ae70("Successfully Disabling Antiwame In This Group");
          } else {
            const _0x2c5f29 = { displayText: "ON" };
            hisoka.sendButMessage(
              bot.chat,
              "Mode Anti wa.me",
              "" + _0xcd848b,
              [
                {
                  buttonId: "antiwame on",
                  buttonText: _0x2c5f29,
                  type: 1,
                },
                {
                  buttonId: "antiwame off",
                  buttonText: { displayText: "OFF" },
                  type: 1,
                },
              ],
              { quoted: bot }
            );
          }
        }
        break;
      case "open":
      case "buka": {
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!isBotAdmins) {
          return bot.reply(mess.BotAdmin);
        }
        _0x250c09("#group", bot.sender, _cmd);
        hisoka.groupSettingUpdate(bot.chat, "not_announcement");
        const _0x5c0ddd = await getTextSetOpen(bot.chat, set_open);
        _0x54ae70(
          _0x5c0ddd ||
            "Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini"
        );
        break;
      }
      case "setopen":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isCreator) {
            return bot.reply("Fitur Khusus owner!");
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *teks open*\n\n_Contoh_\n\n" +
                command +
                " Halo Semuanya, group sudah buka"
            );
          }
          if (isSetOpen(bot.chat, set_open)) {
            return bot.reply("Set open sudah ada sebelumnya");
          }
          addSetOpen(text, bot.chat, set_open);
          _0x250c09("#setopen", bot.sender, _cmd);
          _0x54ae70("\u2705 Done set open!");
        }
        break;
      case "changeopen":
      case "changesetopen":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *teks open*\n\n_Contoh_\n\n" +
              command +
              " Halo Semuanya, group sudah buka"
          );
        }
        if (isSetOpen(bot.chat, set_open)) {
          _0x250c09("#changeopen", bot.sender, _cmd);
          changeSetOpen(text, bot.chat, set_open);
          _0x54ae70("Sukses ubah set open teks!");
        } else {
          _0x250c09("#changeopen", bot.sender, _cmd),
            addSetOpen(text, bot.chat, set_open),
            _0x54ae70("Sukses ubah set open teks!");
        }
        break;
      case "delsetopen":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!isSetOpen(bot.chat, set_open)) {
          return bot.reply("Belum ada set open di sini..");
        }
        removeSetOpen(bot.chat, set_open),
          _0x250c09("#delsetopen", bot.sender, _cmd),
          _0x54ae70("Sukses delete set open");
        break;
      case "close":
      case "tutup":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!isBotAdmins) {
          return bot.reply(mess.BotAdmin);
        }
        _0x250c09("#close", bot.sender, _cmd),
          hisoka.groupSettingUpdate(bot.chat, "announcement");
        const _0x4a10c7 = await getTextSetClose(bot.chat, set_close);
        _0x54ae70(
          _0x4a10c7 ||
            "Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini"
        );
        break;
      case "setclose":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isCreator) {
            return bot.reply("Fitur Khusus owner!");
          }
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *teks close*\n\n_Contoh_\n\n" +
                command +
                " Halo Semuanya, group close dulu ya"
            );
          }
          if (isSetClose(bot.chat, set_close)) {
            return bot.reply("Set close sudah ada sebelumnya");
          }
          addSetClose(text, bot.chat, set_close);
          _0x250c09("#setclose", bot.sender, _cmd);
          _0x54ae70("\u2705 Done set close!");
        }
        break;
      case "changeclose":
      case "changesetclose":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *teks close*\n\n_Contoh_\n\n" +
              command +
              " Halo Semuanya, group close dulu ya"
          );
        }
        if (isSetClose(bot.chat, set_close)) {
          _0x250c09("#changeclose", bot.sender, _cmd);
          changeSetClose(text, bot.chat, set_close);
          _0x54ae70("Sukses ubah set close teks!");
        } else {
          _0x250c09("#changeclose", bot.sender, _cmd),
            addSetClose(text, bot.chat, set_close),
            _0x54ae70("Sukses ubah set close teks!");
        }
        break;
      case "delsetclose":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isCreator) {
          return bot.reply("Fitur Khusus owner!");
        }
        if (!isSetClose(bot.chat, set_close)) {
          return bot.reply("Belum ada set close di sini..");
        }
        removeSetClose(bot.chat, set_close),
          _0x250c09("#delsetclose", bot.sender, _cmd),
          _0x54ae70("Sukses delete set close");
        break;
      case "kick":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          let _0x94bae3 = bot.mentionedJid[0]
            ? bot.mentionedJid[0]
            : bot.quoted
            ? bot.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await hisoka
            .groupParticipantsUpdate(bot.chat, [_0x94bae3], "remove")
            .then((_0x1afa22) => bot.reply("Sukses kick target\u2705"))
            .catch((_0x218645) => bot.reply("\u274C Terjadi kesalahan"));
        }
        break;
      case "add":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          let _0x1cc732 = bot.quoted
            ? bot.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await hisoka
            .groupParticipantsUpdate(bot.chat, [_0x1cc732], "add")
            .then((_0x4a64d6) => bot.reply("Sukses add member\u2705"))
            .catch((_0x1a8d36) =>
              bot.reply("\u274C Terjadi kesalahan, mungkin nmr nya privat")
            );
        }
        break;
      case "promote":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          let _0x5ab6af = bot.mentionedJid[0]
            ? bot.mentionedJid[0]
            : bot.quoted
            ? bot.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await hisoka
            .groupParticipantsUpdate(bot.chat, [_0x5ab6af], "promote")
            .then((_0x39cb36) => bot.reply("Sukses promote member\u2705"))
            .catch((_0xf0f02) => bot.reply("\u274C Terjadi kesalahan"));
        }
        break;
      case "demote":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins) {
            return bot.reply("Admin Specific Features!");
          }
          if (!isBotAdmins) {
            return bot.reply(mess.BotAdmin);
          }
          let _0x541bc0 = bot.mentionedJid[0]
            ? bot.mentionedJid[0]
            : bot.quoted
            ? bot.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await hisoka
            .groupParticipantsUpdate(bot.chat, [_0x541bc0], "demote")
            .then((_0x1d32d3) => bot.reply("Sukses demote admin\u2705"))
            .catch((_0x46218d) => bot.reply("\u274C Terjadi kesalahan"));
        }
        break;
      case "revoke":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!isAdmins) {
          return bot.reply("Admin Specific Features!");
        }
        if (!isBotAdmins) {
          return bot.reply(mess.BotAdmin);
        }
        _0x250c09("#revoke", bot.sender, _cmd),
          await hisoka
            .groupRevokeInvite(bot.chat)
            .then((_0x1d96cc) => {
              _0x54ae70("Sukses menyetel tautan undangan grup ini");
            })
            .catch(() => _0x54ae70(mess.error.api));
        break;
      case "hidetag":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins && !isCreator) {
            return bot.reply("Admin Specific Features!");
          }
          hisoka.sendMessage(
            bot.chat,
            {
              text: q ? q : "",
              mentions: participants.map((_0x32fbbe) => _0x32fbbe.id),
            },
            { quoted: bot }
          );
        }
        break;
      case "delete":
      case "del":
        {
          if (!bot.quoted) {
            throw false;
          }
          let {
            chat: _0x1c0f8b,
            fromMe: _0x557b82,
            id: _0x510b93,
            isBaileys: _0xbb390f,
          } = bot.quoted;
          if (!_0xbb390f) {
            return bot.reply("The message was not sent by a bot!");
          }
          hisoka.sendMessage(bot.chat, {
            delete: {
              remoteJid: bot.chat,
              fromMe: true,
              id: bot.quoted.id,
              participant: bot.quoted.sender,
            },
          });
        }
        break;
      case "checksewa":
      case "ceksewa":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!_0x44c490) {
          return bot.reply("Bot tidak di sewa group ini!");
        }
        _0x250c09("#checksewa", bot.sender, _cmd);
        let _0x7b5385 = ms(_sewa.getSewaExpired(bot.chat, sewa) - Date.now()),
          _0x5ccfd2 =
            "*Expire :* " +
            _0x7b5385.days +
            " day(s) " +
            _0x7b5385.hours +
            " hour(s) " +
            _0x7b5385.minutes +
            " minute(s)";
        _0x54ae70(_0x5ccfd2);
        break;
      case "ttc":
      case "ttt":
      case "tictactoe":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          let _0x56e8b8 = require("../lib/tictactoe");
          this.game = this.game ? this.game : {};
          if (
            Object.values(this.game).find(
              (_0x3e8165) =>
                _0x3e8165.id.startsWith("tictactoe") &&
                [_0x3e8165.game.playerX, _0x3e8165.game.playerO].includes(
                  bot.sender
                )
            )
          ) {
            return bot.reply("Kamu masih didalam game");
          }
          let _0x2601b9 = Object.values(this.game).find(
            (_0x531d1d) =>
              _0x531d1d.state === "WAITING" &&
              (text ? _0x531d1d.name === text : true)
          );
          if (_0x2601b9) {
            bot.reply("Partner ditemukan!");
            _0x2601b9.o = bot.chat;
            _0x2601b9.game.playerO = bot.sender;
            _0x2601b9.state = "PLAYING";
            let _0x1eeefd = _0x2601b9.game.render().map((_0x45c8c3) => {
                const _0x1eeb5b = {};
                return (
                  (_0x1eeb5b.X = "\u274C"),
                  (_0x1eeb5b.O = "\u2B55"),
                  (_0x1eeb5b["1"] = "1️\u20E3"),
                  (_0x1eeb5b["2"] = "2️\u20E3"),
                  (_0x1eeb5b["3"] = "3️\u20E3"),
                  (_0x1eeb5b["4"] = "4️\u20E3"),
                  (_0x1eeb5b["5"] = "5️\u20E3"),
                  (_0x1eeb5b["6"] = "6️\u20E3"),
                  (_0x1eeb5b["7"] = "7️\u20E3"),
                  (_0x1eeb5b["8"] = "8️\u20E3"),
                  (_0x1eeb5b["9"] = "9️\u20E3"),
                  _0x1eeb5b[_0x45c8c3]
                );
              }),
              _0x31d571 =
                "Room ID: " +
                _0x2601b9.id +
                "\n\n" +
                _0x1eeefd.slice(0, 3).join("") +
                "\n" +
                _0x1eeefd.slice(3, 6).join("") +
                "\n" +
                _0x1eeefd.slice(6).join("") +
                "\n\nMenunggu @" +
                _0x2601b9.game.currentTurn.split("@")[0] +
                "\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan";
            if (_0x2601b9.x !== _0x2601b9.o) {
              await hisoka.sendText(_0x2601b9.x, _0x31d571, bot, {
                mentions: parseMention(_0x31d571),
              });
            }
            await hisoka.sendText(_0x2601b9.o, _0x31d571, bot, {
              mentions: parseMention(_0x31d571),
            });
          } else {
            _0x2601b9 = {
              id: "tictactoe-" + +new Date(),
              x: bot.chat,
              o: "",
              game: new _0x56e8b8(bot.sender, "o"),
              state: "WAITING",
            };
            if (text) {
              _0x2601b9.name = text;
            }
            bot.reply(
              "Menunggu partner" +
                (text
                  ? " mengetik command dibawah ini " +
                    prefix +
                    command +
                    " " +
                    text
                  : "")
            );
            this.game[_0x2601b9.id] = _0x2601b9;
          }
        }
        break;
      case "delttc":
      case "delttt":
        {
          let _0x1e262b = Object.values(this.game).find(
            (_0xaa54d5) =>
              _0xaa54d5.id.startsWith("tictactoe") &&
              [_0xaa54d5.game.playerX, _0xaa54d5.game.playerO].includes(
                bot.sender
              )
          );
          if (!_0x1e262b) {
            return bot.reply("Kamu sedang tidak berada di room tictactoe !");
          }
          delete this.game[_0x1e262b.id];
          bot.reply("Berhasil delete session room tictactoe !");
        }
        break;
      case "casino":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (isGame(bot.sender, isCreator, _0xc3b69b, glimit)) {
            return bot.reply("Limit game kamu sudah habis");
          }
          if (!text) {
            return bot.reply("Kirim perintah *" + command + "* @tag nominal");
          }
          let _0x3a85b2 = bot.mentionedJid[0]
            ? bot.mentionedJid[0]
            : bot.quoted
            ? bot.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (fs.existsSync("./database/" + bot.chat + ".json")) {
            return bot.reply(
              "Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *" +
                prefix +
                "delcasino*, untuk menghapus sesi"
            );
          }
          if (args.length == 2) {
            return bot.reply("Masukan Nominal Nya");
          }
          if (args[1].includes("-")) {
            return bot.reply("Jangan menggunakan -");
          }
          if (isNaN(parseInt(args[1]))) {
            return bot.reply("Nominal Harus Berupa Angka!");
          }
          var _0x2341f7 = getBalance(bot.sender, balance),
            _0x352995 = getBalance(bot.mentionedJid[0], balance);
          if (_0x2341f7 < args[1] || _0x2341f7 == "undefined") {
            return bot.reply(
              "Balance Tidak Mencukupi, Kumpulkan Terlebih Dahulu\nKetik " +
                prefix +
                "balance, untuk mengecek Balance mu!"
            );
          }
          if (_0x352995 < args[1] || _0x352995 == "undefined") {
            return bot.reply(
              "Balance Lawan Tidak Mencukupi Untuk Bermain Denganmu\nKetik " +
                prefix +
                "balance @tag untuk mengecek Balance lawanmu"
            );
          }
          var _0x33e35f = setCasino("" + bot.chat);
          _0x33e35f.Z = bot.sender.replace("@s.whatsapp.net", "");
          _0x33e35f.Y = _0x3a85b2;
          _0x33e35f.nominal = parseInt(args[1]);
          _0x250c09("#casino", bot.sender, _cmd);
          fs.writeFileSync(
            "./database/casino/" + bot.chat + ".json",
            JSON.stringify(_0x33e35f, null, 2)
          );
          gameAdd(bot.sender, glimit);
          var _0xd3dc8c =
            "\uD83C\uDFB0 Memulai Game Casino \uD83D\uDCB0\n\n\u2022 @" +
            bot.sender.replace("@s.whatsapp.net", "") +
            " Menantang " +
            text +
            ", dengan Nominal: *$ " +
            parseInt(args[1]) +
            "*\n\u2022 Ketik Y/N untuk menerima atau menolak Permainan!";
          hisoka.sendMessage(
            bot.chat,
            {
              text: _0xd3dc8c,
              mentions: [bot.sender, _0x3a85b2],
            },
            { quoted: bot }
          );
        }
        break;
      case "delcasino":
        if (fs.existsSync("./database/casino/" + bot.chat + ".json")) {
          var _0x5d9765 = JSON.parse(
            fs.readFileSync("./database/casino/" + bot.chat + ".json")
          );
          if (_0x5d9765.Z.includes(bot.sender)) {
            _0x250c09("#delcasino", bot.sender, _cmd),
              deleteCasino(bot.chat),
              _0x54ae70("Berhasil Menghapus Sesi Casino");
          } else {
            if (_0x5d9765.Y.includes(bot.sender)) {
              _0x250c09("#delcasino", bot.sender, _cmd),
                deleteCasino(bot.chat),
                _0x54ae70("Berhasil Menghapus Sesi Casino");
            } else {
              if (isAdmins) {
                _0x250c09("#delcasino", bot.sender, _cmd);
                deleteCasino(bot.chat);
                _0x54ae70("Berhasil Menghapus Sesi Casino");
              } else {
                isCreator
                  ? (_0x250c09("#delcasino", bot.sender, _cmd),
                    deleteCasino(bot.chat),
                    _0x54ae70("Berhasil Menghapus Sesi Casino"))
                  : _0x54ae70(
                      "Anda tidak bisa menghapus sesi casino, karena bukan pemain!"
                    );
              }
            }
          }
        } else {
          _0x54ae70("Tidak ada sesi yang berlangsung");
        }
        break;
      case "lirik":
      case "liriklagu":
        if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
          return bot.reply(
            "Limit kamu sudah habis silahkan kirim " +
              prefix +
              "limit untuk mengecek limit"
          );
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *judul*\n\n_Contoh_\n\n" +
              command +
              " Bila Nanti"
          );
        }
        _0x54ae70(mess.wait),
          _0x250c09("#lirik", bot.sender, _cmd),
          ra
            .Musikmatch(text)
            .then(async (_0x67593a) => {
              var _0x8f7a75 =
                "*" +
                _0x67593a.result.judul +
                " - " +
                _0x67593a.result.penyanyi +
                "*\n\n" +
                _0x67593a.result.lirik;
              const _0x2263a9 = { url: _0x67593a.result.thumb };
              const _0x200761 = {
                image: _0x2263a9,
                caption: _0x8f7a75,
              };
              hisoka.sendMessage(bot.chat, _0x200761, {
                quoted: bot,
              });
              limitAdd(bot.sender, limit);
            })
            .catch((_0x423eae) => {
              console.log(_0x423eae), _0x54ae70("Judul lagu tidak ditemukan");
            });
        break;
      case "grupwa":
      case "searchgrup":
        if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
          return bot.reply(
            "Limit kamu sudah habis silahkan kirim " +
              prefix +
              "limit untuk mengecek limit"
          );
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *nama group*\n\n_Contoh_\n\n" +
              command +
              " store"
          );
        }
        _0x54ae70(mess.wait),
          _0x250c09("#grupwa", bot.sender, _cmd),
          hxz
            .linkwa(q)
            .then(async (_0x333215) => {
              if (_0x333215.length == 0) {
                return bot.reply("Grup " + q + " tidak ditemukan");
              }
              var _0x152178 = "*Hasil Pencarian Dari " + q + "*\n\n";
              for (let _0x1e373c of _0x333215) {
                _0x152178 +=
                  "*Nama :* " +
                  _0x1e373c.nama +
                  "\n*Link :* " +
                  _0x1e373c.link +
                  "\n\n";
              }
              _0x54ae70(_0x152178);
              limitAdd(bot.sender, limit);
            })
            .catch((_0x2d4ff9) => {
              console.log(color("[ ERROR ]", "red"), _0x2d4ff9),
                _0x54ae70("Hasil pencarian dari " + q + " tidak ditemukan");
            });
        break;
      case "pinterest":
        {
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *text*\n\n_Contoh_\n\n" +
                command +
                " Anime"
            );
          }
          bot.reply(mess.wait);
          let _0x438cc5 = await pinterest(text),
            _0x4dbbaf = _0x438cc5[Math.floor(Math.random() * _0x438cc5.length)];
          const _0x7f25bb = { url: _0x4dbbaf };
          hisoka.sendMessage(
            bot.chat,
            {
              image: _0x7f25bb,
              caption: "Url : " + _0x4dbbaf,
            },
            { quoted: bot }
          );
        }
        break;
      case "yts":
      case "ytsearch":
        {
          if (!text) {
            _0x54ae70(
              "Gunakan dengan cara " +
                command +
                " *text*\n\n_Contoh_\n\n" +
                command +
                " Cara membuat bot WhatsApp"
            );
          }
          reso = await fetchJson(
            "https://greetings.zeeoneofc2.repl.co/api/yts?q=" + text
          );
          aramat = reso.result.all;
          var _0x3181bd = await getBuffer(aramat[0].image);
          let _0x4cd2a0 = aramat
            .map((_0x28ed48) => {
              switch (_0x28ed48.type) {
                case "video":
                  return (
                    "\n\uD83D\uDCDB Title : *" +
                    _0x28ed48.title +
                    "* \n\u23F0 Durasi: " +
                    _0x28ed48.timestamp +
                    "\n\uD83D\uDE80 Diupload " +
                    _0x28ed48.ago +
                    "\n\uD83D\uDE0E Views : " +
                    _0x28ed48.views +
                    "\n\uD83C\uDF00 Url : " +
                    _0x28ed48.url +
                    "\n      "
                  ).trim();
                case "channel":
                  return (
                    "\n\uD83D\uDCDB Channel : *" +
                    _0x28ed48.name +
                    "*\n\uD83C\uDF00 Url : " +
                    _0x28ed48.url +
                    "\n\uD83D\uDC7B Subscriber : " +
                    _0x28ed48.subCountLabel +
                    " (" +
                    _0x28ed48.subCount +
                    ")\n\uD83C\uDFA6 Total Video : " +
                    _0x28ed48.videoCount +
                    "\n"
                  ).trim();
              }
            })
            .filter((_0x352ddc) => _0x352ddc)
            .join("\n----------------------------------------\n");
          const _0x1ec0aa = {
            image: _0x3181bd,
            caption: _0x4cd2a0,
          };
          hisoka
            .sendMessage(bot.chat, _0x1ec0aa, { quoted: bot })
            .catch((_0x4f0c9d) => {
              _0x54ae70("Not found");
            });
        }
        break;
      case "cecan":
      case "cewek":
        if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
          return bot.reply(
            "Limit kamu sudah habis silahkan kirim " +
              prefix +
              "limit untuk mengecek limit"
          );
        }
        _0x54ae70(mess.wait), _0x250c09("#cecan", bot.sender, _cmd);
        var _0x2d3947 = ["cecan korea", "cewe cantik"],
          _0x351076 = await pinterest(pickRandom(_0x2d3947));
        const _0xb9a430 = {};
        (_0xb9a430.quoted = msg),
          hisoka.sendMessage(
            bot.chat,
            {
              caption: "Random Cewe Cantik",
              image: { url: pickRandom(_0x351076.result) },
            },
            _0xb9a430
          ),
          limitAdd(bot.sender, limit).catch((_0x30ecc0) => {
            console.log(color("[ ERROR ]", "red"), _0x30ecc0),
              _0x54ae70(mess.error.api);
          });
        break;
      case "cogan":
      case "cowok":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          _0x54ae70(mess.wait);
          _0x250c09("#cogan", bot.sender, _cmd);
          var _0x2d3947 = ["cogan korea", "cowo ganteng"],
            _0x351076 = await pinterest(pickRandom(_0x2d3947));
          hisoka.sendMessage(
            bot.chat,
            {
              caption: "Random Cowo Ganteng",
              image: { url: pickRandom(_0x351076.result) },
            },
            { quoted: bot }
          );
          limitAdd(bot.m.sender, limit).catch((_0x5e71f7) => {
            console.log(color("[ ERROR ]", "red"), _0x5e71f7),
              _0x54ae70(mess.error.api);
          });
        }
        break;
      case "waifu":
        {
          if (isLimit(bot.sender, isPremium, isCreator, limitCount, limit)) {
            return bot.reply(
              "Limit kamu sudah habis silahkan kirim " +
                prefix +
                "limit untuk mengecek limit"
            );
          }
          _0x54ae70(mess.wait);
          _0x250c09("#waifu", bot.sender, _cmd);
          var _0x351076 = (await axios.get("https://waifu.pics/api/sfw/waifu"))
            .data.url;
          const _0x43c5be = { url: _0x351076 };
          const _0x2cad67 = {
            caption: "Random Waifu",
            image: _0x43c5be,
          };
          hisoka.sendMessage(bot.chat, _0x2cad67, {
            quoted: bot,
          });
          limitAdd(bot.sender, limit).catch((_0x11bf38) => {
            console.log(color("[ ERROR ]", "red"), _0x11bf38),
              _0x54ae70(mess.error.api);
          });
        }
        break;
      case "topglobal":
        {
          if (!bot.isGroup) {
            return bot.reply(mess.OnlyGrup);
          }
          balance.sort((_0x5ce683, _0x52ce9a) =>
            _0x5ce683.balance < _0x52ce9a.balance ? 1 : -1
          );
          let _0x2c0fdf =
              "*\u2500\u2500 \u300C TOPGLOBAL BALANCE \u300D \u2500\u2500*\n\n",
            _0x56011a = [];
          var _0x210245 = 10;
          if (balance.length < 10) {
            _0x210245 = balance.length;
          }
          for (let _0x4db550 = 0; _0x4db550 < _0x210245; _0x4db550++) {
            (_0x2c0fdf +=
              _0x4db550 +
              1 +
              ". @" +
              balance[_0x4db550].id.split("@")[0] +
              "\n=> Balance : $" +
              balance[_0x4db550].balance +
              "\n\n"),
              _0x56011a.push(balance[_0x4db550].id);
          }
          hisoka.sendTextWithMentions(bot.chat, _0x2c0fdf, bot);
        }
        break;
      case "toplocal":
        {
          if (!bot.isGroup) {
            return bot.reply(mess.OnlyGrup);
          }
          balance.sort((_0x4575ef, _0x387893) =>
            _0x4575ef.balance < _0x387893.balance ? 1 : -1
          );
          let _0x330d04 =
              "*\u2500\u2500 \u300C TOPLOCAL BALANCE \u300D \u2500\u2500*\n\n",
            _0x3d7783 = [];
          var _0x210245 = 10;
          if (balance.length < 10) {
            _0x210245 = balance.length;
          }
          let _0x152575 = _0x589500.map((_0xcf7ef3) => _0xcf7ef3.id);
          for (let _0xac1a2f = 0; _0xac1a2f < _0x210245; _0xac1a2f++) {
            if (_0x152575.includes(balance[_0xac1a2f].id)) {
              _0x330d04 +=
                _0xac1a2f +
                1 +
                ". @" +
                balance[_0xac1a2f].id.split("@")[0] +
                "\n=> Balance : $" +
                balance[_0xac1a2f].balance +
                "\n\n";
              _0x3d7783.push(balance[_0xac1a2f].id);
            }
          }
          hisoka.sendTextWithMentions(bot.chat, _0x330d04, bot);
        }
        break;
      case "buylimit":
        {
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *jumlah limit yang ingin dibeli*\n\nHarga 1 limit = $50 balance"
            );
          }
          if (text.includes("-")) {
            return bot.reply("Jangan menggunakan -");
          }
          if (isNaN(text)) {
            return bot.reply("Harus berupa angka");
          }
          if (args[0] === "infinity") {
            return bot.reply("Yahaha saya ndak bisa di tipu");
          }
          let _0x1c2339 = Number(parseInt(text) * 50);
          if (getBalance(bot.sender, balance) < _0x1c2339) {
            return bot.reply(
              "Balance kamu tidak mencukupi untuk pembelian ini"
            );
          }
          _0x250c09("#buylimit", bot.sender, _cmd);
          kurangBalance(bot.sender, _0x1c2339, balance);
          giveLimit(bot.sender, parseInt(text), limit);
          _0x54ae70(
            "Pembeliaan limit sebanyak " +
              text +
              " berhasil\n\nSisa Balance : $" +
              getBalance(bot.sender, balance) +
              "\nSisa Limit : " +
              getLimit(bot.sender, limitCount, limit) +
              "/" +
              limitCount
          );
        }
        break;
      case "buygamelimit":
      case "buyglimit":
        {
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *jumlah game limit yang ingin dibeli*\n\nHarga 1 game limit = $50 balance\nPajak $1 / $10"
            );
          }
          if (text.includes("-")) {
            return bot.reply("Jangan menggunakan -");
          }
          if (isNaN(text)) {
            return bot.reply("Harus berupa angka");
          }
          if (text === "infinity") {
            return bot.reply("Yahaha saya ndak bisa di tipu");
          }
          let _0x39c23b = Number(parseInt(text) * 50);
          if (getBalance(bot.sender, balance) < _0x39c23b) {
            return bot.reply(
              "Balance kamu tidak mencukupi untuk pembelian ini"
            );
          }
          _0x250c09("#buygamelimit", bot.sender, _cmd);
          kurangBalance(bot.sender, _0x39c23b, balance);
          givegame(bot.sender, parseInt(text), glimit);
          _0x54ae70(
            "Pembeliaan game limit sebanyak " +
              text +
              " berhasil\n\nSisa Balance : $" +
              getBalance(bot.sender, balance) +
              "\nSisa Game Limit : " +
              cekGLimit(bot.sender, _0xc3b69b, glimit) +
              "/" +
              _0xc3b69b
          );
        }
        break;
      case "transfer":
      case "tf":
        {
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " +
                command +
                " *@tag nominal*\n\nContoh : " +
                command +
                " @62918838818 2000"
            );
          }
          let _0x3a56ec = bot.mentionedJid[0]
            ? bot.mentionedJid[0]
            : bot.quoted
            ? bot.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (!_0x3a56ec) {
            return bot.reply("Tag orang yang ingin di transfer balance");
          }
          if (!args[1]) {
            return bot.reply("Masukkan nominal nya!");
          }
          if (isNaN(text)) {
            return bot.reply("Nominal harus berupa angka!");
          }
          if (args[1] === "infinity") {
            return bot.reply("Yahaha saya ndak bisa di tipu");
          }
          if (args[1].includes("-")) {
            return bot.reply("Jangan menggunakan -");
          }
          var _0x2341f7 = getBalance(bot.sender, balance);
          if (_0x2341f7 < args[1] || _0x2341f7 == "undefined") {
            return bot.reply(
              "Balance Kamu Tidak Mencukupi Untuk Transfer Sebesar $" +
                args[1] +
                ", Kumpulkan Terlebih Dahulu\nKetik " +
                prefix +
                "balance, untuk mengecek Balance mu!"
            );
          }
          _0x250c09("#transfer", bot.sender, _cmd);
          kurangBalance(bot.sender, parseInt(text), balance);
          addBalance(_0x3a56ec, parseInt(args[1]), balance);
          hisoka.sendTextWithMentions(
            bot.chat,
            "Sukses transfer balance sebesar " +
              args[1] +
              " kepada @" +
              _0x3a56ec.split("@")[0],
            bot
          );
        }
        break;
      case "limit":
      case "balance":
      case "ceklimit":
      case "cekbalance": {
        let _0xff275c = bot.mentionedJid[0]
          ? bot.mentionedJid[0]
          : bot.quoted
          ? bot.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (_0xff275c) {
          var _0xab43fa = ownerNumber.includes(_0xff275c);
          var _0x147f44 = _0xab43fa
            ? true
            : _prem.checkPremiumUser(_0xff275c, premium);
          var _0x3104bb = _0x147f44 ? gcountck.prem : gcountck.user;
          var _0x5824d0 = "" + getLimit(_0xff275c, limitCount, limit);
          _0x54ae70(
            "\uD83D\uDCB3 Limit : " +
              (_prem.checkPremiumUser(_0xff275c, premium)
                ? "Unlimited"
                : _0x5824d0) +
              "/" +
              limitCount +
              "\n\uD83D\uDD79️ Limit Game : " +
              cekGLimit(_0xff275c, _0x3104bb, glimit) +
              "/" +
              _0x3104bb +
              "\n\uD83C\uDFE6 Balance : $" +
              getBalance(_0xff275c, balance) +
              "\n\nKamu dapat membeli limit dengan " +
              prefix +
              "buylimit *jumlah* dan " +
              prefix +
              "buyglimit *jumlah* untuk membeli game limit\n\n*Example :*\n" +
              prefix +
              "buylimit 1\n" +
              prefix +
              "buyglimit 1\n\n*Note :*\n\u2022 Harga 1 limit = $50 balance"
          );
        } else {
          var _0x2857a8 =
            getLimit(bot.sender, limitCount, limit) + "/" + limitCount;
          _0x54ae70(
            "\uD83D\uDCB3 Limit : " +
              (isPremium ? "Unlimited" : _0x2857a8) +
              "\n\uD83D\uDD79️ Limit Game : " +
              cekGLimit(bot.sender, _0xc3b69b, glimit) +
              "/" +
              _0xc3b69b +
              "\n\uD83C\uDFE6 Balance : $" +
              getBalance(bot.sender, balance) +
              "\n\nKamu dapat membeli limit dengan " +
              prefix +
              "buylimit *jumlah* dan " +
              prefix +
              "buyglimit *jumlah* untuk membeli game limit\n\n*Example :*\n" +
              prefix +
              "buylimit 1\n" +
              prefix +
              "buyglimit 1\n\n*Note :*\n\u2022 Harga 1 limit = $50 balance"
          );
        }
        break;
      }
      case "fitnah":
        if (!bot.isGroup) {
          return bot.reply("Group Specific Features!");
        }
        if (!text) {
          return hisoka.sendTextWithMentions(
            bot.chat,
            "Gunakan dengan cara " +
              command +
              " *@tag|pesantarget|pesanbot*\n\n_Contoh_\n\n" +
              command +
              " @" +
              bot.sender.split("@")[0] +
              "|enak ga semalem|enak banget",
            bot
          );
        }
        var _0x4fb538 = text.split("|")[0],
          _0x59c767 = text.split("|")[1],
          _0x5ea6dd = text.split("|")[2];
        if (!_0x4fb538.startsWith("@")) {
          return bot.reply("Tag orangnya");
        }
        if (!_0x59c767) {
          return bot.reply("Masukkan pesan target!");
        }
        if (!_0x5ea6dd) {
          return bot.reply("Masukkan pesan bot!");
        }
        var _0x12f0f0 = parseMention(_0x59c767);
        _0x250c09("#fitnah", bot.sender, _cmd);
        const _0x1f1beb = { mentionedJid: _0x12f0f0 };
        const _0x23fe54 = {};
        (_0x23fe54.text = "" + _0x59c767), (_0x23fe54.contextInfo = _0x1f1beb);
        const _0x5a772c = { extemdedTextMessage: _0x23fe54 };
        var _0x588288 = {
          key: {
            fromMe: false,
            participant: "" + parseMention(_0x4fb538),
            remoteJid: bot.chat ? bot.chat : "",
          },
          message: _0x5a772c,
        };
        const _0x35b8cd = { conversation: "" + _0x59c767 };
        var _0x2e1e00 = {
          key: {
            fromMe: false,
            participant: "" + parseMention(_0x4fb538),
            remoteJid: bot.chat ? bot.chat : "",
          },
          message: _0x35b8cd,
        };
        const _0x5d77a9 = {};
        (_0x5d77a9.text = _0x5ea6dd),
          (_0x5d77a9.mentions = mentioned),
          hisoka.sendMessage(bot.chat, _0x5d77a9, {
            quoted: _0x12f0f0.length > 2 ? _0x588288 : _0x2e1e00,
          });
        break;
      case "nowa":
        if (!isPremium) {
          return bot.reply(mess.OnlyPrem);
        }
        if (!text) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *nomor*\n\n_Contoh_\n\n" +
              command +
              " 628XXXXXXXXXX"
          );
        }
        if (!text.includes("x")) {
          return bot.reply("Misal 6285xxx");
        }
        _0x54ae70(mess.wait), _0x250c09("#nowa", bot.sender, _cmd);
        function _0x3a5100(_0x434aaf, _0x5e5121) {
          return _0x434aaf.split(_0x5e5121).length - 1;
        }
        var _0x49120a = _0x48c355.split("x")[0],
          _0x42981f = _0x48c355.split("x")[_0x3a5100(_0x48c355, "x")]
            ? _0x48c355.split("x")[_0x3a5100(_0x48c355, "x")]
            : "",
          _0x110ebe = _0x3a5100(_0x48c355, "x"),
          _0x1e2756;
        if (_0x110ebe == 1) {
          _0x1e2756 = 10;
        } else {
          if (_0x110ebe == 2) {
            _0x1e2756 = 100;
          } else {
            _0x110ebe == 3 && (_0x1e2756 = 1000);
          }
        }
        var _0x2f1e14 = "List Nomer\n\nPunya Bio/status/info\n",
          _0x61006d =
            "\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n",
          _0x3f6126 = "\nTidak Terdaftar\n";
        for (let _0xd32f5f = 0; _0xd32f5f < _0x1e2756; _0xd32f5f++) {
          var _0x862ab2 = ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
            _0x3dab83 = _0x862ab2[Math.floor(Math.random() * _0x862ab2.length)],
            _0x8fdddd = _0x862ab2[Math.floor(Math.random() * _0x862ab2.length)],
            _0x2b1ebb = _0x862ab2[Math.floor(Math.random() * _0x862ab2.length)],
            _0xc57fca = _0x862ab2[Math.floor(Math.random() * _0x862ab2.length)],
            _0x2b7fb6;
          if (_0x110ebe == 1) {
            _0x2b7fb6 = "" + _0x3dab83;
          } else {
            if (_0x110ebe == 2) {
              _0x2b7fb6 = "" + _0x3dab83 + _0x8fdddd;
            } else {
              if (_0x110ebe == 3) {
                _0x2b7fb6 = "" + _0x3dab83 + _0x8fdddd + _0x2b1ebb;
              } else {
                _0x110ebe == 4 &&
                  (_0x2b7fb6 =
                    "" + _0x3dab83 + _0x8fdddd + _0x2b1ebb + _0xc57fca);
              }
            }
          }
          var _0x2341f7 = await hisoka.onWhatsApp(
              "" + _0x49120a + _0xd32f5f + _0x42981f + "@s.whatsapp.net"
            ),
            _0x414794 = _0x2341f7.length !== 0 ? _0x2341f7 : false;
          try {
            try {
              var _0xb9a747 = await hisoka.fetchStatus(_0x2341f7[0].jid);
            } catch {
              var _0xb9a747 = "401";
            }
            if (_0xb9a747 == "401" || _0xb9a747.status.length == 0) {
              _0x61006d += "wa.me/" + _0x2341f7[0].jid.split("@")[0] + "\n";
              console.log(
                "-" + _0xd32f5f + ") " + _0x49120a + _0xd32f5f + _0x42981f,
                color(" [REGISTERED]", "green")
              );
            } else {
              if (_0x110ebe == 6) {
                var _0x302c9e =
                  "" +
                  moment(_0xb9a747.setAt)
                    .tz("Asia/Jakarta")
                    .format("ddd DD MMM YYYY");
                if (_0x302c9e.endsWith("2009")) {
                  _0x2f1e14 +=
                    "wa.me/" +
                    _0x2341f7[0].jid.split("@")[0] +
                    "\nBio Name : " +
                    _0xb9a747.status +
                    "\nTahun : " +
                    moment(_0xb9a747.setAt)
                      .tz("Asia/Jakarta")
                      .format("ddd DD MMM YYYY") +
                    "\n\n";
                  console.log(
                    "-" + _0xd32f5f + ") " + _0x49120a + _0xd32f5f + _0x42981f,
                    color(" [REGISTERED]", "green")
                  );
                }
              } else {
                (_0x2f1e14 +=
                  "wa.me/" +
                  _0x2341f7[0].jid.split("@")[0] +
                  "\nBio Name : " +
                  _0xb9a747.status +
                  "\nTahun : " +
                  moment(_0xb9a747.setAt)
                    .tz("Asia/Jakarta")
                    .format("ddd DD MMM YYYY") +
                  "\n\n"),
                  console.log(
                    "-" + _0xd32f5f + ") " + _0x49120a + _0xd32f5f + _0x42981f,
                    color(" [REGISTERED]", "green")
                  );
              }
            }
          } catch {
            (_0x3f6126 += "" + _0x49120a + _0xd32f5f + _0x42981f + "\n"),
              console.log(
                "-" + _0xd32f5f + ") " + _0x49120a + _0xd32f5f + _0x42981f,
                color(" [NOT REGISTERED]", "red")
              );
          }
        }
        _0x54ae70("" + _0x2f1e14 + _0x61006d + _0x3f6126);
        break;
      case "q":
      case "quoted":
        {
          if (!bot.quoted) {
            return bot.reply("Reply Pesannya!!");
          }
          let _0x344503 = await hisoka.serializeM(await bot.getQuotedObj());
          if (!_0x344503.quoted) {
            return bot.reply("Pesan Yang anda reply tidak mengandung reply");
          }
          await _0x344503.quoted.copyNForward(bot.chat, true);
        }
        break;
      case "fakehidetag":
        if (!isPremium) {
          return rely(mess.OnlyPrem);
        }
        if (!bot.isGroup) {
          return bot.reply(mess.OnlyGrup);
        }
        if (!text) {
          return hisoka.sendTextWithMentions(
            bot.chat,
            "Gunakan dengan cara " +
              command +
              " *@tag|text*\n\n_Contoh_\n\n" +
              command +
              " @" +
              bot.sender.split("@")[0] +
              "|Halo",
            bot
          );
        }
        var _0x4fb538 = text.split("|")[0],
          _0x48c355 = text.split("|")[1];
        if (!_0x4fb538.startsWith("@")) {
          return bot.reply("Tag orangnya");
        }
        var _0xdc4359 = [];
        _0x589500.map((_0x374990) => _0xdc4359.push(_0x374990.id));
        var _0x12f0f0 = parseMention(_0x59c767);
        _0x250c09("#fakehidetag", bot.sender, _cmd);
        const _0x151cd7 = { mentionedJid: _0x12f0f0 };
        const _0x4d0788 = {};
        (_0x4d0788.text = prefix + "hidetag " + _0x48c355),
          (_0x4d0788.contextInfo = _0x151cd7);
        const _0x518b5b = { extemdedTextMessage: _0x4d0788 };
        var _0x588288 = {
          key: {
            fromMe: false,
            participant: "" + parseMention(_0x4fb538),
            remoteJid: bot.chat ? bot.chat : "",
          },
          message: _0x518b5b,
        };
        const _0x28c098 = { conversation: prefix + "hidetag " + _0x48c355 };
        var _0x2e1e00 = {
          key: {
            fromMe: false,
            participant: "" + parseMention(_0x4fb538),
            remoteJid: bot.chat ? bot.chat : "",
          },
          message: _0x28c098,
        };
        const _0x5795be = {};
        (_0x5795be.text = _0x48c355 ? _0x48c355 : ""),
          (_0x5795be.mentions = _0xdc4359),
          hisoka.sendMessage(bot.chat, _0x5795be, {
            quoted: _0x12f0f0.length > 2 ? _0x588288 : _0x2e1e00,
          });
        break;
      case "react":
        if (!isPremium) {
          return rely(mess.OnlyPrem);
        }
        if (!bot.quoted) {
          return bot.reply("Balas pesannya");
        }
        if (!text) {
          return bot.reply("Masukkan 1 emoji");
        }
        if (!_0x141288(text)) {
          return bot.reply("Itu bukan emoji!");
        }
        if (_0x141288(text).length > 1) {
          return bot.reply("Satu aja emojinya");
        }
        _0x250c09("#react", bot.sender, _cmd);
        const _0x56ea4b = {};
        (_0x56ea4b.remoteJid = bot.chat),
          (_0x56ea4b.fromMe = bot.key.fromMe),
          (_0x56ea4b.id = fatkuns.id);
        const _0x3ad40d = {};
        (_0x3ad40d.key = _0x56ea4b), (_0x3ad40d.text = text);
        const _0x7f7e78 = { reactionMessage: _0x3ad40d };
        var _0xfe9308 = _0x7f7e78;
        hisoka.sendMessageFromContent(bot.chat, _0xfe9308);
        break;
      case "setcmd":
        {
          if (!bot.quoted) {
            return bot.reply("Reply Pesan!");
          }
          if (!bot.quoted.fileSha256) {
            return bot.reply("SHA256 Hash Missing");
          }
          if (!text) {
            return bot.reply("Contoh " + (prefix + command) + " .menu");
          }
          let _0x35329a = bot.quoted.fileSha256.toString("base64");
          if (db.data.sticker[_0x35329a] && db.data.sticker[_0x35329a].locked) {
            return bot.reply(
              "You have no permission to change this sticker command"
            );
          }
          db.data.sticker[_0x35329a] = {
            text: text,
            mentionedJid: bot.mentionedJid,
            creator: bot.sender,
            at: +new Date(),
            locked: false,
          };
          bot.reply("Done!");
        }
        break;
      case "delcmd":
        {
          let _0x10a1aa = bot.quoted.fileSha256.toString("base64");
          if (!_0x10a1aa) {
            return bot.reply("SHA256 Hash Missing");
          }
          if (db.data.sticker[_0x10a1aa] && db.data.sticker[_0x10a1aa].locked) {
            return bot.reply(
              "You have no permission to change this sticker command"
            );
          }
          delete db.data.sticker[_0x10a1aa];
          bot.reply("Done!");
        }
        break;
      case "join":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!text) {
            return bot.reply(
              "Kirim perintah " + (prefix + command) + " _linkgrup_"
            );
          }
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com")) {
            return bot.reply(mess.error.Iv);
          }
          bot.reply(mess.wait);
          let _0x2611cf = args[0].split("https://chat.whatsapp.com/")[1];
          await hisoka
            .groupAcceptInvite(_0x2611cf)
            .then((_0xf996d0) => bot.reply(jsonformat(_0xf996d0)))
            .catch((_0x6b36b9) => bot.reply(jsonformat(_0x6b36b9)));
        }
        break;
      case "leave":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          await hisoka
            .groupLeave(bot.chat)
            .then((_0x4ca99e) => bot.reply(jsonformat(_0x4ca99e)))
            .catch((_0x1c5f38) => bot.reply(jsonformat(_0x1c5f38)));
        }
        break;
      case "public":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          hisoka.public = true;
          bot.reply("Sukse Change To Public Mode");
        }
        break;
      case "self":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          hisoka.public = false;
          bot.reply("Sukses Change To Self Mode");
        }
        break;
      case "setppbot":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!fatkuns) {
            return bot.reply(
              "Kirim/Reply Image Dengan Caption " + (prefix + command)
            );
          }
          if (!/image/.test(mime)) {
            return bot.reply(
              "Kirim/Reply Image Dengan Caption " + (prefix + command)
            );
          }
          if (/webp/.test(mime)) {
            return bot.reply(
              "Kirim/Reply Image Dengan Caption " + (prefix + command)
            );
          }
          let _0x443c62 = await hisoka.downloadAndSaveMediaMessage(fatkuns);
          const _0x5cc4f3 = { url: _0x443c62 };
          await hisoka
            .updateProfilePicture(botNumber, _0x5cc4f3)
            .catch((_0x2502bd) => fs.unlinkSync(_0x443c62));
          bot.reply("Done");
        }
        break;
      case "nsfw":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!isAdmins && !isCreator) {
            return bot.reply("Admin Specific Features!");
          }
          if (args[0] === "on") {
            if (nsfwck) {
              return bot.reply("Udh on di group ini");
            }
            _nsfw.push(bot.chat);
            fs.writeFileSync("./database/nsfw.json", JSON.stringify(_nsfw));
            _0x54ae70("Nsfw berhasil di aktifkan di group ini");
          } else {
            if (args[0] === "off") {
              if (!nsfwck) {
                return bot.reply("Udh off di group ini");
              }
              _nsfw.splice(bot.chat, 1);
              fs.writeFileSync("./database/nsfw.json", JSON.stringify(_nsfw));
              _0x54ae70("Nsfw berhasil di nonaktifkan di group ini");
            } else {
              const _0x5259b0 = { displayText: "ON" };
              hisoka.sendButMessage(
                bot.chat,
                "Mode Nsfw",
                "" + _0xcd848b,
                [
                  {
                    buttonId: ".nsfw on",
                    buttonText: _0x5259b0,
                    type: 1,
                  },
                  {
                    buttonId: ".nsfw off",
                    buttonText: { displayText: "OFF" },
                    type: 1,
                  },
                ],
                { quoted: bot }
              );
            }
          }
        }
        break;
      case "autobio":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (args[0] === "on") {
            if (ownerBio.autobio === true) {
              return bot.reply("Udh on");
            }
            ownerBio.autobio = true;
            _0x54ae70("Autobio berhasil diaktifkan");
          } else {
            if (args[0] === "off") {
              if (ownerBio.autobio === false) {
                return bot.reply("Udh off");
              }
              ownerBio.autobio = false;
              _0x54ae70("Autobio berhasil dinonaktifkan");
            } else {
              const _0x2a738f = { displayText: "ON" };
              hisoka.sendButMessage(
                bot.chat,
                "Mode Autobio",
                "" + _0xcd848b,
                [
                  {
                    buttonId: ".autobio on",
                    buttonText: _0x2a738f,
                    type: 1,
                  },
                  {
                    buttonId: ".autobio off",
                    buttonText: { displayText: "OFF" },
                    type: 1,
                  },
                ],
                { quoted: bot }
              );
            }
          }
        }
        break;
      case "anticall":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (args[0] === "on") {
            if (ownerBio.anticall === true) {
              return bot.reply("Udh on");
            }
            ownerBio.anticall = true;
            _0x54ae70("Anticall berhasil diaktifkan");
          } else {
            if (args[0] === "off") {
              if (ownerBio.anticall === false) {
                return bot.reply("Udh off");
              }
              ownerBio.anticall = false;
              _0x54ae70("Anticall berhasil dinonaktifkan");
            } else {
              const _0x21a43f = { displayText: "ON" };
              hisoka.sendButMessage(
                bot.chat,
                "Mode Anticall",
                "" + _0xcd848b,
                [
                  {
                    buttonId: ".anticall on",
                    buttonText: _0x21a43f,
                    type: 1,
                  },
                  {
                    buttonId: ".anticall off",
                    buttonText: { displayText: "OFF" },
                    type: 1,
                  },
                ],
                { quoted: bot }
              );
            }
          }
        }
        break;
      case "autorespond":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (args[0] === "on") {
            if (ownerBio.autorespond === true) {
              return bot.reply("Udh on");
            }
            ownerBio.autorespond = true;
            _0x54ae70("Autorespond berhasil diaktifkan");
          } else {
            if (args[0] === "off") {
              if (ownerBio.autorespond === false) {
                return bot.reply("Udh off");
              }
              ownerBio.autorespond = false;
              _0x54ae70("Autorespond berhasil dinonaktifkan");
            } else {
              const _0x27263d = { displayText: "ON" };
              hisoka.sendButMessage(
                bot.chat,
                "Mode Autorespond",
                "" + _0xcd848b,
                [
                  {
                    buttonId: ".autorespond on",
                    buttonText: _0x27263d,
                    type: 1,
                  },
                  {
                    buttonId: ".autorespond off",
                    buttonText: { displayText: "OFF" },
                    type: 1,
                  },
                ],
                { quoted: bot }
              );
            }
          }
        }
        break;
      case "autoblok":
      case "autoblok212":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (args[0] === "on") {
            if (ownerBio.autoblok212 === true) {
              return bot.reply("Udh on");
            }
            ownerBio.autoblok212 = true;
            _0x54ae70("Autoblok berhasil diaktifkan");
          } else {
            if (args[0] === "off") {
              if (ownerBio.autoblok212 === false) {
                return bot.reply("Udh off");
              }
              ownerBio.autoblok212 = false;
              _0x54ae70("Autoblok berhasil dinonaktifkan");
            } else {
              const _0x157fe5 = { displayText: "ON" };
              hisoka.sendButMessage(
                bot.chat,
                "Mode Autoblok",
                "" + _0xcd848b,
                [
                  {
                    buttonId: ".autoblok on",
                    buttonText: _0x157fe5,
                    type: 1,
                  },
                  {
                    buttonId: ".autoblok off",
                    buttonText: { displayText: "OFF" },
                    type: 1,
                  },
                ],
                { quoted: bot }
              );
            }
          }
        }
        break;
      case "autoread":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (args[0] === "on") {
            if (ownerBio.autoread === true) {
              return bot.reply("Udh on");
            }
            ownerBio.autoread = true;
            _0x54ae70("Autoread berhasil diaktifkan");
          } else {
            if (args[0] === "off") {
              if (ownerBio.autoread === false) {
                return bot.reply("Udh off");
              }
              ownerBio.autoread = false;
              _0x54ae70("Autoread berhasil dinonaktifkan");
            } else {
              const _0x5286cb = { displayText: "ON" };
              hisoka.sendButMessage(
                bot.chat,
                "Mode Autoread",
                "" + _0xcd848b,
                [
                  {
                    buttonId: ".autoread on",
                    buttonText: _0x5286cb,
                    type: 1,
                  },
                  {
                    buttonId: ".autoread off",
                    buttonText: { displayText: "OFF" },
                    type: 1,
                  },
                ],
                { quoted: bot }
              );
            }
          }
        }
        break;
      case "addstiker":
      case "addsticker":
      case "addstik":
        {
          if (!bot.key.fromMe && !isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!/webp/.test(mime)) {
            return _0x54ae70("Contoh : " + (prefix + command) + " halo");
          }
          if (!text) {
            return bot.reply("Contoh : " + (prefix + command) + " halo");
          }
          if (text.includes("|")) {
            return bot.reply("Contoh : " + (prefix + command) + " halo");
          }
          let _0x1b6bca = await hisoka.downloadMediaMessage(fatkuns);
          setiker.push("" + text);
          fs.writeFileSync("./database/" + text + ".webp", _0x1b6bca);
          fs.writeFileSync("./database/stik.json", JSON.stringify(setiker));
          _0x54ae70(
            "Sukses Menambahkan Sticker\nCek dengan cara " + prefix + "liststik"
          );
        }
        break;
      case "liststik":
      case "liststiker":
      case "liststc": {
        _0x48c355 = "*STICKER LIST :*\n\n";
        for (let _0x4ea80a of setiker) {
          _0x48c355 += "- " + _0x4ea80a + "\n";
        }
        _0x48c355 +=
          "\n*Total : " +
          setiker.length +
          "*\n\n_Untuk mengambil sticker silahkan kirim pesan sesuai list stiker di atas_";
        _0x54ae70(_0x48c355);
        break;
      }
      case "addfoto":
      case "addimage":
      case "addphoto":
      case "addimg":
        {
          if (!bot.key.fromMe && !isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!/image/.test(mime)) {
            return _0x54ae70("Contoh : " + (prefix + command) + " halo");
          }
          if (!text) {
            return bot.reply("Contoh : " + (prefix + command) + " halo");
          }
          if (text.includes("|")) {
            return bot.reply("Contoh : " + (prefix + command) + " halo");
          }
          let _0x267c85 = await hisoka.downloadMediaMessage(fatkuns);
          imagenye.push("" + text);
          fs.writeFileSync("./database/" + text + ".jpg", _0x267c85);
          fs.writeFileSync("./database/image.json", JSON.stringify(imagenye));
          _0x54ae70(
            "Sukses Menambahkan Image\nCek dengan cara " + prefix + "listimg"
          );
        }
        break;
      case "listimage":
      case "imagelist":
      case "listimg": {
        _0x48c355 = "*IMAGE LIST :*\n\n";
        for (let _0x1198fd of imagenye) {
          _0x48c355 += "- " + _0x1198fd + "\n";
        }
        _0x48c355 +=
          "\n*Total : " +
          imagenye.length +
          "*\n\n_Untuk mengambil image silahkan kirim pesan sesuai list image di atas_";
        _0x54ae70(_0x48c355);
        break;
      }
      case "addvideo":
      case "addvidio":
      case "addvid":
        {
          if (!bot.key.fromMe && !isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!/video/.test(mime)) {
            return _0x54ae70("Contoh : " + (prefix + command) + " halo");
          }
          if ((fatkuns.msg || fatkuns).seconds > 31) {
            return bot.reply("Maksimal 30 detik");
          }
          if (!text) {
            return bot.reply("Contoh : " + (prefix + command) + " halo");
          }
          if (text.includes("|")) {
            return bot.reply("Contoh : " + (prefix + command) + " halo");
          }
          let _0x3b5295 = await hisoka.downloadMediaMessage(fatkuns);
          videonye.push("" + text);
          fs.writeFileSync("./database/" + text + ".mp4", _0x3b5295);
          fs.writeFileSync("./database/video.json", JSON.stringify(videonye));
          _0x54ae70(
            "Sukses Menambahkan Video\nCek dengan cara " + prefix + "listvid"
          );
        }
        break;
      case "videolist":
      case "listvidio":
      case "listvid":
      case "listvideo": {
        _0x48c355 = "*VIDEO LIST :*\n\n";
        for (let _0x25e0d0 of videonye) {
          _0x48c355 += "- " + _0x25e0d0 + "\n";
        }
        _0x48c355 +=
          "\n*Total : " +
          videonye.length +
          "*\n\n_Untuk mengambil video silahkan kirim pesan sesuai list video di atas_";
        _0x54ae70(_0x48c355);
        break;
      }
      case "addaud":
      case "addaudio":
      case "addvn":
        {
          if (!bot.key.fromMe && !isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!/audio/.test(mime)) {
            return _0x54ae70("Contoh : " + (prefix + command) + " halo");
          }
          if ((fatkuns.msg || fatkuns).seconds > 31) {
            return bot.reply("Maksimal 30 detik");
          }
          if (!text) {
            return bot.reply("Contoh : " + (prefix + command) + " halo");
          }
          if (text.includes("|")) {
            return bot.reply("Contoh : " + (prefix + command) + " halo");
          }
          let _0x157a34 = await hisoka.downloadMediaMessage(fatkuns);
          audionye.push("" + text);
          fs.writeFileSync("./database/" + text + ".mp3", _0x157a34);
          fs.writeFileSync("./database/vn.json", JSON.stringify(audionye));
          _0x54ae70(
            "Sukses Menambahkan Vn / audio \nCek dengan cara " +
              prefix +
              "listvn"
          );
        }
        break;
      case "listvn":
      case "listaudio": {
        _0x48c355 = "*AUDIO LIST :*\n\n";
        for (let _0x4b309f of audionye) {
          _0x48c355 += "- " + _0x4b309f + "\n";
        }
        _0x48c355 +=
          "\n*Total : " +
          audionye.length +
          "*\n\n_Untuk mengambil audio silahkan kirim pesan sesuai list audio di atas_";
        _0x54ae70(_0x48c355);
        break;
      }
      case "bcimage":
      case "bcimg":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!text) {
            return bot.reply(
              "Reply foto dengan caption " + (prefix + command) + " Tes"
            );
          }
          if (!/image/.test(mime)) {
            return bot.reply(
              "Reply foto dengan caption " + (prefix + command) + " Tes"
            );
          }
          let _0x2340f1 = await _0x17324d.chats
              .all()
              .map((_0x515d1f) => _0x515d1f.id),
            _0x1a43df = await hisoka.downloadAndSaveMediaMessage(fatkuns),
            _0x3cf081 = fs.readFileSync(_0x1a43df);
          for (let _0x2eae53 of _0x2340f1) {
            let _0x599a8a = "\u300C BROADCAST \u300D\n\n" + text;
            const _0xe11671 = {
              image: _0x3cf081,
              caption: _0x599a8a,
            };
            const _0x4d6af0 = { quoted: _0x16ddfe };
            hisoka.sendMessage(_0x2eae53, _0xe11671, _0x4d6af0);
          }
          bot.reply("Sukses Broadcast");
        }
        break;
      case "bcvideo":
      case "bcvid":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!text) {
            return bot.reply(
              "Reply video dengan caption " + (prefix + command) + " Tes"
            );
          }
          if (!/video/.test(mime)) {
            return bot.reply(
              "Reply video dengan caption " + (prefix + command) + " Tes"
            );
          }
          let _0x213afb = await _0x17324d.chats
              .all()
              .map((_0x3aa662) => _0x3aa662.id),
            _0x163340 = await hisoka.downloadAndSaveMediaMessage(fatkuns),
            _0x25f0b2 = fs.readFileSync(_0x163340);
          for (let _0x2687b2 of _0x213afb) {
            let _0x35db75 = "\u300C BROADCAST \u300D\n\n" + text;
            const _0x2f5f70 = {
              video: _0x25f0b2,
              caption: _0x35db75,
              mimetype: "video/mp4",
              duration: 909090909,
            };
            const _0x554d9c = { quoted: _0x16ddfe };
            hisoka.sendMessage(_0x2687b2, _0x2f5f70, _0x554d9c);
          }
          bot.reply("Sukses Broadcast");
        }
        break;
      case "bcaudio":
      case "bcaud":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!/audio/.test(mime)) {
            return bot.reply(
              "Reply audio dengan caption " + (prefix + command) + " Tes"
            );
          }
          let _0x473e87 = await _0x17324d.chats
              .all()
              .map((_0x2e85c3) => _0x2e85c3.id),
            _0x28fdc5 = await hisoka.downloadAndSaveMediaMessage(fatkuns),
            _0x55bb51 = fs.readFileSync(_0x28fdc5);
          for (let _0x180a84 of _0x473e87) {
            let _0x2c4f19 = "\u300C BROADCAST \u300D\n\n" + text;
            const _0x35686c = {
              audio: _0x55bb51,
              mimetype: "audio/mpeg",
              ptt: false,
              duration: 909090909,
            };
            const _0x105a0f = { quoted: _0x16ddfe };
            hisoka.sendMessage(_0x180a84, _0x35686c, _0x105a0f);
          }
          bot.reply("Sukses Broadcast");
        }
        break;
      case "bcvn":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!/audio/.test(mime)) {
            return bot.reply(
              "Reply audio dengan caption " + (prefix + command) + " Tes"
            );
          }
          let _0x212ed3 = await _0x17324d.chats
              .all()
              .map((_0x257e09) => _0x257e09.id),
            _0x4a1c02 = await hisoka.downloadAndSaveMediaMessage(fatkuns),
            _0x2691ba = fs.readFileSync(_0x4a1c02);
          for (let _0x3121d9 of _0x212ed3) {
            let _0x317256 = "\u300C BROADCAST \u300D\n\n" + text;
            const _0x20538d = {
              audio: _0x2691ba,
              mimetype: "audio/mpeg",
              ptt: true,
              duration: 909090909,
            };
            const _0x5b56ac = { quoted: _0x16ddfe };
            hisoka.sendMessage(_0x3121d9, _0x20538d, _0x5b56ac);
          }
          bot.reply("Sukses Broadcast");
        }
        break;
      case "bcstiker":
      case "bcstik":
      case "bcsticker":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!/webp/.test(mime)) {
            return bot.reply(
              "Reply stiker dengan caption " + (prefix + command)
            );
          }
          let _0x2ba413 = await _0x17324d.chats
              .all()
              .map((_0x1e7117) => _0x1e7117.id),
            _0x5eeb73 = await hisoka.downloadAndSaveMediaMessage(fatkuns),
            _0x20693f = fs.readFileSync(_0x5eeb73);
          for (let _0x5e0350 of _0x2ba413) {
            let _0x28a17f = "\u300C BROADCAST \u300D\n\n" + text;
            const _0x3e878a = { url: _0x5eeb73 };
            const _0x635dc9 = { sticker: _0x3e878a };
            const _0x23dfbb = { quoted: _0x16ddfe };
            hisoka.sendMessage(_0x5e0350, _0x635dc9, _0x23dfbb);
          }
          bot.reply("Sukses Broadcast");
        }
        break;
      case "bc":
      case "broadcast":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!text) {
            return bot.reply("Example : " + (prefix + command) + " Tes");
          }
          let _0x586b2e = await _0x17324d.chats
              .all()
              .map((_0x226533) => _0x226533.id),
            _0x47d457 = await hisoka.reSize("" + ownerBio.pathimg, 300, 300);
          bot.reply(
            "Mengirim Broadcast Ke " +
              _0x586b2e.length +
              " Chat\nWaktu Selesai " +
              _0x586b2e.length * 1.5 +
              " detik"
          );
          for (let _0x214e25 of _0x586b2e) {
            await sleep(1500);
            const _0x319404 = { displayText: "Owner" };
            const _0xe81b10 = {
              buttonId: ".owner",
              buttonText: _0x319404,
              type: 1,
            };
            const _0x1c507f = { displayText: "Donation" };
            const _0x2c6eaa = {
              buttonId: ".donasi",
              buttonText: _0x1c507f,
              type: 1,
            };
            const _0x548f06 = {
              userJid: bot.chat,
              quoted: bot,
            };
            hisoka.sendButLoc(
              _0x214e25,
              "" + text,
              _0xcd848b,
              _0x47d457,
              [_0xe81b10, _0x2c6eaa],
              _0x548f06
            );
          }
          bot.reply("Sukses Broadcast");
        }
        break;
      case "bcsewa":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!text) {
            return bot.reply("Example : " + (prefix + command) + " Tes");
          }
          _0x250c09("#bcsewa", bot.sender, _cmd);
          for (let _0x5a1de1 of sewa) {
            const _0x3b6912 = { text: text };
            await hisoka.sendMessage(_0x5a1de1.id, _0x3b6912);
            await sleep(3000);
          }
          _0x54ae70("Sukses bc ke " + sewa.length);
        }
        break;
      case "addprem":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          const _0x4586be = args.join(" "),
            _0x18a411 = _0x4586be.split("|")[0],
            _0x6a4a51 = _0x4586be.split("|")[1];
          if (!_0x18a411) {
            return bot.reply(
              "Penggunaan :\n*" +
                prefix +
                "addprem* @tag|waktu\n*" +
                prefix +
                "addprem* nomor|waktu\n\nContoh : " +
                command +
                " @tag|30d"
            );
          }
          if (!_0x6a4a51) {
            return bot.reply("Mau yang berapa hari?");
          }
          let _0x4c9240 = bot.quoted
            ? bot.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (_0x4c9240) {
            _0x250c09("#addprem", bot.sender, _cmd);
            _prem.addPremiumUser(
              (_0x18a411.replace("@", "") + "@s.whatsapp.net").replace(
                " @",
                "@"
              ),
              _0x6a4a51,
              premium
            );
            _0x54ae70("Sukses");
          } else {
            var _0x25fb1c = await hisoka.onWhatsApp(
              _0x18a411 + "@s.whatsapp.net"
            );
            if (_0x25fb1c.length == 0) {
              return bot.reply(
                "Masukkan nomer yang valid/terdaftar di WhatsApp"
              );
            }
            _0x250c09("#addprem", bot.sender, _cmd);
            _prem.addPremiumUser(
              (_0x18a411.replace("@", "") + "@s.whatsapp.net").replace(
                " @",
                "@"
              ),
              _0x6a4a51,
              premium
            );
            _0x54ae70("Sukses");
          }
        }
        break;
      case "delprem":
        if (!isCreator) {
          return bot.reply(mess.OnlyOwner);
        }
        if (!args[0]) {
          return bot.reply(
            "Penggunaan :\n*" +
              prefix +
              "delprem* @tag\n*" +
              prefix +
              "delprem* nomor"
          );
        }
        let _0x3f6c71 = bot.quoted
          ? bot.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (_0x3f6c71) {
          _0x250c09("#delprem", bot.sender, _cmd);
          premium.splice(_prem.getPremiumPosition(_0x3f6c71, premium), 1);
          fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
          _0x54ae70("Sukses!");
        } else {
          var _0x3e65b3 = await hisoka.onWhatsApp(args[0] + "@s.whatsapp.net");
          if (_0x3e65b3.length == 0) {
            return bot.reply("Masukkan nomer yang valid/terdaftar di WhatsApp");
          }
          _0x250c09("#delprem", bot.sender, _cmd);
          premium.splice(
            _prem.getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
            1
          );
          fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
          _0x54ae70("Sukses!");
        }
        break;
      case "addsewa":
        if (!isCreator) {
          return bot.reply(mess.OnlyOwner);
        }
        if (text < 2) {
          return bot.reply(
            "Gunakan dengan cara " +
              command +
              " *linkgc waktu*\n\nContoh : " +
              command +
              " https://chat.whatsapp.com/PnwpPqn0b 30d"
          );
        }
        if (!isUrl(args[0])) {
          return bot.reply(mess.error.Iv);
        }
        var _0x457ee1 = args[0];
        _0x250c09("#addsewa", bot.sender, _cmd),
          (_0x457ee1 = _0x457ee1.split("https://chat.whatsapp.com/")[1]);
        if (!text) {
          return bot.reply("Waktunya?");
        }
        var _0x351076 = await hisoka.groupAcceptInvite(_0x457ee1);
        if (_sewa.checkSewaGroup(_0x351076, sewa)) {
          return bot.reply("Bot sudah disewa oleh grup tersebut!");
        }
        _sewa.addSewaGroup(_0x351076, args[1], sewa),
          _0x54ae70("Success Add Sewa Group Berwaktu!");
        break;
      case "delsewa":
        if (!isCreator) {
          return bot.reply(mess.OnlyOwner);
        }
        if (!bot.isGroup) {
          return bot.reply(
            "Perintah ini hanya bisa dilakukan di Grup yang menyewa bot"
          );
        }
        if (!_0x44c490) {
          return bot.reply("Bot tidak disewa di Grup ini");
        }
        _0x250c09("#delsewa", bot.sender, _cmd),
          sewa.splice(
            _sewa.getSewaPosition(args[0] ? args[0] : bot.chat, sewa),
            1
          ),
          fs.writeFileSync(
            "./database/sewa.json",
            JSON.stringify(sewa, null, 2)
          ),
          _0x54ae70("Sukses");
        break;
      case "resetlimit":
        if (!isCreator) {
          return bot.reply(mess.OnlyOwner);
        }
        _0x250c09("#resetlimit", bot.sender, _cmd),
          (limit = []),
          fs.writeFileSync(
            "./database/limit.json",
            JSON.stringify(limit, null, 2)
          ),
          (glimit = []),
          fs.writeFileSync(
            "./database/glimit.json",
            JSON.stringify(glimit, null, 2)
          ),
          _0x54ae70("Sukses reset limit pengguna");
        break;
      case "halloween2":
      case "horror":
      case "game8bit":
      case "layered":
      case "glitch2":
      case "coolg":
      case "coolwg":
      case "realistic":
      case "space3d":
      case "gtiktok":
      case "stone":
      case "marvel":
      case "marvel2":
      case "pornhub":
      case "avengers":
      case "metalr":
      case "metalg":
      case "metalg2":
      case "halloween2":
      case "lion":
      case "wolf_bw":
      case "wolf_g":
      case "ninja":
      case "3dsteel":
      case "horror2":
      case "lava":
      case "bagel":
        {
          if (!text) {
            return bot.reply(
              "Gunakan dengan cara " + command + " *text|text2*"
            );
          }
          if (!q.includes("|")) {
            return bot.reply(
              "Gunakan dengan cara " + command + " *text|text2*"
            );
          }
          mm = args.join(" ");
          m1 = mm.split("|")[0];
          m2 = mm.split("|")[1];
          _0x54ae70(mess.wait);
          let _0x11f67c =
            "https://api.zeeoneofc.xyz/api/textpro/" +
            command +
            "?text=" +
            m1 +
            "&text2=" +
            m2 +
            "&apikey=" +
            ownerBio.BotKey;
          const _0x442caa = { url: _0x11f67c };
          const _0xb09e8 = {
            image: _0x442caa,
            caption: "Done kak",
          };
          hisoka
            .sendMessage(bot.chat, _0xb09e8, { quoted: bot })
            .catch((_0x5a442b) => {
              _0x54ae70("Fitur sedang eror, cobalah beberapa saat lagi");
            });
        }
        break;
      case "blackpink":
      case "rainbow2":
      case "water_pipe":
      case "halloween":
      case "sketch":
      case "sircuit":
      case "discovery":
      case "metallic2":
      case "fiction":
      case "demon":
      case "transformer":
      case "berry":
      case "thunder":
      case "magma":
      case "3dstone":
      case "neon":
      case "glitch":
      case "harry_potter":
      case "embossed":
      case "broken":
      case "papercut":
      case "gradient":
      case "glossy":
      case "watercolor":
      case "multicolor":
      case "neon_devil":
      case "underwater":
      case "bear":
      case "wonderfulg":
      case "christmas":
      case "neon_light":
      case "snow":
      case "cloudsky":
      case "luxury2":
      case "gradient2":
      case "summer":
      case "writing":
      case "engraved":
      case "summery":
      case "3dglue":
      case "metaldark":
      case "neonlight":
      case "oscar":
      case "minion":
      case "holographic":
      case "purple":
      case "glossyb":
      case "deluxe2":
      case "glossyc":
      case "fabric":
      case "neonc":
      case "newyear":
      case "newyear2":
      case "metals":
      case "xmas":
      case "blood":
      case "darkg":
      case "joker":
      case "wicker":
      case "natural":
      case "firework":
      case "skeleton":
      case "balloon":
      case "balloon2":
      case "balloon3":
      case "balloon4":
      case "balloon5":
      case "balloon6":
      case "balloon7":
      case "steel":
      case "gloss":
      case "denim":
      case "decorate":
      case "decorate2":
      case "peridot":
      case "rock":
      case "glass":
      case "glass2":
      case "glass3":
      case "glass4":
      case "glass5":
      case "glass6":
      case "glass7":
      case "glass8":
      case "captain_as2":
      case "robot":
      case "equalizer":
      case "toxic":
      case "sparkling":
      case "sparkling2":
      case "sparkling3":
      case "sparkling4":
      case "sparkling5":
      case "sparkling6":
      case "sparkling7":
      case "decorative":
      case "chocolate":
      case "strawberry":
      case "koifish":
      case "bread":
      case "matrix":
      case "blood2":
      case "neonligth2":
      case "thunder2":
      case "3dbox":
      case "neon2":
      case "roadw":
      case "bokeh":
      case "gneon":
      case "advanced":
      case "dropwater":
      case "wall":
      case "chrismast":
      case "honey":
      case "drug":
      case "marble":
      case "marble2":
      case "ice":
      case "juice":
      case "rusty":
      case "abstra":
      case "biscuit":
      case "wood":
      case "scifi":
      case "metalr":
      case "purpleg":
      case "shiny":
      case "jewelry":
      case "jewelry2":
      case "jewelry3":
      case "jewelry4":
      case "jewelry5":
      case "jewelry6":
      case "jewelry7":
      case "jewelry8":
      case "metalh":
      case "golden":
      case "glitter":
      case "glitter2":
      case "glitter3":
      case "glitter4":
      case "glitter5":
      case "glitter6":
      case "glitter7":
      case "metale":
      case "carbon":
      case "candy":
      case "metalb":
      case "gemb":
      case "3dchrome":
      case "metalb2":
      case "metalg":
        {
          if (!text) {
            return bot.reply("Gunakan dengan cara " + command + " *text*");
          }
          _0x54ae70(mess.wait);
          let _0x2fd4c3 =
            "https://api.zeeoneofc.xyz/api/textpro/" +
            command +
            "?text=" +
            q +
            "&apikey=" +
            ownerBio.BotKey;
          const _0xfa194f = { url: _0x2fd4c3 };
          const _0x345488 = {
            image: _0xfa194f,
            caption: "Done kak",
          };
          hisoka
            .sendMessage(bot.chat, _0x345488, { quoted: bot })
            .catch((_0x107961) => {
              _0x54ae70("Fitur sedang eror, cobalah beberapa saat lagi");
            });
        }
        break;
      case "addowner":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!text) {
            return bot.reply("Gunakan dengan cara " + command + " *@tag*");
          }
          let _0x3faf9b = bot.mentionedJid[0]
            ? bot.mentionedJid[0]
            : bot.quoted
            ? bot.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          _0x3faf9b
            ? (ownerNumber.push(_0x3faf9b),
              fs.writeFileSync(
                "./config.json",
                JSON.stringify(ownerBio, null, 2)
              ),
              _0x54ae70("Sukses"))
            : _0x54ae70(
                "Gunakan dengan cara " + (prefix + command) + " *@tag*"
              );
        }
        break;
      case "delowner":
        {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          if (!text) {
            return bot.reply("Gunakan dengan cara " + command + " *@tag/jid*");
          }
          let _0x1ffe8f = bot.mentionedJid[0]
            ? bot.mentionedJid[0]
            : bot.quoted
            ? bot.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          if (_0x1ffe8f) {
            if (!ownerNumber.includes(_0x1ffe8f)) {
              return bot.reply("Dia bukan owner");
            }
            ownerNumber.splice(ownerNumber.indexOf(_0x1ffe8f, 1));
            _0x54ae70("Sukses");
          } else {
            _0x54ae70("Gunakan dengan cara " + (prefix + command) + " *@tag*");
          }
        }
        break;
      case "inventori":
      case "inventory":
      case "profile":
        {
          let _0x4e731c = "*INFO USER*\n\n";
          _0x4e731c +=
            "*\u2764️ Blood* : " +
            (getDarah(bot.sender) ? getDarah(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "*\u25FB️️ Iron* : " +
            (getBesi(bot.sender) ? getBesi(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "*\uD83C\uDF1F Gold* : " +
            (getEmas(bot.sender) ? getEmas(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "*\uD83D\uDC32 Emerald* : " +
            (getEmerald(bot.sender) ? getEmerald(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "*\uD83D\uDC8E Diamond* : " +
            (getDm(bot.sender) ? getDm(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "*\u23FA️ Limit* : " +
            (isCreator
              ? "Unlimited"
              : isPremium
              ? "Unlimited"
              : getLimit(bot.sender, limitCount, limit)) +
            "\n";
          _0x4e731c +=
            "*\uD83D\uDCB0 Money* : $" +
            (getBalance(bot.sender, balance)
              ? getBalance(bot.sender, balance)
              : 0) +
            "\n";
          _0x4e731c +=
            "*\uD83E\uDDEA Potion* : " +
            (getPotion(bot.sender) ? getPotion(bot.sender) : 0) +
            "\n\n";
          _0x4e731c += "*HUNT RESULT*\n";
          _0x4e731c +=
            "*\uD83D\uDC1F Fish* :" +
            util.format(
              getIkan(bot.sender)
                ? getIkan(bot.sender)
                : 0 + getMancingIkan(bot.sender)
                ? getMancingIkan(bot.sender)
                : 0
            ) +
            "\n";
          _0x4e731c +=
            "*\uD83D\uDC14 Chicken* : " +
            (getAyam(bot.sender) ? getAyam(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "*\uD83D\uDC07 Rabbit* : " +
            (getKelinci(bot.sender) ? getKelinci(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "*\uD83D\uDC11 Sheep* : " +
            (getDomba(bot.sender) ? getDomba(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "*\uD83D\uDC04 Cow* : " +
            (getSapi(bot.sender) ? getSapi(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "*\uD83D\uDC18 Elephant* : " +
            (getGajah(bot.sender) ? getGajah(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "\uD83C\uDFA2 *Coal* : " +
            (getMiningcoal(bot.sender) ? getMiningcoal(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "\uD83D\uDED1 *Stone* : " +
            (getMiningstone(bot.sender) ? getMiningstone(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "\u2744️ *Copper Ore* : " +
            (getMiningore(bot.sender) ? getMiningore(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "\uD83D\uDEE0️ *Ingot Ore* : " +
            (getMiningingot(bot.sender) ? getMiningingot(bot.sender) : 0) +
            "\n";
          _0x4e731c +=
            "\uD83E\uDEB5 *Wood* : " +
            (getNebangKayu(bot.sender) ? getNebangKayu(bot.sender) : 0) +
            "\n";
          const _0x292cc5 = {
            url: "https://telegra.ph/file/eb026b67d45e17632a131.jpg",
          };
          const _0x4da0c2 = {
            image: _0x292cc5,
            caption: _0x4e731c,
          };
          hisoka.sendMessage(bot.chat, _0x4da0c2, {
            quoted: bot,
          });
        }
        break;
      case "mining":
      case "mine":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (_0x9898c < 1) {
            return bot.reply("Kamu Lelah!, Coba Sembuhkan Menggunakan Ramuan");
          }
          let _0x21387b = [1, 2, 5, 0, 3, 0, 1, 1, 4, 1, 5, 0, 0],
            _0x378b91 = [0, 1, 2, 3, 0, 0, 0, 1, 1, 0, 0, 2],
            _0x4ff677 = [0, 0, 1, 0, 0, 1, 0, 2, 1, 0, 0, 1];
          var _0x3d0921 =
              _0x21387b[Math.floor(Math.random() * _0x21387b.length)],
            _0x46cc1c = _0x378b91[Math.floor(Math.random() * _0x378b91.length)],
            _0x5a1358 = _0x4ff677[Math.floor(Math.random() * _0x4ff677.length)];
          setTimeout(async () => {
            let _0x5946b9 =
              "_MINING RESULT_\n\n*Iron* : " +
              _0x3d0921 +
              "\n*Gold* : " +
              _0x46cc1c +
              "\n*Emerald* : " +
              _0x5a1358;
            const _0x234788 = {
              url: "https://telegra.ph/file/d17479f0a56cc52826101.jpg",
            };
            const _0x4aea44 = {
              image: _0x234788,
              caption: _0x5946b9,
            };
            await hisoka.sendMessage(bot.chat, _0x4aea44, {
              quoted: bot,
            });
          }, 7000);
          setTimeout(async () => {
            await hisoka.sendTextWithMentions(
              bot.chat,
              "@" + bot.sender.split("@")[0] + " Otw Mining",
              bot
            );
          }, 1500);
          kurangDarah(bot.sender, 10);
          addBesi(bot.sender, _0x3d0921);
          addEmas(bot.sender, _0x46cc1c);
          addEmerald(bot.sender, _0x5a1358);
        }
        break;
      case "beli":
      case "buy":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (!text) {
            return bot.reply(
              "Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: " +
                (prefix + command) +
                " baitfood"
            );
          }
          var _0x2341f7 = args[1];
          if (args[0] === "potion") {
            let _0x3a730f = 100000 * _0x2341f7;
            if (!args[1]) {
              return bot.reply(
                "Example : " +
                  (prefix + command) +
                  " potion 2\n 1 Potion = 100000 Money"
              );
            }
            if (_0x4671bd < _0x3a730f) {
              return bot.reply(
                "Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini"
              );
            }
            kurangMonay(bot.sender, _0x3a730f);
            var _0x5422b8 = _0x2341f7 * 1;
            addPotion(bot.sender, _0x5422b8);
            setTimeout(async () => {
              bot.reply(
                "Transaksi Berhasil \u2705\n*Sisa uang* : " +
                  getMonay(bot.sender) +
                  "\n*Potion* : " +
                  getPotion(bot.sender)
              );
            }, 2000);
          } else {
            if (args[0] === "baitfood") {
              let _0x43ed73 = 5000 * _0x2341f7;
              if (!args[1]) {
                return bot.reply(
                  "Example : " +
                    (prefix + command) +
                    " baitfood 2\n 1 Bait Food = 2500 Money"
                );
              }
              if (_0x4671bd < _0x43ed73) {
                return bot.reply(
                  "Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini"
                );
              }
              kurangMonay(bot.sender, _0x43ed73);
              var _0x5422b8 = _0x2341f7 * 1;
              addUmpan(bot.sender, _0x5422b8);
              setTimeout(async () => {
                bot.reply(
                  "Transaksi Berhasil \u2705\n*Sisa uang* : " +
                    getMonay(bot.sender) +
                    "\n*Bait Food* : " +
                    getUmpan(bot.sender)
                );
              }, 2000);
            } else {
              if (args[0] === "limit") {
                let _0x447966 = 35000 * _0x2341f7;
                if (!args[1]) {
                  return bot.reply(
                    "Example : " +
                      (prefix + command) +
                      " limit 2\n 1 Limit = 35000 Money"
                  );
                }
                if (_0x4671bd < _0x447966) {
                  return bot.reply(
                    "Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini"
                  );
                }
                kurangMonay(bot.sender, _0x447966);
                var _0x5422b8 = _0x2341f7 * 1;
                addLimit(bot.sender, _0x5422b8);
                setTimeout(async () => {
                  bot.reply(
                    "Transaksi Berhasil \u2705\n*Sisa uang* : " +
                      getMonay(bot.sender) +
                      "\n*Limit* : " +
                      getLimit(bot.sender)
                  );
                }, 2000);
              } else {
                bot.reply(
                  "Mau buy apa lu?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: " +
                    (prefix + command) +
                    " baitfood"
                );
              }
            }
          }
        }
        break;
      case "sell":
      case "sel":
      case "jual":
        {
          if (!text) {
            return bot.reply(
              "Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : " +
                (prefix + command) +
                " fish 2"
            );
          }
          var _0x2341f7 = args[1];
          if (args[0] === "fish") {
            if (_0x43e8d2 < _0x2341f7) {
              return bot.reply(
                "Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini"
              );
            }
            if (!args[1]) {
              return bot.reply(
                "Example : " +
                  (prefix + command) +
                  " fish 2\n 1 Fish = 1500 Money"
              );
            }
            kurangIkan(bot.sender, _0x2341f7);
            let _0x499099 = 1500 * _0x2341f7;
            addMonay(bot.sender, _0x499099);
            setTimeout(async () => {
              bot.reply(
                "Transaksi Berhasil \u2705\n*Sisa uang* : " +
                  getMonay(bot.sender) +
                  "\n*Sisa Ikan Fish : " +
                  getIkan(bot.sender)
              );
            }, 2000);
          } else {
            if (args[0] === "chicken") {
              if (_0x1cbc30 < _0x2341f7) {
                return bot.reply(
                  "Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini"
                );
              }
              if (!args[1]) {
                return bot.reply(
                  "Example : " +
                    (prefix + command) +
                    " chicken 2\n 1 Chicken = 2500 Money"
                );
              }
              kurangAyam(bot.sender, _0x2341f7);
              let _0x2bd55d = 2500 * _0x2341f7;
              addMonay(bot.sender, _0x2bd55d);
              setTimeout(async () => {
                bot.reply(
                  "Transaksi Berhasil \u2705\n*Sisa uang* : " +
                    getMonay(bot.sender) +
                    "\n*Sisa Ayam* : " +
                    getAyam(bot.sender)
                );
              }, 2000);
            } else {
              if (args[0] === "rabbit") {
                if (_0x4239d7 < _0x2341f7) {
                  return bot.reply(
                    "Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini"
                  );
                }
                if (!args[1]) {
                  return bot.reply(
                    "Example : " +
                      (prefix + command) +
                      " rabbit 2\n 1 Rabbit = 3000 Money"
                  );
                }
                kurangKelinci(bot.sender, _0x2341f7);
                let _0x296f52 = 3000 * _0x2341f7;
                addMonay(bot.sender, _0x296f52);
                setTimeout(async () => {
                  bot.reply(
                    "Transaksi Berhasil \u2705\n*Sisa uang* : " +
                      getMonay(bot.sender) +
                      "\n*Sisa kelinci* : " +
                      getKelinci(bot.sender)
                  );
                }, 2000);
              } else {
                if (args[0] === "sheep") {
                  if (_0xd8f839 < _0x2341f7) {
                    return bot.reply(
                      "Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini"
                    );
                  }
                  if (!args[1]) {
                    return bot.reply(
                      "Example : " +
                        (prefix + command) +
                        " domba 2\n 1 Sheep = 5000 money"
                    );
                  }
                  kurangDomba(bot.sender, _0x2341f7);
                  let _0x16521e = 5000 * _0x2341f7;
                  addMonay(bot.sender, _0x16521e);
                  setTimeout(async () => {
                    bot.reply(
                      "Transaksi Berhasil \u2705\n*Sisa uang* : " +
                        getMonay(bot.sender) +
                        "\n*Sisa domba* : " +
                        getDomba(bot.sender)
                    );
                  }, 2000);
                } else {
                  if (args[0] === "cow") {
                    if (_0x4fdb6e < _0x2341f7) {
                      return bot.reply(
                        "Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini"
                      );
                    }
                    if (!args[1]) {
                      return bot.reply(
                        "Example : " +
                          (prefix + command) +
                          " cow 2\n 1 Cow = 10000 Money"
                      );
                    }
                    kurangSapi(bot.sender, _0x2341f7);
                    let _0x223d99 = 10000 * _0x2341f7;
                    addMonay(bot.sender, _0x223d99);
                    setTimeout(async () => {
                      bot.reply(
                        "Transaksi Berhasil \u2705\n*Sisa uang* : " +
                          getMonay(bot.sender) +
                          "\n*Sisa sapi* : " +
                          getSapi(bot.sender)
                      );
                    }, 2000);
                  } else {
                    if (args[0] === "elephant") {
                      if (_0x4bce28 < _0x2341f7) {
                        return bot.reply(
                          "Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini"
                        );
                      }
                      if (!args[1]) {
                        return bot.reply(
                          "Example : " +
                            (prefix + command) +
                            " elephant 2\n 1 Elephant = 15000 Money"
                        );
                      }
                      kurangGajah(bot.sender, _0x2341f7);
                      let _0x469686 = 15000 * _0x2341f7;
                      addMonay(bot.sender, _0x469686);
                      setTimeout(async () => {
                        bot.reply(
                          "Transaksi Berhasil \u2705\n*Sisa uang* : " +
                            getMonay(bot.sender) +
                            "\n*Sisa gajah* : " +
                            getGajah(bot.sender)
                        );
                      }, 2000);
                    } else {
                      if (args[0] === "iron") {
                        if (_0x35bb36 < _0x2341f7) {
                          return bot.reply(
                            "Anda Tidak Memiliki Cukup Besi Untuk Transaksi Ini"
                          );
                        }
                        if (!args[1]) {
                          return bot.reply(
                            "Example : " +
                              (prefix + command) +
                              " iron 2\n 1 Iron = 15000 Money"
                          );
                        }
                        kurangBesi(bot.sender, _0x2341f7);
                        let _0xa4ba2e = 16000 * _0x2341f7;
                        addMonay(bot.sender, _0xa4ba2e);
                        setTimeout(async () => {
                          bot.reply(
                            "Transaksi berhasil \u2705\n*Sisa uang* : " +
                              getMonay(bot.sender) +
                              "\n*Sisa besi* : " +
                              getBesi(bot.sender)
                          );
                        }, 2000);
                      } else {
                        if (args[0] === "gold") {
                          if (_0x2a9057 < _0x2341f7) {
                            return bot.reply(
                              "Anda Tidak Memiliki Cukup Emas Untuk Transaksi Ini"
                            );
                          }
                          if (!args[1]) {
                            return bot.reply(
                              "Example : " +
                                (prefix + command) +
                                " gold 2\n 1 Gold = 50000 Money"
                            );
                          }
                          kurangEmas(bot.sender, _0x2341f7);
                          let _0x46d06d = 50000 * _0x2341f7;
                          addMonay(bot.sender, _0x46d06d);
                          setTimeout(async () => {
                            bot.reply(
                              "Transaksi berhasil \u2705\n*Sisa uang* : " +
                                getMonay(bot.sender) +
                                "\n*Sisa emas* : " +
                                getEmas(bot.sender)
                            );
                          }, 2000);
                        } else {
                          if (args[0] === "emerald") {
                            if (_0x3e7951 < _0x2341f7) {
                              return bot.reply(
                                "Anda Tidak Memiliki Cukup Zamrud Untuk Transaksi Ini"
                              );
                            }
                            if (!args[1]) {
                              return bot.reply(
                                "Example : " +
                                  (prefix + command) +
                                  " emerald 2\n 1 Emerald = 100000 Money"
                              );
                            }
                            kurangEmerald(bot.sender, _0x2341f7);
                            let _0x1886a2 = 100000 * _0x2341f7;
                            addMonay(bot.sender, _0x1886a2);
                            setTimeout(async () => {
                              bot.reply(
                                "Transaksi berhasil \u2705\n*Sisa uang* : " +
                                  getMonay(bot.sender) +
                                  "\n*Sisa zamrud* : " +
                                  getEmerald(bot.sender)
                              );
                            }, 2000);
                          } else {
                            bot.reply(
                              "Mau jual apa?\n- fish\n- chicken\n- rabbit\n- sheep\n- cow\n- elephant\n- iron\n- gold\n- emerald\n\nExample : " +
                                (prefix + command) +
                                " fish 2"
                            );
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        break;
      case "heal":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (!_0x9898c < 1) {
            return bot.reply("Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0");
          }
          if (_0x9898c > 100) {
            return bot.reply("Darahmu Penuh");
          }
          if (_0x38118c < 1) {
            return bot.reply(
              "Anda Tidak Punya Ramuan, Coba Beli Dengan Cara #buypotion _amount_"
            );
          }
          addDarah(bot.sender, 100);
          kurangPotion(bot.sender, 1);
          _0x54ae70("Done! Darah mu dah full");
        }
        break;
      case "hunt":
      case "hunting":
        {
          if (_0x9898c < 1) {
            return bot.reply(
              "Darahmu Habis, Coba Sembuhkan Menggunakan Ramuan"
            );
          }
          let _0x4ef985 = [
              "Pierced by a thorn while hunting",
              "Slipped into the abyss while hunting",
              "Scratched by a wild animal",
              "Not careful",
              "Entangled in roots",
              "Fall while hunting",
            ],
            _0x9946b5 = [
              "Jungle",
              "Amazon forest",
              "Tropical forest",
              "Meadow",
              "African forest",
              "Mountains",
            ];
          var _0x53c453 = Math.ceil(Math.random() * 10),
            _0x51cca5 = Math.ceil(Math.random() * 8),
            _0x3473e6 = Math.ceil(Math.random() * 7),
            _0x4556b7 = [3, 0, 4, 0, 5, 4, 6, 0, 1, 0, 2, 3, 0, 3, 0, 1],
            _0xb7d4cb = [2, 0, 3, 0, 4, 0, 5, 0, 1, 0, 2, 0, 3, 0, 1],
            _0x3bf0b1 = [1, 0, 4, 0, 2, 0, 1, 0, 2, 1, 3, 0, 1],
            _0x2dbe2f = _0x4556b7[Math.floor(Math.random() * _0x4556b7.length)],
            _0xdc617f = _0xb7d4cb[Math.floor(Math.random() * _0xb7d4cb.length)],
            _0x2b9ca3 = _0x3bf0b1[Math.floor(Math.random() * _0x3bf0b1.length)],
            _0x39135d = _0x4ef985[Math.floor(Math.random() * _0x4ef985.length)],
            _0x4c3a49 = _0x9946b5[Math.floor(Math.random() * _0x9946b5.length)];
          if (_0x4c3a49 === "Jungle") {
            var _0x5b56ff = "https://telegra.ph/file/92967f55b1f437fdd55fe.jpg";
          } else {
            if (_0x4c3a49 === "Amazon forest") {
              var _0x5b56ff =
                "https://telegra.ph/file/2b9b53837d9f109862224.jpg";
            } else {
              if (_0x4c3a49 === "Tropical forest") {
                var _0x5b56ff =
                  "https://telegra.ph/file/bd662563855328a1832e6.jpg";
              } else {
                if (_0x4c3a49 === "Meadow") {
                  var _0x5b56ff =
                    "https://telegra.ph/file/66435cf783e308b19927e.jpg";
                } else {
                  if (_0x4c3a49 === "African forest") {
                    var _0x5b56ff =
                      "https://telegra.ph/file/c5996d581846f70ed1514.jpg";
                  } else {
                    if (_0x4c3a49 === "Mountains") {
                      var _0x5b56ff =
                        "https://telegra.ph/file/ca8f84d91ca3e1d5efa59.jpg";
                    }
                  }
                }
              }
            }
          }
          setTimeout(async () => {
            let _0x4d3173 = "_HUNT RESULT_\n\n";
            _0x4d3173 += "*\uD83D\uDC1FFish* : " + _0x53c453 + "\n";
            _0x4d3173 += "*\uD83D\uDC14Chicken* : " + _0x51cca5 + "\n";
            _0x4d3173 += "*\uD83D\uDC07Rabbit* : " + _0x3473e6 + "\n";
            _0x4d3173 += "*\uD83D\uDC11Sheep* : " + _0x2dbe2f + "\n";
            _0x4d3173 += "*\uD83D\uDC04Cow* : " + _0xdc617f + "\n";
            _0x4d3173 += "*\uD83D\uDC18Elephant* : " + _0x2b9ca3 + "\n\n";
            _0x4d3173 += "_INFO_\n";
            _0x4d3173 += "*Location* : " + _0x4c3a49 + "\n";
            _0x4d3173 += "*Wounded* : " + _0x39135d + ", blood - 10\n";
            _0x4d3173 += "*Remaining blood* : " + getDarah(bot.sender) + "\n";
            const _0x41c78f = { url: _0x5b56ff };
            const _0x58433e = {
              image: _0x41c78f,
              caption: _0x4d3173,
            };
            await hisoka.sendMessage(bot.chat, _0x58433e, {
              quoted: bot,
            });
          }, 5000);
          setTimeout(() => {
            hisoka.sendTextWithMentions(
              bot.chat,
              "@" +
                bot.sender.split("@")[0] +
                " Started Hunting In " +
                _0x4c3a49,
              bot
            );
          }, 1000);
          addIkan(bot.sender, _0x53c453);
          addAyam(bot.sender, _0x51cca5);
          addKelinci(bot.sender, _0x3473e6);
          addDomba(bot.sender, _0x2dbe2f);
          addSapi(bot.sender, _0xdc617f);
          addGajah(bot.sender, _0x2b9ca3);
          kurangDarah(bot.sender, 10);
        }
        break;
      case "adventure":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          ngab = [
            "Avalanche",
            "Volcanic Eruption",
            "Tsunami",
            "Earthquake",
            "Meteor",
            "Demon",
          ];
          var _0xbdd45f = ngab[Math.floor(Math.random() * ngab.length)];
          var _0x33527b = [
            "Whetstone",
            "Willow Field",
            "Rodeo",
            "Verdant Blufs",
            "Bull Holland",
            "Fallen Tree",
            "Dellnort",
            "Verona Lush",
            "Leafy Hollow",
            "Chilliad Dome",
            "Garcia",
            "Pine Valley",
            "Santa Florals",
            "Guvero East",
            "Cranbarry",
            "Junever",
            "Aldea Malvada",
            "Green Palms",
            "Green Oasis",
            "Fort Carson",
            "Prickel Pine",
            "Pilson Meadow",
            "Boca Roca",
            "Rocksore East",
            "Camel Toe",
            "Hanky Panky",
            "Fern Ridge",
            "Montgomerry",
            "Flint Yankton",
            "Vespucci",
            "fortress city",
            "ravines valley",
            "horizon valley",
            "cyber city",
            "end city",
            "templar city",
            "pochinki",
            "peak",
            "Vertical Zone",
            "Sentainel Country",
            "Night City",
            "Flush City",
            "Royals Canyon",
            "Blackburn",
            "Peterborough",
            "Tarnstead",
            "Jarren\u2019s",
            "Outpost",
            "Landow",
            "Nearon",
            "Kincardine",
            "Aysgarth",
            "Veritas",
            "Openshaw",
            "Bredwardine",
            "Berkton",
            "Wolford",
            "Norwich",
            "Kald",
            "Solaris",
            "Kilead",
            "Pitmerden",
            "Acomb",
            "Eldham",
            "Warcester",
            "Lingmell",
            "Kilead",
            "Cromerth",
            "Wingston",
            "Garmsby",
            "Kingcardine",
            "Perthlochry",
            "Frostford",
            "Hillford",
            "Hardersfield",
            "Tarrin",
            "Holmfirth",
            "Caerleon",
            "Elisyum",
            "Ballaeter",
            "Penshaw",
            "Bradford",
            "Wigston",
            "Accreton",
            "Kameeraska",
            "Ferncombe",
            "Kilerth",
            "Erostey",
            "Carran",
            "Jongvale",
            "Larnwick",
            "Queenstown",
            "Whaelrdrake",
            "Baerney",
            "Wingston",
            "Arkney",
            "Strongfair",
            "Lowestoft",
            "Beggar\u2019s Hole",
            "Shepshed",
            "Perthlochry",
            "Ironforge",
            "Tywardreath",
            "Pontheugh",
            "Foolshope",
            "Hull",
            "Dalmerlington",
            "Aucteraden",
            "Woodpine",
            "Millstone",
            "Windermere",
            "Lancaster",
            "Kirkwall",
            "Rotherhithe",
            "Astrakhan",
            "Watford",
            "Ritherhithe",
            "Krosstoen",
            "Pella\u2019s",
            "Wish",
            "Grimsby",
            "Ayrith",
            "Ampleforth",
            "Skystead",
            "Eanverness",
            "Penshaw",
            "Peatsland",
            "Astrakane",
            "Pontybridge",
            "Caershire",
            "Snowbush",
            "Sutton",
            "Northwich",
            "Hogsfeet",
            "Claethorpes",
            "Sudbury",
            "Cherrytown",
            "Blue Field",
            "Orrinshire",
            "Aempleforth",
            "Garrigill",
            "Jedburgh",
            "Eastbourne",
            "Taedmorden",
            "Venzor",
            "Grasmere",
            "Ubbin",
            "Falls",
            "Violl\u2019s Garden",
            "Glanchester",
            "Bailymena",
            "Arkkukari",
            "Skargness",
            "Cardend",
            "Llanybydder",
            "Faversham",
            "Yellowseed",
            "Carlisle",
            "Cirencester",
            "Aramoor",
            "Furness",
            "Kincardine",
            "Rotherham",
            "Emelle",
            "Boroughton",
            "Carran",
            "Ffestiniog",
            "Mansfield",
            "Huthwaite",
            "Marclesfield",
            "Pavv",
            "Squall\u2019s End",
            "Glenarm",
            "Dragontail",
            "Moressley",
            "Hardersfield",
            "Gilramore",
            "Aria",
            "Ecrin",
            "Clare View Point",
            "Blackburn",
            "Oakheart",
            "Doonatel",
            "Broughton",
            "Carlisle",
            "Murlayfield",
            "Nuxvar",
          ];
          hasm = "https://telegra.ph/file/ff94536d69e0f4f3e7b54.jpg";
          var _0x4cde11 = Math.ceil(Math.random() * 1000);
          var _0x1c878e = Math.ceil(Math.random() * 300);
          setTimeout(() => {
            var _0x132b67 =
              "\u300C DEATH \u300D\n\n *\u250A Place*  " +
              ad +
              "\n \u250A *MONEY :* $" +
              _0x1c878e +
              "\n \u250A *EXP :* " +
              _0x4cde11 +
              "Xp";
            const _0x285671 = {
              buttonId: ".inventori",
              buttonText: {},
              type: 1,
            };
            _0x285671.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
            hisoka.sendButImage(
              bot.chat,
              hasm,
              [_0x285671],
              _0x132b67,
              "" + _0xcd848b,
              [],
              { quoted: bot }
            );
          }, 7000);
          setTimeout(() => {
            bot.reply("Awass");
          }, 5000);
          setTimeout(() => {
            bot.reply("Tiba-tiba Ada " + _0xbdd45f);
          }, 3000);
          setTimeout(() => {
            bot.reply(pushname + " On an Adventure");
          }, 0);
          addLevelingXp(bot.sender, _0x4cde11);
          addBalance(bot.sender, _0x1c878e, balance);
        }
        break;
      case "luckyday":
      case "luckytime":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          ez = Math.ceil(Math.random() * 450);
          a = _0x8f2ff1(99);
          b = _0x8f2ff1(500);
          c = _0x8f2ff1(150);
          addBalance(bot.sender, b, balance);
          addLevelingXp(bot.sender, ez);
          addEmas(bot.sender, a);
          addBesi(bot.sender, c);
          bot.reply(
            "\uD83C\uDFB0 *Lucky*\n\u250A *Money:* $" +
              b +
              "\n\u250A *Gold :* " +
              a +
              "\n\u250A *Iron :* " +
              c +
              "\n\u250A *XP :* " +
              ez
          );
        }
        break;
      case "slime":
      case "killslime":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          ez = Math.ceil(Math.random() * 400);
          addLevelingXp(bot.sender, ez);
          a = _0x8f2ff1(55);
          b = _0x8f2ff1(400);
          c = _0x8f2ff1(80);
          d = _0x8f2ff1(3);
          addLevelingXp(bot.sender, ez);
          addBalance(bot.sender, b, balance);
          addEmas(bot.sender, a);
          addBesi(bot.sender, c);
          addDm(bot.sender, d);
          bufutI = "https://telegra.ph/file/c34a444fa8824d8bb6e18.jpg";
          var _0x42fba9 =
            "*Misi kill Slime*\n\n\uD83C\uDF81 *Hadiah untuk killing Slime*\n \u250A *Money:* $" +
            b +
            "\n \u250A *Iron:* " +
            c +
            "\n \u250A *Gold:* " +
            a +
            "\n \u250A *Diamond:* " +
            d +
            "\n\n*Terima kasih telah menjalankan misi ini*";
          const _0xea3c7c = {};
          _0xea3c7c.buttonId = ".inventori";
          _0xea3c7c.buttonText = {};
          _0xea3c7c.type = 1;
          _0xea3c7c.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
          hisoka.sendButImage(
            bot.chat,
            bufutI,
            [_0xea3c7c],
            _0x42fba9,
            "" + _0xcd848b,
            [],
            { quoted: bot }
          );
        }
        break;
      case "goblin":
      case "killgoblin":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          ez = Math.ceil(Math.random() * 500);
          addLevelingXp(bot.sender, ez);
          a = _0x8f2ff1(65);
          b = _0x8f2ff1(500);
          c = _0x8f2ff1(90);
          d = _0x8f2ff1(5);
          addLevelingXp(bot.sender, ez);
          addBalance(bot.sender, b, balance);
          addEmas(bot.sender, a);
          addBesi(bot.sender, c);
          addDm(bot.sender, d);
          bufo = "https://telegra.ph/file/19bdc38aaafda29f7afe1.jpg";
          var _0x42fba9 =
            "*Misi kill Goblin*\n\n\uD83C\uDF81 *Hadiah untuk killing Goblin*\n \u250A *Money:* $" +
            b +
            "\n \u250A *Iron:* " +
            c +
            "\n \u250A *Gold:* " +
            a +
            "\n \u250A *Diamond:* " +
            d +
            "\n\n*Terima kasih telah menjalankan misi ini*";
          const _0x564a6d = {};
          _0x564a6d.buttonId = ".inventori";
          _0x564a6d.buttonText = {};
          _0x564a6d.type = 1;
          _0x564a6d.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
          hisoka.sendButImage(
            bot.chat,
            bufo,
            [_0x564a6d],
            _0x42fba9,
            "" + _0xcd848b,
            [],
            { quoted: bot }
          );
        }
        break;
      case "devil":
      case "killdevil":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          ez = Math.ceil(Math.random() * 600);
          addLevelingXp(bot.sender, ez);
          a = _0x8f2ff1(70);
          b = _0x8f2ff1(600);
          c = _0x8f2ff1(95);
          d = _0x8f2ff1(6);
          addLevelingXp(bot.sender, ez);
          addBalance(bot.sender, b, balance);
          addEmas(bot.sender, a);
          addBesi(bot.sender, c);
          addDm(bot.sender, d);
          bufas = "https://telegra.ph/file/dbecd2f871988f52bf555.jpg";
          var _0x42fba9 =
            "*Misi kill Devil*\n\n\uD83C\uDF81 *Hadiah untuk killing Devil*\n \u250A *Money:* $" +
            b +
            "\n \u250A *Iron:* " +
            c +
            "\n \u250A *Gold:* " +
            a +
            "\n \u250A *Diamond:* " +
            d +
            "\n\n*Terima kasih telah menjalankan misi ini*";
          const _0x3c0db8 = {};
          _0x3c0db8.buttonId = ".inventori";
          _0x3c0db8.buttonText = {};
          _0x3c0db8.type = 1;
          _0x3c0db8.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
          hisoka.sendButImage(
            bot.chat,
            bufas,
            [_0x3c0db8],
            _0x42fba9,
            "" + _0xcd848b,
            [],
            { quoted: bot }
          );
        }
        break;
      case "behemoth":
      case "killbehemoth":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          ez = Math.ceil(Math.random() * 700);
          addLevelingXp(bot.sender, ez);
          a = _0x8f2ff1(75);
          b = _0x8f2ff1(600);
          c = _0x8f2ff1(100);
          d = _0x8f2ff1(7);
          addLevelingXp(bot.sender, ez);
          addBalance(bot.sender, b, balance);
          addEmas(bot.sender, a);
          addBesi(bot.sender, c);
          addDm(bot.sender, d);
          batai = "https://telegra.ph/file/43259a7d8accff8b627c0.jpg";
          var _0x42fba9 =
            "*Misi kill Behemoth*\n\n\uD83C\uDF81 *Hadiah untuk kiling Behemoth*\n \u250A *Money:* $" +
            b +
            "\n \u250A *Iron:* " +
            c +
            "\n \u250A *Gold:* " +
            a +
            "\n \u250A *Diamond:* " +
            d +
            "\n\n*Terima kasih telah menjalankan misi ini*";
          const _0x41e574 = {};
          _0x41e574.buttonId = ".inventori";
          _0x41e574.buttonText = {};
          _0x41e574.type = 1;
          _0x41e574.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
          hisoka.sendButImage(
            bot.chat,
            batai,
            [_0x41e574],
            _0x42fba9,
            "" + _0xcd848b,
            [],
            { quoted: bot }
          );
        }
        break;
      case "demon":
      case "killdemon":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          ez = Math.ceil(Math.random() * 850);
          addLevelingXp(bot.sender, ez);
          a = _0x8f2ff1(90);
          b = _0x8f2ff1(900);
          c = _0x8f2ff1(120);
          d = _0x8f2ff1(10);
          addLevelingXp(bot.sender, ez);
          addBalance(bot.sender, b, balance);
          addEmas(bot.sender, a);
          addBesi(bot.sender, c);
          addDm(bot.sender, d);
          bhuu = "https://telegra.ph/file/4a264a10ea2e5f18314f1.jpg";
          var _0x42fba9 =
            "*Misi kill Demon*\n\uD83C\uDF81 *Demon Kill Reward*\n \u250A *Money:* $" +
            b +
            "\n \u250A *Iron:* " +
            c +
            "\n \u250A *Gold*: " +
            a +
            "\n \u250A *Diamond:* " +
            d +
            "\n\n*Terima Kasih Telah Melaksanakan Misi Ini*";
          const _0x15e81d = {};
          _0x15e81d.buttonId = ".inventori";
          _0x15e81d.buttonText = {};
          _0x15e81d.type = 1;
          _0x15e81d.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
          hisoka.sendButImage(
            bot.chat,
            bhuu,
            [_0x15e81d],
            _0x42fba9,
            "" + _0xcd848b,
            [],
            { quoted: bot }
          );
        }
        break;
      case "demonking":
      case "killdemonking":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          ez = Math.ceil(Math.random() * 1000);
          addLevelingXp(bot.sender, ez);
          addBalance(bot.sender, 1999, balance);
          addEmas(bot.sender, 99);
          addBesi(bot.sender, 99);
          addDm(bot.sender, 99);
          bhuud = "https://telegra.ph/file/cdf482a8de192189057d8.jpg";
          var _0x42fba9 =
            "*Misi kill DemonKing*\n\n\uD83C\uDF81 *DemonKing Kill Reward*\n \u250A *Money* : $" +
            b +
            "\n \u250A *Iron :* " +
            c +
            "\n \u250A *Gold :* " +
            a +
            "\n \u250A *Diamond :* " +
            d +
            "\n\n*Terima Kasih Telah Melaksanakan Misi Ini*";
          const _0x117798 = {};
          _0x117798.buttonId = ".inventori";
          _0x117798.buttonText = {};
          _0x117798.type = 1;
          _0x117798.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
          hisoka.sendButImage(
            bot.chat,
            bhuud,
            [_0x117798],
            _0x42fba9,
            "" + _0xcd848b,
            [],
            { quoted: bot }
          );
        }
        break;
      case "joinrpg":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (_0x3e070b) {
            return _0x54ae70(" *Anda Telah Menjadi Petualang*");
          }
          reqXp = 5000 * (Math.pow(2, getLevelingLevel(bot.sender)) - 1);
          _petualang.push(bot.sender);
          addInventoriDarah(bot.sender, DarahAwal);
          addInventori(bot.sender);
          addInventoriBuruan(bot.sender);
          fs.writeFileSync(
            "./database/user/inventory.json",
            JSON.stringify(_petualang)
          );
          addLevelingId(bot.sender);
          let _0x3321a2 = "https://telegra.ph/file/a4ec01498e764ae42c8c4.jpg";
          const _0xe31904 = {
            buttonId: ".inventori",
            buttonText: {},
            type: 1,
          };
          _0xe31904.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
          hisoka.sendButImage(
            bot.chat,
            _0x3321a2,
            [_0xe31904],
            "Sukses join Rpg games",
            "" + _0xcd848b,
            [],
            { quoted: bot }
          );
        }
        break;
      case "sellikan":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (args.length < 1) {
            return _0x54ae70(
              "Kirim perintah *" +
                (prefix + command) +
                "* jumlah untuk dijual\n\nContoh *" +
                (prefix + command) +
                "* 10"
            );
          }
          jmlh = text;
          rp = 5 * jmlh;
          if (getFish(bot.sender) < jmlh) {
            return _0x54ae70("*Ikan Anda Tidak Cukup*");
          }
          sellFish(bot.sender, jmlh, balance);
          addBalance(bot.sender, rp, balance);
          const _0xb92133 = {};
          _0xb92133.buttonId = "inventori";
          _0xb92133.buttonText = {};
          _0xb92133.type = 1;
          _0xb92133.buttonText.displayText = "Inventori";
          buttons = [_0xb92133];
          hisoka.sendButMessage(
            bot.chat,
            "\uD83D\uDECD️ *MARKET*\n \u250A Seller : " +
              pushname +
              "\n \u250A Buyer : Admin\n \u250A Price/Fish : 5\n \u250A Status : Success\n \u250A Left FishPrice/Fish : " +
              (await getFish(bot.sender)) +
              "\n \u250A Sales Results : $" +
              rp,
            "" + _0xcd848b,
            buttons,
            { quoted: bot }
          );
        }
        break;
      case "sellbesi":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (args.length < 1) {
            return _0x54ae70(
              "Kirim perintah *" +
                (prefix + command) +
                "* jumlah untuk dijual\n\nContoh *" +
                (prefix + command) +
                "* 10"
            );
          }
          jmlh = text;
          rp = 10 * jmlh;
          if (getBesi(bot.sender) < jmlh) {
            return _0x54ae70("Besi Tidak Cukup");
          }
          sellBesi(bot.sender, jmlh, balance);
          addBalance(bot.sender, rp, balance);
          const _0x339928 = {};
          _0x339928.buttonId = "inventori";
          _0x339928.buttonText = {};
          _0x339928.type = 1;
          _0x339928.buttonText.displayText = "Inventori";
          buttons = [_0x339928];
          hisoka.sendButMessage(
            bot.chat,
            "\uD83D\uDECD️ MARKET\n \u250A Seller : " +
              pushname +
              "\n \u250A Buyer : Admin\n \u250A Harga/Besi : 10\n \u250A Status : Sukses\n \u250A Sisa Besi : " +
              getBesi(bot.sender) +
              "\n \u250A Sales Results : $" +
              rp,
            "" + _0xcd848b,
            buttons,
            { quoted: bot }
          );
        }
        break;
      case "sellemas":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (args.length < 1) {
            return _0x54ae70(
              "Kirim perintah *" +
                (prefix + command) +
                "* jumlah untuk dijual\n\nContoh *" +
                (prefix + command) +
                "* 10"
            );
          }
          jmlh = text;
          rp = 25 * jmlh;
          if (getEmas(bot.sender) < jmlh) {
            return _0x54ae70("Emas Anda Tidak Cukup");
          }
          sellEmas(bot.sender, jmlh, balance);
          addBalance(bot.sender, rp, balance);
          const _0x1362e2 = {};
          _0x1362e2.buttonId = "inventori";
          _0x1362e2.buttonText = {};
          _0x1362e2.type = 1;
          _0x1362e2.buttonText.displayText = "Inventori";
          buttons = [_0x1362e2];
          hisoka.sendButMessage(
            bot.chat,
            "\uD83D\uDECD️ MARKET\n \u250A Seller : " +
              pushname +
              "\n \u250A Buyer : Admin\n \u250A Harga/Emas : 25\n \u250A Status : Sukses\n \u250A Sisa Emas : " +
              getEmas(bot.sender) +
              "\n \u250A Sales Results : $" +
              rp,
            "" + _0xcd848b,
            buttons,
            { quoted: bot }
          );
        }
        break;
      case "jelajah":
        {
          var _0x519903 = args.join(" ");
          if (_0x519903 == "corbiens river") {
            var _0xcfb6f3 = "https://telegra.ph/file/00018dab77a6cea81523e.jpg";
            setTimeout(async () => {
              const _0x2ab745 = Math.ceil(Math.random() * 70),
                _0x12ca76 = Math.ceil(Math.random() * 15);
              addStone(bot.sender, _0x2ab745);
              addIkan(bot.sender, _0x12ca76);
              const _0x14d28a = {
                buttonId: ".inventori",
                buttonText: {},
                type: 1,
              };
              _0x14d28a.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
              hisoka.sendButImage(
                bot.chat,
                _0xcfb6f3,
                [_0x14d28a],
                "*Congratulation \uD83C\uDF8A*" +
                  enter +
                  enter +
                  "Kamu mendapatkan *" +
                  _0x2ab745 +
                  "* batu dan *" +
                  _0x12ca76 +
                  "* ikan" +
                  enter +
                  enter +
                  "Cek inventory anda dengan cara ketik " +
                  prefix +
                  "inventory",
                "" + _0xcd848b,
                [],
                { quoted: bot }
              );
            }, 2000);
            setTimeout(() => {
              bot.reply("Sedang berpetualang, silahkan tunggu...");
            }, 0);
          } else {
            if (_0x519903 === "chiltawa woods") {
              let _0x2c0356 =
                "https://telegra.ph/file/77c3badc9f97d6589a30f.jpg";
              setTimeout(async () => {
                const _0x527f99 = Math.ceil(Math.random() * 110);
                const _0x2fb115 = Math.ceil(Math.random() * 20);
                addStone(bot.sender, _0x527f99);
                addKayu(bot.sender, _0x2fb115);
                const _0x2bc270 = {
                  buttonId: ".inventori",
                  buttonText: {},
                  type: 1,
                };
                _0x2bc270.buttonText.displayText = "My Inventory \uD83D\uDDC3️";
                hisoka.sendButImage(
                  bot.chat,
                  _0x2c0356,
                  [_0x2bc270],
                  "*Congratulation \uD83C\uDF8A*" +
                    enter +
                    enter +
                    "Kamu mendapatkan *" +
                    _0x527f99 +
                    "* batu dan *" +
                    _0x2fb115 +
                    "* kayu" +
                    enter +
                    enter +
                    "Cek inventory anda dengan cara ketik " +
                    prefix +
                    "inventory",
                  "" + _0xcd848b,
                  [],
                  { quoted: bot }
                );
              }, 2000);
              setTimeout(() => {
                bot.reply("Sedang berpetualang, silahkan tunggu...");
              }, 0);
            } else {
              if (_0x519903 === "cochher sea") {
                let _0x1491a8 =
                  "https://telegra.ph/file/eabfc907cfc447386b0c0.jpg";
                setTimeout(async () => {
                  const _0x406ebc = Math.ceil(Math.random() * 65);
                  addIkan(bot.sender, _0x406ebc);
                  const _0x10344b = {
                    buttonId: ".inventori",
                    buttonText: {},
                    type: 1,
                  };
                  _0x10344b.buttonText.displayText =
                    "My Inventory \uD83D\uDDC3️";
                  hisoka.sendButImage(
                    bot.chat,
                    _0x1491a8,
                    [_0x10344b],
                    "*Congratulation \uD83C\uDF8A*" +
                      enter +
                      enter +
                      "Kamu mendapatkan *" +
                      _0x406ebc +
                      "* ikan" +
                      enter +
                      enter +
                      "Cek inventory anda dengan cara ketik " +
                      prefix +
                      "inventory",
                    "" + _0xcd848b,
                    [],
                    { quoted: bot }
                  );
                }, 2000);
                setTimeout(() => {
                  bot.reply("Sedang berpetualang, silahkan tunggu...");
                }, 0);
              } else {
                if (_0x519903 === "limingstall mountains") {
                  let _0x23b01b =
                    "https://telegra.ph/file/19a10ff95c31af10267e4.jpg";
                  setTimeout(() => {
                    const _0x462808 = Math.ceil(Math.random() * 50),
                      _0x46c45c = Math.ceil(Math.random() * 80);
                    addOre(bot.sender, _0x462808);
                    addStone(bot.sender, _0x46c45c);
                    const _0x325646 = {
                      buttonId: ".inventori",
                      buttonText: {},
                      type: 1,
                    };
                    _0x325646.buttonText.displayText =
                      "My Inventory \uD83D\uDDC3️";
                    hisoka.sendButImage(
                      bot.chat,
                      _0x23b01b,
                      [_0x325646],
                      "*Congratulation \uD83C\uDF8A*" +
                        enter +
                        enter +
                        "Kamu mendapatkan *" +
                        _0x462808 +
                        "* copper ore dan " +
                        _0x46c45c +
                        " batu" +
                        enter +
                        enter +
                        "Cek inventory anda dengan cara ketik " +
                        prefix +
                        "inventory",
                      "" + _0xcd848b,
                      [],
                      { quoted: bot }
                    );
                  }, 2000);
                  setTimeout(() => {
                    bot.reply("Sedang berpetualang, silahkan tunggu...");
                  }, 0);
                } else {
                  if (_0x519903 === "chade mountain") {
                    let _0x4582ea =
                      "https://telegra.ph/file/efdcd7d07dd22294695a8.jpg";
                    setTimeout(() => {
                      const _0x2226b4 = Math.ceil(Math.random() * 40),
                        _0x3e79c7 = Math.ceil(Math.random() * 60);
                      addOre(bot.sender, _0x2226b4);
                      addStone(bot.sender, _0x3e79c7);
                      const _0x179d3d = {
                        buttonId: ".inventori",
                        buttonText: {},
                        type: 1,
                      };
                      _0x179d3d.buttonText.displayText =
                        "My Inventory \uD83D\uDDC3️";
                      hisoka.sendButImage(
                        bot.chat,
                        _0x4582ea,
                        [_0x179d3d],
                        "*Congratulation \uD83C\uDF8A*" +
                          enter +
                          enter +
                          "Kamu mendapatkan *" +
                          _0x2226b4 +
                          "* copper ore dan " +
                          _0x3e79c7 +
                          " batu" +
                          enter +
                          enter +
                          "Cek inventory anda dengan cara ketik " +
                          prefix +
                          "inventory",
                        "" + _0xcd848b,
                        [],
                        { quoted: bot }
                      );
                    }, 3000);
                    setTimeout(() => {
                      bot.reply("Sedang berpetualang, silahkan tunggu...");
                    }, 0);
                  } else {
                    if (_0x519903 === "gerbil woods") {
                      let _0x3fdd1b =
                        "https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg";
                      setTimeout(async () => {
                        const _0x419554 = Math.ceil(Math.random() * 90),
                          _0x52c931 = Math.ceil(Math.random() * 45);
                        addStone(bot.sender, _0x419554);
                        addKayu(bot.sender, _0x52c931);
                        const _0xa30df5 = {
                          buttonId: ".inventori",
                          buttonText: {},
                          type: 1,
                        };
                        _0xa30df5.buttonText.displayText =
                          "My Inventory \uD83D\uDDC3️";
                        hisoka.sendButImage(
                          bot.chat,
                          _0x3fdd1b,
                          [_0xa30df5],
                          "*Congratulation \uD83C\uDF8A*" +
                            enter +
                            enter +
                            "Kamu mendapatkan *" +
                            _0x419554 +
                            "* batu dan *" +
                            _0x52c931 +
                            "* kayu" +
                            enter +
                            enter +
                            "Cek inventory anda dengan cara ketik " +
                            prefix +
                            "inventory",
                          "" + _0xcd848b,
                          [],
                          { quoted: bot }
                        );
                      }, 2000);
                      setTimeout(() => {
                        bot.reply("Sedang berpetualang, silahkan tunggu...");
                      }, 0);
                    } else {
                      if (_0x519903 === "moobiens grassland") {
                        let _0x2007fc =
                          "https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg";
                        setTimeout(() => {
                          const _0x1e4563 = Math.ceil(Math.random() * 200),
                            _0x4baa17 = Math.ceil(Math.random() * 20);
                          addStone(bot.sender, _0x1e4563);
                          addKayu(bot.sender, _0x4baa17);
                          const _0x113933 = {
                            buttonId: ".inventori",
                            buttonText: {},
                            type: 1,
                          };
                          _0x113933.buttonText.displayText =
                            "My Inventory \uD83D\uDDC3️";
                          hisoka.sendButImage(
                            bot.chat,
                            _0x2007fc,
                            [_0x113933],
                            "*Congratulation \uD83C\uDF8A*" +
                              enter +
                              enter +
                              "Kamu mendapatkan *" +
                              _0x1e4563 +
                              "* batu dan " +
                              _0x4baa17 +
                              " kayu" +
                              enter +
                              enter +
                              "Cek inventory anda dengan cara ketik " +
                              prefix +
                              "inventory",
                            "" + _0xcd848b,
                            [],
                            { quoted: bot }
                          );
                        }, 2000);
                        setTimeout(() => {
                          _0x54ae70("Sedang berpetualang, silahkan tunggu...");
                        }, 0);
                      } else {
                        let _0x5692fc = await getBuffer(
                          "https://telegra.ph/file/16857796fab2ccb6cffc2.jpg"
                        );
                        tesk =
                          "*PILIH WILAYAH YANG INGIN KAMU JELAJAHI*\n\n\n\u26AA Corbiens River\n\uD83D\uDD35 Cochher Sea\n\u26AB Moobiens Grassland\n\uD83D\uDFE3 Gerbil Woods\n\uD83D\uDFE2 Chiltawa Woods\n\uD83D\uDFE0 Limingstall Mountains\n\uD83D\uDD34 Chade Mountain\n\nExample :\n- " +
                          prefix +
                          "jelajah corbiens river\n";
                        const _0xb7f96 = {
                          image: _0x5692fc,
                          caption: tesk,
                        };
                        hisoka.sendMessage(bot.chat, _0xb7f96, {
                          quoted: bot,
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
        break;
      case "mancing":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          setTimeout(() => {
            const _0xc3e959 = Math.ceil(Math.random() * 10);
            addIkan(bot.sender, _0xc3e959);
            bot.reply(
              "*Congratulation \uD83C\uDF8A*\n\n kamu mendapatkan *" +
                _0xc3e959 +
                "* Ikan selama 2 menit"
            );
          }, 6000);
          setTimeout(() => {
            bot.reply("Berhasil Mendapatkan Ikan . . .");
          }, 4000);
          setTimeout(() => {
            bot.reply("\uD83C\uDFA3 Menarik Kail. . .");
          }, 3000);
          setTimeout(() => {
            bot.reply("\uD83C\uDFA3 Mulai Memancing . . .");
          }, 0);
        }
        break;
      case "jualikan":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (!text) {
            return bot.reply(
              "Kirim perintah " +
                (prefix + command) +
                " jumlah yg ingin di jual\n\nContoh " +
                (prefix + command) +
                " 10"
            );
          }
          bayar = args.join(" ");
          const _0x360ec4 = bayar * 10000;
          if (getMancingIkan(bot.sender) <= 1) {
            return bot.reply(
              "Maaf " + pushname + " ikan kamu belum cukup, minimal 2 ikan"
            );
          }
          getMancingIkan(bot.sender) >= 1 &&
            (jualIkan(bot.sender, bayar),
            addKoinUser(bot.sender, _0x360ec4),
            await bot.reply(
              "*\u300C PENJUALAN BERHASIL \u300D*" +
                enter +
                enter +
                "*Jumlah ikan dijual:* " +
                bayar +
                enter +
                "*Uang didapat:* " +
                _0x360ec4 +
                enter +
                enter +
                "*Sisa ikan:* " +
                getMancingIkan(bot.sender) +
                enter +
                "*Sisa uang:* " +
                checkATMuser(bot.sender)
            ));
        }
        break;
      case "jualcoal":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (!text) {
            return bot.reply(
              "Kirim perintah " +
                (prefix + command) +
                " jumlah yg ingin di jual\n\nContoh " +
                (prefix + command) +
                " 10"
            );
          }
          bayar = args.join(" ");
          const _0x2617f0 = bayar * 15000;
          if (getMiningcoal(bot.sender) <= 1) {
            return bot.reply("Maaf " + pushname + " kamu tidak punya coal");
          }
          getMiningcoal(bot.sender) >= 1 &&
            (jualcoal(bot.sender, bayar),
            addKoinUser(bot.sender, _0x2617f0),
            await bot.reply(
              "*\u300C PENJUALAN BERHASIL \u300D*" +
                enter +
                enter +
                "*Jumlah Coal dijual:* " +
                bayar +
                enter +
                "*Uang didapat:* " +
                _0x2617f0 +
                enter +
                enter +
                "*Sisa coal:* " +
                getMiningcoal(bot.sender) +
                enter +
                "*Sisa uang:* " +
                checkATMuser(bot.sender)
            ));
        }
        break;
      case "lebur":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (!text) {
            return bot.reply(
              "Kirim perintah " +
                (prefix + command) +
                " jumlah yg ingin di jual\n\nContoh " +
                (prefix + command) +
                " 10"
            );
          }
          bayar = args.join(" ");
          const _0x33c143 = bayar * 2;
          if (getMiningore(bot.sender) <= 1) {
            return bot.reply(
              "Maaf " + pushname + " ore kamu belum cukup, minimal 2 ore"
            );
          }
          getMiningore(bot.sender) >= 1 &&
            (jualore(bot.sender, bayar),
            addIngot(bot.sender, _0x33c143),
            await bot.reply(
              "*\u300C LEBUR BERHASIL \u300D*\n\n*Jumlah Ore dilebur :* " +
                bayar +
                "\n*Ingot didapat:* " +
                _0x33c143 +
                "\n\n*Sisa Ore:* " +
                getMiningore(bot.sender)
            ));
        }
        break;
      case "jualstone":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (!text) {
            return bot.reply(
              "Kirim perintah " +
                (prefix + command) +
                " jumlah yg ingin di jual\n\nContoh " +
                (prefix + command) +
                " 10"
            );
          }
          bayar = args.join(" ");
          const _0xd7317c = bayar * 900;
          if (getMiningstone(bot.sender) <= 1) {
            return bot.reply(
              "Maaf " + pushname + " stone kamu belum cukup, minimal 2 stone"
            );
          }
          getMiningstone(bot.sender) >= 1 &&
            (jualstone(bot.sender, bayar),
            addKoinUser(bot.sender, _0xd7317c),
            await bot.reply(
              "*\u300C PENJUALAN BERHASIL \u300D*" +
                enter +
                enter +
                "*Jumlah Batu dijual:* " +
                bayar +
                enter +
                "*Uang didapat:* " +
                _0xd7317c +
                enter +
                enter +
                "*Sisa Batu:* " +
                getMiningstone(bot.sender) +
                enter +
                "*Sisa uang:* " +
                checkATMuser(bot.sender)
            ));
        }
        break;
      case "jualingot":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (!text) {
            return bot.reply(
              "Kirim perintah " +
                (prefix + command) +
                " jumlah yg ingin di jual\n\nContoh " +
                (prefix + command) +
                " 10"
            );
          }
          bayar = args.join(" ");
          const _0x3f4f4e = bayar * 35000;
          if (getMiningingot(bot.sender) <= 1) {
            return bot.reply(
              "Maaf " + pushname + " ingot kamu belum cukup, minimal 2 ingot"
            );
          }
          getMiningingot(bot.sender) >= 1 &&
            (jualingot(bot.sender, bayar),
            addKoinUser(bot.sender, _0x3f4f4e),
            await bot.reply(
              "*\u300C PENJUALAN BERHASIL  \u300D*" +
                enter +
                enter +
                "*Jumlah Ingot dijual:* " +
                bayar +
                enter +
                "*Uang didapat:* " +
                _0x3f4f4e +
                enter +
                enter +
                "*Sisa Ingot:* " +
                getMiningingot(bot.sender) +
                enter +
                "*Sisa uang:* " +
                checkATMuser(bot.sender)
            ));
        }
        break;
      case "jualkayu":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (!text) {
            return bot.reply(
              "Kirim perintah " +
                (prefix + command) +
                " jumlah yg ingin di jual\n\nContoh " +
                (prefix + command) +
                " 10"
            );
          }
          bayar = args.join(" ");
          const _0x449d5d = bayar * 18000;
          if (getNebangKayu(bot.sender) <= 1) {
            return bot.reply(
              "Maaf " + pushname + " kayu kamu belum cukup, minimal 2 kayu"
            );
          }
          getNebangKayu(bot.sender) >= 1 &&
            (jualkayu(bot.sender, bayar),
            addKoinUser(bot.sender, _0x449d5d),
            await bot.reply(
              "*\u300C PENJUALAN BERHASIL  \u300D*" +
                enter +
                enter +
                "*Jumlah Kayu dijual:* " +
                bayar +
                enter +
                "*Uang didapat:* " +
                _0x449d5d +
                enter +
                enter +
                "*Sisa Kayu :* " +
                getNebangKayu(bot.sender) +
                enter +
                "*Sisa uang:* " +
                checkATMuser(bot.sender)
            ));
        }
        break;
      case "nebang":
        {
          setTimeout(() => {
            const _0x2b090a = Math.ceil(Math.random() * 20);
            addKayu(bot.sender, _0x2b090a);
            bot.reply(
              "*Congratulation \uD83C\uDF8A*" +
                enter +
                enter +
                "kamu mendapatkan *" +
                _0x2b090a +
                "*kayu selama 2 menit"
            );
          }, 2000);
          setTimeout(() => {
            _0x54ae70("Sedang menebang, silahkan tunggu...");
          }, 0);
        }
        break;
      case "goplanet":
        {
          setTimeout(() => {
            const _0xb9c857 = Math.ceil(Math.random() * 100),
              _0x16c7db = [
                "merkurius",
                "venus",
                "mars",
                "jupiter",
                "saturnus",
                "neptunus",
                "uranus",
              ],
              _0x2b4009 =
                _0x16c7db[Math.floor(Math.random() * _0x16c7db.length)];
            addPlanet(bot.sender, _0xb9c857);
            bot.reply(
              "*Congratulation \uD83C\uDF8A*" +
                enter +
                enter +
                "kamu mendapatkan *" +
                _0xb9c857 +
                " bahan kimia dari  " +
                _0x2b4009 +
                "* selama 2 tahun"
            );
          }, 2000);
          setTimeout(() => {
            _0x54ae70(
              "Sedang meroket \uD83D\uDE31, silahkan tunggu... 2 tahun"
            );
          }, 0);
        }
        break;
      case "jualbahankimia":
        {
          if (!bot.isGroup) {
            return bot.reply("Group Specific Features!");
          }
          if (!_0x3e070b) {
            return _0x54ae70(
              "Kamu belum terdaftar dalam  database rpg silahkan ketik .joinrpg"
            );
          }
          if (!text) {
            return bot.reply(
              "Kirim perintah " +
                (prefix + command) +
                " jumlah yg ingin di jual\n\nContoh " +
                (prefix + command) +
                " 10"
            );
          }
          buayar = args.join(" ");
          const _0x592710 = buayar * 1000;
          if (getBertualangPlanet(bot.sender) <= 1) {
            return _0x54ae70(
              "maaf " + pushname + " kamu tidak punya bahankimia"
            );
          }
          getBertualangPlanet(bot.sender) >= 1 &&
            (jualbahankimia(bot.sender, buayar),
            addKoinUser(bot.sender, _0x592710),
            await _0x54ae70(
              "*\u300C PENJUALAN BERHASIL \u300D*" +
                enter +
                enter +
                "*Jumlah bahankimia dijual:* " +
                buayar +
                enter +
                "*Uang didapat:* " +
                _0x592710 +
                enter +
                enter +
                "*Sisa bahankimia:* " +
                getBertualangPlanet(bot.sender) +
                enter +
                "*Sisa uang:* " +
                checkATMuser(bot.sender) +
                enter +
                enter
            ));
        }
        break;
      case "menfes":
      case "menfess":
        {
          if (bot.isGroup) {
            return bot.reply("Fitur Khusus Di private chat!");
          }
          if (!text) {
            return _0x54ae70(
              "Kirim Perintah " +
                (prefix + command) +
                " nama|nomor|pesan\n\nContoh :\n" +
                (prefix + command) +
                " " +
                pushname +
                "|6292818802718|Menfes nih\n"
            );
          }
          if (!text.includes("|")) {
            return _0x54ae70(
              "Kirim Perintah " +
                (prefix + command) +
                " nama|nomor|pesan\n\nContoh :\n" +
                (prefix + command) +
                " " +
                pushname +
                "|6292818802718|Menfes nih\n"
            );
          }
          let [_0x4295d3, _0x937284, _0x12f89a] = text.split`|`;
          if (_0x937284.startsWith("0")) {
            return _0x54ae70(
              "Kirim Perintah " +
                (prefix + command) +
                " nama|nomor|pesan\n\nContoh :\n" +
                (prefix + command) +
                " " +
                pushname +
                "|6292818802718|Menfes nih\n"
            );
          }
          if (isNaN(_0x937284)) {
            return _0x54ae70(
              "Kirim Perintah " +
                (prefix + command) +
                " nama|nomor|pesan\n\nContoh :\n" +
                (prefix + command) +
                " " +
                pushname +
                "|6292818802718|Menfes nih\n"
            );
          }
          var _0x3dd7fc =
            "Hi ada menfess nih buat kamu\n\nDari : " +
            _0x4295d3 +
            "\nPesan : " +
            _0x12f89a +
            "\n\n_Pesan ini di tulis oleh seseorang, bot hanya menyampaikan saja_";
          let _0x41befc = await hisoka.reSize(
            await getBuffer(
              "https://telegra.ph/file/c8fdfc8426f5f60b48cca.jpg"
            ),
            300,
            300
          );
          const _0xd55936 = { displayText: "\u270D️ Balas" };
          const _0x593315 = {
            buttonId:
              ".baljzpapnxoqpoknzpakxijsponxnjwojxjskkbxowbbbxbbsowokxbjhsoqknxbbxboaojxbaoizbkaokbzbbapobxjqpkxbapasmenfess " +
              bot.sender +
              "|tes|maikipala|ngetid lo|hehe anu bang",
            buttonText: _0xd55936,
            type: 1,
          };
          const _0x5503a1 = [_0x593315],
            _0x5b2ba8 = {
              userJid: bot.chat,
              quoted: bot,
            };
          await hisoka.sendButLoc(
            _0x937284 + "@s.whatsapp.net",
            _0x3dd7fc,
            "Mau di balas? Pencet button nya",
            _0x41befc,
            _0x5503a1,
            _0x5b2ba8
          );
          bot.reply(
            "Pesan berhasil dikirim ke nomor tujuan. Moga aja di balas coy"
          );
        }
        break;
      case "baljzpapnxoqpoknzpakxijsponxnjwojxjskkbxowbbbxbbsowokxbjhsoqknxbbxboaojxbaoizbkaokbzbbapobxjqpkxbapasmenfess":
        {
          if (!text) {
            return;
          }
          if (!text.includes("|")) {
            return;
          }
          let [
            _0x326187,
            _0x47f36e,
            _0xc88c11,
            _0x13178b,
            _0x247af6,
          ] = text.split`|`;
          this.menfes = this.menfes ? this.menfes : {};
          let _0x6f5af1 = +new Date();
          this.menfes[_0x6f5af1] = {
            id: _0x6f5af1,
            a: bot.sender,
            b: _0x326187,
            state: "CHATTING",
            check: function (_0x528f57 = "") {
              return [this.a, this.b].includes(_0x528f57);
            },
            other: function (_0x3d866f = "") {
              return _0x3d866f === this.a
                ? this.b
                : _0x3d866f === this.b
                ? this.a
                : "";
            },
          };
          bot.reply("Ok, sekarang kirim pesan balasan nya");
        }
        break;
      default:
        if (isText.startsWith("=>")) {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          function _0x185832(_0x5ab6a1) {
            sat = JSON.stringify(_0x5ab6a1, null, 2);
            bang = util.format(sat);
            sat == undefined && (bang = util.format(_0x5ab6a1));
            return bot.reply(bang);
          }
          try {
            bot.reply(
              util.format(
                eval("(async () => { return " + isText.slice(3) + " })()")
              )
            );
          } catch (_0x11ec58) {
            bot.reply(util.format(_0x11ec58));
          }
        }
        if (isText.startsWith(">")) {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          try {
            let _0x23ee22 = await eval(isText.slice(2));
            if (typeof _0x23ee22 !== "string") {
              _0x23ee22 = require("util").inspect(_0x23ee22);
            }
            await bot.reply(_0x23ee22);
          } catch (_0x146536) {
            await bot.reply(util.format(_0x146536));
          }
        }
        if (isText.startsWith("$")) {
          if (!isCreator) {
            return bot.reply(mess.OnlyOwner);
          }
          exec(isText.slice(2), (_0x14fa5a, _0x568f21) => {
            if (_0x14fa5a) {
              return bot.reply("" + _0x14fa5a);
            }
            if (_0x568f21) {
              return bot.reply(_0x568f21);
            }
          });
        }
        if (bot.chat.endsWith("@s.whatsapp.net") && isCmd) {
          this.menfes = this.menfes ? this.menfes : {};
          let _0x39679c = Object.values(this.menfes).find(
              (_0xbbe1ca) =>
                [_0xbbe1ca.a, _0xbbe1ca.b].includes(bot.sender) &&
                _0xbbe1ca.state === "CHATTING"
            ),
            _0x5d8f30 = Object.values(this.menfes).find((_0x218cb2) =>
              _0x218cb2.check(bot.sender)
            );
          if (_0x39679c) {
            if (/^.*(next|leave|start)/.test(bot.text)) {
              return;
            }
            if (
              [
                ".next",
                ".leave",
                ".stop",
                ".start",
                "Cari Partner",
                "Keluar",
                "Lanjut",
                "Stop",
              ].includes(bot.text)
            ) {
              return;
            }
            let _0x4910dd = [_0x39679c.a, _0x39679c.b].find(
              (_0x5c7c64) => _0x5c7c64 !== bot.sender
            );
            const _0x25876e = { text: "Ada balasan nih dari menfes kamu" };
            const _0x16b466 = { quoted: _0x16ddfe };
            await hisoka.sendMessage(_0x4910dd, _0x25876e, _0x16b466);
            await bot.copyNForward(
              _0x4910dd,
              true,
              bot.quoted && bot.quoted.fromMe
                ? {
                    contextInfo: {
                      ...bot.msg.contextInfo,
                      participant: _0x4910dd,
                    },
                  }
                : {}
            );
            delete this.menfes[_0x5d8f30.id];
          }
        }
        if (bot.chat.endsWith("@s.whatsapp.net") && bot.message) {
          this.anonymous = this.anonymous ? this.anonymous : {};
          let _0x2d52ff = Object.values(this.anonymous).find(
            (_0x2b9179) =>
              [_0x2b9179.a, _0x2b9179.b].includes(bot.sender) &&
              _0x2b9179.state === "CHATTING"
          );
          if (_0x2d52ff) {
            if (/^.*(next|leave|start)/.test(bot.text)) {
              return;
            }
            if (
              [
                ".next",
                ".leave",
                ".stop",
                ".start",
                "Cari Partner",
                "Keluar",
                "Lanjut",
                "Stop",
              ].includes(bot.text)
            ) {
              return;
            }
            let _0x47ab52 = [_0x2d52ff.a, _0x2d52ff.b].find(
              (_0x238338) => _0x238338 !== bot.sender
            );
            bot.copyNForward(
              _0x47ab52,
              true,
              bot.quoted && bot.quoted.fromMe
                ? {
                    contextInfo: {
                      ...bot.msg.contextInfo,
                      forwardingScore: 0,
                      isForwarded: true,
                      participant: _0x47ab52,
                    },
                  }
                : {}
            );
          }
          return true;
        }
    }
  } catch (_0x1ddd2b) {
    bot.reply(util.format(_0x1ddd2b));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});
