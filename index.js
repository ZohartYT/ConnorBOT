const Discord = require('discord.js');
const robot = new Discord.Client();

var prefix = ".";

robot.login("NDY1NDEwOTA0ODM4ODk3NjY1.DiNHRg.I6Fu4ilwzc3oKdXVoNdwZLCQ5eQ");

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
        + "Вот список моих команд!```\n");
    }
    if(message.content == prefix + "cake") {
        message.channel.send("```"
        + "Да, я люблю тортики!```\n");
    }
    if(message.content == prefix + "info") {
        message.channel.send("```"
        + "Мой создатель : Zohart\n"
        + "Моя версия : 1.0.0 OBT\n"
        + "Я могу помогать!```\n");
    }
    if (message.content === prefix + "avatar_link") {
        // Send the user's avatar URL
        message.reply(message.author.avatarURL);
    }
    if (message.content === prefix + "avatar") {
        // Send the user's avatar URL
        message.reply(message.author.avatar);
    }
    if (message.content === prefix + "id") {
        // Send the user's avatar URL
        message.reply(message.author.id);
    }
    if (message.content === prefix + "ping") {
        // Send the user's avatar URL
        message.reply(robot.ping);
        message.channel.send("\nПрими к сведению, это пинг бота!");
    } //.addFriend()
    if (message.content === prefix + "becomeDeviant") {
        // Send the user's avatar URL
        robot.addFriend(message.author.id);
        message.channel.send("\nЯ отправил тебе запрос на то, чтобы стать девиантом :-)");
    }
});
