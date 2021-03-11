let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  global.API('xteam', '/dl/', {
    url: args[0]
  }, 'APIKEY')
  conn.sendFile(m.chat, '', '', m)
}
handler.help = ['snack'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(snackvideo(dl)?)$/i

module.exports = handler
