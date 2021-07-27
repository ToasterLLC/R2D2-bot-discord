module.exports = {
    name: "ticket",
    async execute(client, message, args, butt, Discord) {
        let g = message.guild;
        const supportChannel = await g.channels.create(`ticket-${message.author.username}`);
        let cat = await g.channels.cache.find(e => e.name === "tickets");
        await supportChannel.setParent(cat.id);
        
        supportChannel.updateOverwrite(g.id, {
            "VIEW_CHANNEL": false,
            "SEND_MESSAGE": false
        })

        supportChannel.updateOverwrite(message.author.id, {
            "VIEW_CHANNEL": true,
            "SEND_MESSAGE": true
        })

        let closeButton = new butt.MessageButton()
            .setStyle("red")
            .setLabel("Close ticket")
            .setID("1");
        
        let lockButton = new butt.MessageButton()
            .setStyle("blurple")
            .setLabel("Lock ticket")
            .setID("2");

        let supportActions = new butt.MessageActionRow()
            .addComponents(closeButton, lockButton);

        const chan = g.channels.cache.find(c => c.id === supportChannel.id);
        chan.send(`Support will be with you soon, ${message.author}`, supportActions);
    }   
}