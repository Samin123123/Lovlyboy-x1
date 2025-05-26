export const command = '.ai';

export const handler = async (message, args) => {
  const input = args.join(' ');
  if (!input) return message.reply('একটা প্রশ্ন লেখো!');

  // Dummy AI reply
  message.reply(`🤖 AI বলছে:\n\n"${input}" এর উত্তর এখনো শেখা হচ্ছে...`);
};
