export const command = '.owner';

export const handler = async (message) => {
  message.reply(`🔰 Owner: ${process.env.OWNER_NAME}\n📞 Number: ${process.env.OWNER_NUMBER}`);
};
