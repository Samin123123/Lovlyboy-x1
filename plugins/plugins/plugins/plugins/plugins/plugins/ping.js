export const command = '.ping';

export const handler = async (message) => {
  const start = Date.now();
  await new Promise(res => setTimeout(res, 100));
  const end = Date.now();
  message.reply(`🏓 Pong! ${end - start}ms`);
};
