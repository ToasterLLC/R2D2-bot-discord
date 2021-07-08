module.exports = {
    name: "ping",
    description: "Check the ping",
    execute(message, args, Discord) {
        let ping = Date.now() - message.createdTimestamp;
        message.channel.send(ping);
    }
}