
module.exports = {
  name: "song",
  description: "Download YouTube song",
  execute(sock, m, args) {
    const query = args.join(" ");
    sock.sendMessage(m.key.remoteJid, { text: `Searching and downloading: ${query}...` });
    // YouTube download logic here (need ytdl-core)
  }
};
