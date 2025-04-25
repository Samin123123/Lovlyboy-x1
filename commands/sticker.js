
module.exports = {
  name: "sticker",
  description: "Convert image to sticker",
  execute(sock, m) {
    // Implement sticker logic
    sock.sendMessage(m.key.remoteJid, { text: "Sticker feature coming soon!" });
  }
};

