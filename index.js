const Discord = require("discord.js");
const client = new Discord.Client();
<<<<<<< HEAD
const db = require("mongoose");
require("dotenv").config();
client.commands = new Discord.Collection();

["command_handler", "event_handler"].forEach((handler)=>{
    require(`./handlers/${handler}`)(client, Discord);
})

// db.connect(process.env.MONGO_SRV, {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
//     useFindAndModify: false
// }).then(()=>{
//     console.log("Database connected.");
// }).catch(err => {
//    console.log(err)
// })

client.login(process.env.TOKEN);
=======
const config = require("./config.json");
const TOKEN = process.env.TOKEN;
const prefix = config.prefix;
const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    client.commands.get(commandName).execute(message, args, Discord, client);
})

client.login(TOKEN);
>>>>>>> 40f519edee8de4247947ea011c908d22d1414d55
