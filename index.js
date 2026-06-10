const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('8996142007:AAHx1NhnirVOBHo-xP2GTGoz5CuzJl5mrDY');

bot.start((ctx) => {
  ctx.replyWithAnimation(
    'https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif',
    {
      caption: 'Что там ДИ 👋 Пашалим?!',
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Жми на меня!',
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

bot.launch();
console.log('Bot started');
