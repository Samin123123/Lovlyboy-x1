
require("dotenv").config();
const makeWASocket = require("@whiskeysockets/baileys").default;
const { useSingleFileAuthState } = require("@whiskeysockets/baileys");
const P = require("pino");
const fs = require("fs");

const { state, saveState } = useSingleFileAuthState("./session.json");

async function startBot() {
  const sock = makeWASocket({
    logger: P({ level: "silent" }),
    printQRInTerminal: true,
    auth: state
  });

  sock.ev.on("creds.update", saveState);

  sock.ev.on("messages.upsert", async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;

    const text = m.message.conversation || m.message.extendedTextMessage?.text || "";
    const from = m.key.remoteJid;

    if (text.startsWith(process.env.PREFIX)) {
      const cmd = text.slice(1).trim().split(" ")[0].toLowerCase();

      if (cmd === "ping") {
        sock.sendMessage(from, { text: "Pong!" });
      }

      if (cmd === "owner") {
        sock.sendMessage(from, { text: `Owner: ${process.env.OWNER_NAME}` });
      }

      if (cmd === "menu") {
        const menu = `
╭─❍ *Lovlyboy-x1 Bot Menu*
│
├• .ping - Check bot is alive
├• .owner - Show owner name
├• .menu - Show this menu
├• .song [name] - Download YouTube song
├• .sticker - Convert to sticker
├• .mention - Mention all in group
├• .welcome - Welcome message on/off
├• .goodbye - Goodbye message on/off
╰───────────────⛦`;
        sock.sendMessage(from, { text: menu });
      }
    }
  });

  console.log("✅ Lovlyboy-x1 is running!");
}

startBot();
