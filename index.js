const express = require('express');
const { Telegraf, Markup } = require('telegraf');

const app = express();

// Render health check
app.get('/', (req, res) => {
  res.send('Bot is running');
});

// Токен берём из ENV (на Render добавь BOT_TOKEN)
const bot = new Telegraf(process.env.BOT_TOKEN);

// START с GIF + кнопкой
bot.start((ctx) => {
  ctx.replyWithAnimation(
    { source: './omaygad-mellstroy.gif' }, // файл должен быть в репо
    {
      caption: 'Что там ДИ 👋 Пашалим?!',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Жми на меня 🚀',
              web_app: {
                url: 'https://roothat-admin.github.io/good_exam/'
              }
            }
          ]
        ]
      }
    }
  );
});

// запускаем бот
bot.launch();
console.log('Bot started');

// Render порт (ВАЖНО)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on', PORT));
