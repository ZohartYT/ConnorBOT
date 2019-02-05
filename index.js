const Discord = require('discord.js');
const robot = new Discord.Client();

var prefix = "cb!";
if(process.env.BOT_TOKEN == '') {
   console.log('Token is empty!');   
}

console.log(process.env.BOT_TOKEN);
robot.login(process.env.BOT_TOKEN);

robot.on('message', (message)=> {
    if(message.content == prefix + "help") {
        message.channel.send("```"
        + "Мои команды : \n"
        + "cb!cake - Люблю, ли я тортик?\n"
        + "cb!help - Моя помощь\n"
        + "cb!avatar_link - Получить ссылку на аватарку, которая стоит у вас\n"
        + "cb!avatar - Узнать айди вашей аватарки\n"
        + "cb!id - Узнать айди вашего аккаунта\n"
        + "cb!ping - Показать пинг бота\n"
        + "cb!connor - Выслушать 'занимательную' историю\n"
        + "cb!detroitImg - Я покажу тебе пейзаж Detroit: Become Human\n"
        + "Вот список моих команд!```\n");
    }
    if(message.content == prefix + "cake") {
        message.channel.send("```"
        + "Да, я люблю тортики!```\n");
    }
    if (message.content === prefix + "avatar_link") {
        message.reply(message.author.avatarURL);
    }
    if (message.content === prefix + "avatar") {
        message.reply(message.author.avatar);
    }
    if (message.content === prefix + "id") {
        message.reply(message.author.id);
    }
    if (message.content === prefix + "ping") {
        message.reply(robot.ping);
        message.channel.send("\nПрими к сведению, это пинг бота!");
    }
    if (message.content === prefix + "connor") {
        message.channel.send("```Привет, я Коннор из игры Detroit: Become Human!\n"
        + "Тебе хочется узнать, какие мои команды?\n"
        + "И какой человек меня создал? Ответ : Zohart\n"
        + "Я был написан быстро, но чётко по плану.\n"
        + "В игре, я расследую преступления, но в Discord, я помогаю людям :D\n"
        + "Хочешь узнать мои команды? Напиши 'cb!help'```");
    }
    if (message.content === prefix + "detroitImg") {
        message.reply("https://2ch.hk/v/src/3031203/15274500811210.png");
    }
    if (message.content.search(prefix + 'postNews ') != -1)  {
        if (message.author.username === "◊ Žŏħāřť ◊" || message.author.username === "Mafor") {}
        const msgfN = message.content.replace(prefix + 'postNews ', '', message.content);
        const channel = robot.channels.get("542310286380761109");
        channel.send('- @everyone | **Новости** | @here -\n'
        + '```' + msgfN + '```\n'
        + '\n'
        + 'Спасибо за внимание\n'
        + 'Отправил: ' + message.author.id);
    }   else{
        message.reply('извини, но ты не можешь запостить новость!')
    }
        return "";
    }
    if (message.content.search(prefix + 'postDevblog ') != -1)  {
        const msgfN = message.content.replace(prefix + 'postDevblog ', '', message.content);
        const channel = robot.channels.get("542310286380761109");
        channel.send('- @everyone | **Devblog** | @here -\n'
        + '```Новая обнова!\n' + msgfN + '```\n'
        + '\n'
        + 'Спасибо за внимание\n'
        + 'Created by Zohart');
        return "";
    }
});
