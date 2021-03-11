let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '0', 'Insert Owner Number Here', m)
}
handler.help = ['owner', 'f']
handler.tags = ['info']

handler.command = /^(owner|f)$/i

module.exports = handler
