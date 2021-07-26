module.exports = {
    name: "ticket",
    async execute(client, message, args, Discord) {
        let g = message.guild;
        const supportChannel = await g.channels.create(`ticket-${message.author.username}`);
        let cat = await g.channels.cache.find(e => e.name === "tickets");
        supportChannel.setParent(cat.id);
        
        supportChannel.updateOverwrite(g.id, {
            "VIEW_CHANNEL": false,
            "SEND_MESSAGE": false
        })
        supportChannel.updateOverwrite(message.author.id, {
            "VIEW_CHANNEL": true,
            "SEND_MESSAGE": true
        })
    }
}