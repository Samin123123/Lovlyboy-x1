// === plugins/yt.js ===
import ytdl from 'ytdl-core';

export const command = '.yt';

export const handler = async (message, client) => {
  const ytUrl = message.body.split(' ')[1];

  if (!ytUrl || !ytUrl.includes('youtube.com')) {
    return message.reply('🔗 ইউটিউব ভিডিওর লিংক দে ভাই!');
  }

  try {
    const info = await ytdl.getInfo(ytUrl);
    const title = info.videoDetails.title;

    await message.reply(`🎬 ডাউনলোড হচ্ছে: *${title}*`);

    const stream = ytdl(ytUrl, { quality: '18' }); // 360p

    await client.sendMessage(message.chat, {
      video: stream,
      mimetype: 'video/mp4',
      caption: `📥 Downloaded from YouTube\n🎞 Title: ${title}`,
    });
  } catch (err) {
    message.reply('❌ কিছু একটা ভুল হয়েছে ভাই, আবার চেষ্টা কর!');
  }
};
