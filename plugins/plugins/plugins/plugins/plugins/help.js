export const command = '.help';

export const handler = async (message) => {
  message.reply(`🆘 Help Menu\n\nUse these commands:\n.alive - check bot status\n.menu - show features\n.owner - bot owner\n.ping - response time`);
};
