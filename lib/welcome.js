const _0x402f1e = (function () {
    let _0x4e143a = true
    return function (_0x59847e, _0x47abaa) {
      const _0x2dde5d = _0x4e143a
        ? function () {
            if (_0x47abaa) {
              const _0x599709 = _0x47abaa.apply(_0x59847e, arguments)
              return (_0x47abaa = null), _0x599709
            }
          }
        : function () {}
      return (_0x4e143a = false), _0x2dde5d
    }
  })(),
  _0x2d70e9 = _0x402f1e(this, function () {
    return _0x2d70e9
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x2d70e9)
      .search('(((.+)+)+)+$')
  })
_0x2d70e9()
const _0x319d4d = (function () {
  let _0x162f3b = true
  return function (_0xc1ce78, _0x4e918e) {
    const _0x453150 = _0x162f3b
      ? function () {
          if (_0x4e918e) {
            const _0x2ae7c8 = _0x4e918e.apply(_0xc1ce78, arguments)
            return (_0x4e918e = null), _0x2ae7c8
          }
        }
      : function () {}
    return (_0x162f3b = false), _0x453150
  }
})()
;(function () {
  _0x319d4d(this, function () {
    const _0x56f086 = new RegExp('function *\\( *\\)'),
      _0x205362 = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
      _0x106a9a = _0x9ac77f('init')
    if (
      !_0x56f086.test(_0x106a9a + 'chain') ||
      !_0x205362.test(_0x106a9a + 'input')
    ) {
      _0x106a9a('0')
    } else {
      _0x9ac77f()
    }
  })()
})()
const fs = require('fs'),
  { TelegraPh } = require('./uploader')
const {
    getRandom,
    smsg,
    isUrl,
    generateMessageTag,
    getBuffer,
    getSizeMedia,
    fetchJson,
    await,
    sleep,
  } = require('./myfunc'),
  { isSetWelcome, getTextSetWelcome } = require('./setwelcome'),
  { isSetLeft, getTextSetLeft } = require('./setleft')
let set_welcome_db = JSON.parse(fs.readFileSync('./database/set_welcome.json'))
;(function () {
  let _0xc3d09e
  try {
    const _0x19af1e = Function(
      'return (function() {}.constructor("return this")( ));'
    )
    _0xc3d09e = _0x19af1e()
  } catch (_0x30320d) {
    _0xc3d09e = window
  }
  _0xc3d09e.setInterval(_0x9ac77f, 4000)
})()
let set_left_db = JSON.parse(fs.readFileSync('./database/set_left.json')),
  setting = JSON.parse(fs.readFileSync('./config.json'))
const welcome2 = setting.auto_welcomeMsg,
  leave2 = setting.auto_leaveMsg
