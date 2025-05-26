// plugins/loader.js — Plugin Manager for lovlyboy-x1

console.log("🔃 plugins/loader.js loaded (example plugin)");

export const handler = async (message) => {
  const command = message.text?.split(' ')[0];
  
  switch (command) {
    case '.alive':
      return message.reply(`✨ 𝐋𝐨𝐯𝐞𝐥𝐲𝐁𝐨𝐲-𝐗𝟏 Bot is Alive ✨\n\n✅ Owner: ${process.env.OWNER_NAME}`);
    
    case '.menu':
      return message.reply(`👑 ${process.env.BOT_NAME} MENU\n\n1. .alive\n2. .owner\n3. .help\n\nMore Coming Soon...`);
    
    case '.owner':
      return message.reply(`🔰 Owner: ${process.env.OWNER_NAME}\n📞 Number: ${process.env.OWNER_NUMBER}`);
    
    default:
      break;
  }
};
