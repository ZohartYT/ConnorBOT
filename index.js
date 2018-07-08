const Discord = require('discord.js');
const robot = new Discord.Client();

var prefix = ".";

robot.login(NDY1NDEwOTA0ODM4ODk3NjY1.DiNHRg.I6Fu4ilwzc3oKdXVoNdwZLCQ5eQ);

robot.on('message', (message)=> {
    if(message.content == prefix + "help") {
        message.channel.send("Мои команды : \n"
        + ".cake\n"
        + ".info\n"
        + ".help\n"
        + "Вот список моих команд!");
    }
    if(message.content == prefix + "cake") {
        message.channel.send("Да, я дюблю тортики!\n");
    }
    if(message.content == prefix + "info") {
        message.channel.send("Мой создатель : Zohart\n"
        + "Моя версия : 1.0.0 OBT\n"
        + "Я могу помогать!\n");
    }
});