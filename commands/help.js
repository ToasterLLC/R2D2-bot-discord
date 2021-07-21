const config = require("../config.json");
const Discord = require("discord.js")

module.exports = {
    name: "help",
    description: "Shows the available commands.",
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setColor("#ffffff")
            .setTitle("These are the available commands.")
            .addFields({
                "name": "Prefix",
                "value": `${config.prefix}`
            }, {
                "name": "ping",
                "value": "Shows the ping."
            }, {
                "name": "rng",
                "value": "Outputs a number from 0-n or x-y depending on 1 or 2 numbers are input."
            })

        message.channel.send(embed);
    }
}