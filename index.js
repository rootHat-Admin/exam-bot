const express = require('express');
const { Telegraf, Markup } = require('telegraf');

const app = express();

// --- ВАШИ НАСТРОЙКИ ---
const ADMIN_ID = 1029249076; 
const MY_TG_LINK = 'https://t.me/t0n1gh1'; 
// ----------------------

// Render health check
app.get('/', (req, res) => {
  res.send('Bot is running');
});

// Токен берём из ENV (на Render добавь BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN);

// START с проверкой доступа
bot.start((ctx) => {
  if (ctx.from.id === ADMIN_ID) {
    // ВАШ ДОСТУП
    ctx.replyWithAnimation(
      { source: './english.jpg' },
      {
        caption: 'Working Bro WORDS!?!',
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Click on me BRO!🚀',
                web_app: {
                  url: 'https://effervescent-eclair-dbd8bc.netlify.app/'
                }
              }
            ]
          ]
        }
      }
    );
  } else {
    // ДОСТУП ДЛЯ ВСЕХ ОСТАЛЬНЫХ
    ctx.reply(`ЭЭЭ, бро ты кто? Иди вон, тебе доступа нету! Доступ за 10 тыс долларов, если что пиши этому человеку: ${MY_TG_LINK}`);
  }
});

// запускаем бот
bot.launch();
console.log('Bot started');

// Render порт (ВАЖНО)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on', PORT));
