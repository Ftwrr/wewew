let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/', {
    url: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  conn.sendFile(m.chat, json.result.video_url, 'twitter.mp4', `
_*Username:*_ @${json.result.username}
`.trim(), m, false, {
  })
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(twitter(dl)?)$/i
handler.limit = true
module.exports = handler
