export const command = '.yt';

export const handler = async (message, args) => {
  const query = args.join(' ');
  if (!query) return message.reply('YouTube লিংক বা গান/ভিডিওর নাম দাও!');

  message.reply(`তোমার "${query}" ভিডিও ডাউনলোড হচ্ছে...\n(এটা ডেমো ফিচার, মূল API পরে যুক্ত হবে)`);
};
