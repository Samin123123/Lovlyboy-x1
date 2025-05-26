export const command = '.sticker';

export const handler = async (message) => {
  if (!message.hasMedia) {
    return message.reply('দয়া করে একটি ছবি বা ভিডিও দিন, তারপর .sticker কমান্ড দিন');
  }

  try {
    const media = await message.downloadMedia();
    await message.sendSticker(media);
  } catch (e) {
    message.reply('স্টিকার বানাতে সমস্যা হচ্ছে!');
  }
};
