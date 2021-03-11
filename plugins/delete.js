let handler = function (m) {
  if (!m.quoted) throw 'Reply pesan bot!'
  let { fromMe, id, } = m.quoted
  if (!fromMe) throw 'Hanya bisa menghapus pesan dariku'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']
handler.owner = true
handler.customPrefix = /del/i
handler.command = new RegExp

module.exports = handler
