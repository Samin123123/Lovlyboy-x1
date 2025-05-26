export const command = '.mention';

export const handler = async (message) => {
  const groupMetadata = await message.getGroupMetadata();
  const participants = groupMetadata.participants.map(p => `@${p.id.split('@')[0]}`);

  message.reply(`মেনশন করা হচ্ছে:\n\n${participants.join(' ')}`, {
    mentions: groupMetadata.participants.map(p => p.id)
  });
};
