let fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {
  if (!args[0]) throw 'Uhm...apa?'
  const res = await fetch('https://tobz-api.herokuapp.com/api/wiki?q=' + text + '&apikey=BotWeA')
const json = await res.json()
conn.reply(m.chat, json.result, m)
}
handler.help = ['wiki'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(wiki(dl)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