module.exports.welcome = async (_0x7805ba, _0x381d4e) => {
  try {
    let _0xc2d60f = await _0x7805ba.groupMetadata(_0x381d4e.id),
      _0x58b6d7 = _0x381d4e.participants
    const _0x4e022e = _0xc2d60f.participants.length,
      _0x125f63 = _0xc2d60f.subject,
      _0x4513fe = _0xc2d60f.desc
    for (let _0x1a5640 of _0x58b6d7) {
      try {
        pp_user = await _0x7805ba.profilePictureUrl(_0x1a5640, 'image')
      } catch {
        pp_user =
          'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
      }
      try {
        ppgroup = await _0x7805ba.profilePictureUrl(_0x381d4e.id, 'image')
      } catch {
        ppgroup =
          'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
      }
      let _0x5cad45 = await getBuffer(pp_user),
        _0x186b98 = (await './media/ppuser-') + getRandom('.png')
      await fs.writeFileSync(_0x186b98, _0x5cad45)
      let _0x265920 = await TelegraPh(_0x186b98),
        _0x2c1436 = await getBuffer(ppgroup),
        _0x2d14ed = (await './media/ppgc-') + getRandom('.png')
      await fs.writeFileSync(_0x2d14ed, _0x2c1436)
      let _0x4b061e = await TelegraPh(_0x2d14ed)
      const _0x4c7d78 = {
        buttonId: '.menu',
        buttonText: {},
        type: 1,
      }
      _0x4c7d78.buttonText.displayText = '\uD83D\uDCDD Menu'
      const _0x3c8f8e = {
        buttonId: '.owner',
        buttonText: {},
        type: 1,
      }
      _0x3c8f8e.buttonText.displayText = 'Owner \uD83D\uDC64'
      const _0x8a5163 = [_0x4c7d78, _0x3c8f8e]
      try {
        var _0x4e11b7 = await getBuffer(
          'https://greetings.zeeoneofc2.repl.co/api/welcome2?name=' +
            encodeURI(_0x1a5640.split('@')[0]) +
            '&mem=' +
            encodeURI(_0x4e022e) +
            '&gcname=' +
            encodeURI(_0xc2d60f.subject) +
            '&picurl=' +
            _0x265920 +
            '&desc=baca&bgurl=https://telegra.ph/file/90a931648de597820bc08.jpg&gcicon=' +
            _0x4b061e
        )
      } catch {
        var _0x4e11b7 = Buffer.isBuffer(pp_user)
          ? pp_user
          : /^data:.*?\/.*?;base64,/i.test(pp_user)
          ? Buffer.from(pp_user.split`,`[1], 'base64')
          : /^https?:\/\//.test(pp_user)
          ? await (await fetch(pp_user)).buffer()
          : fs.existsSync(pp_user)
          ? fs.readFileSync(pp_user)
          : Buffer.alloc(0)
      }
      try {
        var _0x5b3434 = await getBuffer(
          'https://greetings.zeeoneofc2.repl.co/api/goodbye2?name=' +
            encodeURI(_0x1a5640.split('@')[0]) +
            '&mem=' +
            encodeURI(_0x4e022e) +
            '&gcname=' +
            encodeURI(_0xc2d60f.subject) +
            '&picurl=' +
            _0x265920 +
            '&desc=baca&bgurl=https://telegra.ph/file/90a931648de597820bc08.jpg&gcicon=' +
            _0x4b061e
        )
      } catch {
        var _0x5b3434 = Buffer.isBuffer(pp_user)
          ? pp_user
          : /^data:.*?\/.*?;base64,/i.test(pp_user)
          ? Buffer.from(pp_user.split`,`[1], 'base64')
          : /^https?:\/\//.test(pp_user)
          ? await (await fetch(pp_user)).buffer()
          : fs.existsSync(pp_user)
          ? fs.readFileSync(pp_user)
          : Buffer.alloc(0)
      }
      if (_0x381d4e.action == 'add' && db.data.chats[_0x381d4e.id].welcome) {
        console.log(_0x381d4e)
        if (isSetWelcome(_0x381d4e.id, set_welcome_db)) {
          var _0x2e75c3 = await getTextSetWelcome(_0x381d4e.id, set_welcome_db)
          console.log(_0x2e75c3)
          var _0x44ff7b = _0x2e75c3.replace(
              /@user/gi,
              '@' + _0x1a5640.split('@')[0]
            ),
            _0x12f42d = _0x44ff7b
              .replace(/@group/gi, _0x125f63)
              .replace(/@desc/gi, _0x4513fe)
          const _0x18709a = {
            image: _0x4e11b7,
            caption: '' + _0x12f42d,
            footer: setting.footer + ' \xA9 2022',
            buttons: _0x8a5163,
            mentions: [_0x1a5640],
            headerType: 3,
          }
          const _0x3005b2 = _0x18709a
          await _0x7805ba.sendMessage(_0x381d4e.id, _0x3005b2)
        } else {
          const _0x375dab = {
            image: _0x4e11b7,
            caption:
              'Welcome @' +
              _0x1a5640.split('@')[0] +
              ' in the group ' +
              _0x125f63,
            footer: setting.footer + ' \xA9 2022',
            buttons: _0x8a5163,
            mentions: [_0x1a5640],
            headerType: 3,
          }
          await _0x7805ba.sendMessage(_0x381d4e.id, _0x375dab)
        }
      } else {
        if (
          _0x381d4e.action == 'remove' &&
          db.data.chats[_0x381d4e.id].goodbye
        ) {
          console.log(_0x381d4e)
          if (isSetLeft(_0x381d4e.id, set_left_db)) {
            var _0x46dc76 = await getTextSetLeft(_0x381d4e.id, set_left_db)
            console.log(_0x46dc76)
            var _0x44ff7b = _0x46dc76.replace(
                /@user/gi,
                '@' + _0x1a5640.split('@')[0]
              ),
              _0x12f42d = _0x44ff7b
                .replace(/@group/gi, _0x125f63)
                .replace(/@desc/gi, _0x4513fe)
            const _0x2fb29b = {
              image: _0x5b3434,
              caption: _0x12f42d,
              footer: setting.footer + ' \xA9 2022',
              buttons: _0x8a5163,
              mentions: [_0x1a5640],
              headerType: 3,
            }
            const _0x3d2e55 = _0x2fb29b
            await _0x7805ba.sendMessage(_0x381d4e.id, _0x3d2e55)
          } else {
            const _0x4be0f4 = {
              image: _0x5b3434,
              caption: 'Sayonara @' + _0x1a5640.split('@')[0],
              footer: setting.footer + ' \xA9 2022',
              buttons: _0x8a5163,
              mentions: [_0x1a5640],
              headerType: 3,
            }
            await _0x7805ba.sendMessage(_0x381d4e.id, _0x4be0f4)
          }
        } else {
          if (_0x381d4e.action == 'promote') {
            const _0x2aedec = { url: pp_user }
            _0x7805ba.sendMessage(_0x381d4e.id, {
              image: _0x2aedec,
              mentions: [_0x1a5640],
              caption:
                '@' +
                _0x1a5640.split('@')[0] +
                ' Promote In ' +
                _0xc2d60f.subject,
            })
          } else {
            if (_0x381d4e.action == 'demote') {
              const _0x4f9bdc = { url: pp_user }
              _0x7805ba.sendMessage(_0x381d4e.id, {
                image: _0x4f9bdc,
                mentions: [_0x1a5640],
                caption:
                  '@' +
                  _0x1a5640.split('@')[0] +
                  ' Demote In ' +
                  _0xc2d60f.subject,
              })
            }
          }
        }
      }
    }
  } catch (_0x349ac9) {
    console.log(_0x349ac9)
  }
}
function _0x9ac77f(_0x1abd81) {
  function _0x7513e9(_0x126990) {
    if (typeof _0x126990 === 'string') {
      return function (_0x238ef7) {}
        .constructor('while (true) {}')
        .apply('counter')
    } else {
      ;('' + _0x126990 / _0x126990).length !== 1 || _0x126990 % 20 === 0
        ? function () {
            return true
          }
            .constructor('debugger')
            .call('action')
        : function () {
            return false
          }
            .constructor('debugger')
            .apply('stateObject')
    }
    _0x7513e9(++_0x126990)
  }
  try {
    if (_0x1abd81) {
      return _0x7513e9
    } else {
      _0x7513e9(0)
    }
  } catch (_0x49723e) {}
}
