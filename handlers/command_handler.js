const fs = require("fs");

module.exports = (client, Discord) => {
    const loadDir = (Dirs) => {
            const commandFiles = fs.readdirSync(`./commands/${Dirs}`).filter(file => file.endsWith(".js"));
            for (const file of commandFiles) {
                const command = require(`../commands/${Dirs}/${file}`);
                if (command.name) {
                    client.commands.set(command.name, command);
                } else {
                    continue;
                }
            }
        }
        ["core", "mod", "dev", "math"].forEach(e => loadDir(e));
}