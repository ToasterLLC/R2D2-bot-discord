const Discord = require("discord.js");
const client = new Discord.Client();
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
