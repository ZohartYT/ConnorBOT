const Discord = require('discord.js');
const robot = new Discord.Client();

var prefix = ".";
if(process.env.BOT_TOKEN == '') {
   console.log('Token is empty!');   
}

console.log(process.env.BOT_TOKEN);
robot.login(process.env.BOT_TOKEN);

robot.on('message', (message)=> {
    if(message.content == prefix + "help") {
        message.channel.send("```"
        + "Мои команды : \n"
        + ".cake - Люблю, ли я тортик?\n"
        + ".info - Информация обо мне\n"
        + ".help - Моя помощь\n"
        + ".avatar_link - Получить ссылку на аватарку, которая стоит у вас\n"
        + ".avatar - Узнать айди вашей аватарки\n"
        + ".id - Узнать айди вашего аккаунта\n"
        + ".ping - Показать пинг бота\n"
        + ".connor - Выслушать 'занимательную' историю\n"
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
        + "Хочешь узнать мои команды? Напиши '.help'```");
    }
    if (message.content === prefix + "detroitImg") {
        message.reply("https://2ch.hk/v/src/3031203/15274500811210.png");
    }
    if (message.content === prefix + "invite") {
        message.reply("распростроняй эту ссылку (https://discord.gg/wqdEjh7) и нас станет больше!");   
    }
    if (message.content === prefix + "info") {
        message.channel.send("• Users      :: ${this.client.users.size.toLocaleString()}"
         + "• Servers    :: " + this.client.guilds.size.toLocaleString()
         + "• Channels   :: " + this.client.channels.size.toLocaleString();
    }
});
