const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();
require("discord-buttons")(client);
client.commands = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler)=>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login(process.env.TOKEN);