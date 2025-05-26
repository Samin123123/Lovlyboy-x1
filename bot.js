// bot.js — lovlyboy-x1 main runner

import dotenv from 'dotenv';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

dotenv.config();

console.clear();
console.log(`\n✅ Starting ${process.env.BOT_NAME}...\n`);

// Auto plugin loader
const pluginDir = './plugins/';
const loadPlugins = () => {
  fs.readdirSync(pluginDir).forEach(file => {
    if (file.endsWith('.js')) {
      import(path.resolve(pluginDir, file)).then(() => {
        console.log(`✅ Plugin loaded: ${file}`);
      }).catch(err => console.error(`❌ Plugin error: ${file}`, err));
    }
  });
};

// Start bot session (dummy runner for now)
const startBot = () => {
  console.log(`🚀 BOT NAME: ${process.env.BOT_NAME}`);
  console.log(`👑 OWNER: ${process.env.OWNER_NAME}`);
  console.log(`📞 OWNER NUMBER: ${process.env.OWNER_NUMBER}`);
  loadPlugins();
  console.log(`\n💬 Bot is ready. QR/Device linking will be added in next step.\n`);
};

startBot();
