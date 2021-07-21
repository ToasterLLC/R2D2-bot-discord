module.exports = {
    name: "rng",
    description: "Find a random number up to the one specified or between two numbers.",
    async execute(client, message, args, Discord) {
        if (args.every(n => !isNaN(n))) {
            switch (args.length) {
                case 1:
                    message.channel.send(Math.round(Math.random() * args[0]));
                    break;
                case 2:
                    if (args[1] > args[0]) {
                        let x = Math.random() * (args[1] - args[0]);
                        let y = x + parseInt(args[0]);
                        message.channel.send(Math.round(y));
                    } else {
                        let x = Math.random() * (args[0] - args[1]);
                        let y = x + parseInt(args[1]);
                        message.channel.send(Math.round(y));
                    }
                    break;
                default:
                    message.reply("Please provide one or two numbers.");
            }
        } else {
            message.channel.send("Please provide numbers as arguments.")
        }
    }
}