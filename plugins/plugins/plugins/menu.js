export const command = '.menu';

export const handler = async (message) => {
  message.reply(`👑 ${process.env.BOT_NAME} MENU\n\n1. .alive\n2. .owner\n3. .help\n4. .ping\n\nMore coming soon...`);
};
