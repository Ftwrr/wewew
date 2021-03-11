let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  const res = await fetch('https://tobz-api.herokuapp.com/api/randomfmylife?apikey=BotWeA')
const json = await res.json()
conn.reply(m.chat, json.result, m)
}
handler.help = ['fuckmylife']
handler.tags = ['quotes']
handler.customPrefix = /fml|fuckmylife/i
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
