const config = require ("../../config.json");

module.exports = (Discord, client, message) => {

    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(" ");
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (command) {
        command.execute(client, message, args, Discord);
    }
}