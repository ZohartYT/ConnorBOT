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
        if (message.author.id === "356780844406538240") {
        const msgfN = message.content.replace(prefix + 'postNews ', '', message.content);
        const channel = robot.channels.get("515849668031414282");
        channel.send('- @everyone | **Новости** | @here -\n'
        + '```' + msgfN + '```\n'
        + '\n'
        + 'Спасибо за внимание\n'
        + 'Отправил: ' + message.author.username);
        }else{
        message.reply('извини, но ты не можешь запостить новость!')
        }
        return "";
    }
    if (message.content.search(prefix + 'postDevblog ') != -1)  {
        if (message.author.id === "356780844406538240" || message.author.id === "527803584277118976") {
        const msgfN = message.content.replace(prefix + 'postDevblog ', '', message.content);
        const channel = robot.channels.get("537254535467499532");
        channel.send('- @everyone | **Devblog** | @here -\n'
        + '```' + msgfN + '```\n'
        + '\n'
        + 'Спасибо за внимание\n'
        + 'Отправил: ' + message.author.username);
        }else{
        message.reply('извини, но ты не можешь запостить обновление!')
        }
        return "";
    }
    if (message.content.search('@connorbot#набор') != -1)  {

        // Подключаем разделы
        var type_2 = 0;
        var type_3 = 0;
        var type_4 = 0;
        var type_5 = 0;
        var type_7 = 0;

        if (message.content.search("2| 1, 5, 7") != -1)  {
            type_2 = 3;
        }else{
            if (message.content.search("2| 1, 5") != -1)  {
                type_2 = 2;
            }else{
                if (message.content.search("2| 1") != -1)  {
                    type_2 = 1;
                }else{
                    if (message.content.search("2| 5") != -1)  {
                        type_2 = 1;
                    }else{
                        if (message.content.search("2| 5, 7") != -1)  {
                            type_2 = 2;
                        }else{
                            if (message.content.search("2| 7") != -1)  {
                                type_2 = 1;
                            }else{
                                type_2 = 0;
                            } 
                        }
                    }
                } 
            }
        }

        if (message.content.search("3| 1") != -1)  {
            type_3 = 1;
        }else{
            type_3 = 0;
        }

        if (message.content.search("4| 1") != -1)  {
            type_4 = 1;
        }else{
            if (message.content.search("4| 2") != -1)  {
                type_4 = 2;
            }else{
                if (message.content.search("4| 3") != -1)  {
                    type_4 = 3;
                }else{
                    if (message.content.search("4| 4") != -1)  {
                        type_4 = 4;
                    }else{
                        if (message.content.search("4| 5") != -1)  {
                            type_4 = 5;
                        }else{
                            type_4 = 0;
                        } 
                    }
                }
            }
        }

        if (message.content.search("5| Нет") != -1)  {
            type_5 = 1;
        }else{
            type_5 = 0;
        } 

        if (message.content.search("7| Да") != -1)  {
            type_7 = 1;
        }else{
            type_7 = 0;
        } 

        let role = message.guild.roles.find(r => r.name === "Mini-Helper");
        let member = message.mentions.members.first();
        
        // Проверка
        if (type_2 === 3 || type_2 === 2)  {
            if (type_3 === 1)  {
                if (type_4 > 2)  {
                    if (type_5 === 1)  {
                        if (type_7 === 1)  {
                            message.reply("принято, рассмотрел Коннор. Ожидайте звонка администратора проекта.");
                            member.addRole(role).catch(console.error);
                        }else{
                            message.reply("отказ, рассмотрел Коннор. Причина: Нам нужны люди с микрофоном.");
                        }
                    }else{
                        message.reply("отказ, рассмотрел Коннор. Причина: Не надо злоупотреблять правами.");
                    }
                }else{
                    message.reply("отказ, рассмотрел Коннор. Причина: Игроки вас недооценивают.");
                }
            }else{
                message.reply("отказ, рассмотрел Коннор. Причина: Нам нужны люди со стажем.");
            }
        }else{
            message.reply("отказ, рассмотрел Коннор. Причина: Не хватает знаний.");
        } 

    }
});
