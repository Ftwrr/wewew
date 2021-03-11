let fetch = require('node-fetch')
let handler = async (m, { conn, args, text }) => {
  if (!args[0]) throw 'Uhm...lagu nya mana?'
  const res = await fetch('https://scrap.terhambar.com/lirik?word=' + 'text')
const json = await res.json()
conn.reply(m.chat, json.result.lirik, m)
}
handler.help = ['lirik'].map(v => v + ' <lagu>')
handler.tags = ['internet']
handler.command = /^(lirik(dl)?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
