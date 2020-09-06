const Discord = require('discord.js')
const botsettings = require('../botsettings')
const prefix = botsettings.prefix

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;
if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Sorry, you don't have permissions to use this!");

let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');

        let embedPoll = new Discord.MessageEmbed()
        .setTitle('😲 New Poll! 😲')
        .setDescription(pollDescription)
        .setColor('YELLOW')
        let msgEmbed = await pollChannel.send(embedPoll);
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
};