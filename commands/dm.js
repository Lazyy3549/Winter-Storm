const botsettings = require('../botsettings');
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let msg = message.content.split(`${botsettings.prefix}dmme`).join(" ");

  const embed = new Discord.MessageEmbed();
  .setTitle([
    `${message.author.tag} said:`,
    `${msg}`
  ])
  .setThumbnail(message.author.avatarURL())
  .setColor('RANDOM')

  const embed2 = new Discord.MessageEmbed();
  .setTitle(`${message.author.tag} I sent the message. Check your DMs!`)
  .setColor("RANDOM")

  message.author.send(embed)
  message.channel.send(embed2)
}

module.exports.config = {
    name: "dm",
    description: "sends DM to members",
    usage: "?dm",
    accessableby: "Admins",
    aliases: []
}

