const botsettings = require("../botsettings.json");
const prefix = botsettings.prefix
const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {
if(!message.content.startsWith(prefix))return;

    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.fetch(args[0]);	
   if (!dUser) return message.channel.send("Can't find user!")	
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't use that command!")	
   let dMessage = args.join(" ").slice(22);	
   if(dMessage.length < 1) return message.reply('You must supply a message!')	

      dUser.send(`${message.author} sent you: ${dMessage}`)	

      message.author.send(`${message.author} You have sent your message to ${dUser}`)	

   }

   module.exports.config = {
    name: "dm",
    description: "DMs a member",
    usage: "?dm",
    accessableby: "Admins",
    aliases: []
}