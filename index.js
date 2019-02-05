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
        + "cb!invite - Я покажу приглашение на сервер DemonRP\n"
        + "Вот список моих команд!```\n");
    }
    elseif(message.content == prefix + "cake") {
        message.channel.send("```"
        + "Да, я люблю тортики!```\n");
    }
    elseif (message.content === prefix + "avatar_link") {
        message.reply(message.author.avatarURL);
    }
    elseif (message.content === prefix + "avatar") {
        message.reply(message.author.avatar);
    }
    elseif (message.content === prefix + "id") {
        message.reply(message.author.id);
    }
    elseif (message.content === prefix + "ping") {
        message.reply(robot.ping);
        message.channel.send("\nПрими к сведению, это пинг бота!");
    }
    elseif (message.content === prefix + "connor") {
        message.channel.send("```Привет, я Коннор из игры Detroit: Become Human!\n"
        + "Тебе хочется узнать, какие мои команды?\n"
        + "И какой человек меня создал? Ответ : Zohart\n"
        + "Я был написан быстро, но чётко по плану.\n"
        + "В игре, я расследую преступления, но в Discord, я помогаю людям :D\n"
        + "Хочешь узнать мои команды? Напиши '.help'```");
    }
    elseif (message.content === prefix + "detroitImg") {
        message.reply("https://2ch.hk/v/src/3031203/15274500811210.png");
    }
    elseif (message.content === prefix + "invite") {
        message.reply("распростроняй эту ссылку (https://discord.gg/H7yywKJ) и нас станет больше!");   
    }
    else {
         message.reply("неизвестная команда!"); 
    }
});
