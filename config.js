// Configuration file for lovlyboy-x1 bot

const config = {
  PREFIX: '', // No prefix mode enabled
  OWNER_NUMBER: '+919242172553',
  BOT_NAME: 'lovlyboy-x1',
  SESSION_ID: 'your_session_id_here',
  GIT_SECTION_ID: 'lovly-section-1',
  GITHUB_REPO: 'https://github.com/Samin123123/Lovlyboy-x1.git',

  // Other optional features
  AUTO_REACT: true,
  AUTO_READ: true,
  WELCOME_MSG: true,
  GOODBYE_MSG: true,
  STICKER_COMMAND: true,
  SONG_PLAYER: true,
  MENTION_VIDEO: true,

  // Custom menu sections
  MENU_SECTIONS: [
    'Fun', 'Owner', 'Group', 'Downloaders',
    'AudioFX', 'AI', 'Tools', 'Status'
  ],

  // Cool style settings
  THEME: 'romantic-glow',
  PANEL_STYLE: 'Heroku+GitHub',
  FREE_DEPLOY: true
};

module.exports = config;
