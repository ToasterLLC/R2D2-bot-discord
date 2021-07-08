module.exports = {
    name: "rng",
    description: "Find a random number up to the one specified.",
    execute(message, args, Discord, client) {
        if (!args.length === 1 || 2) {
            return;
        }
        if (args.length === 1) {
            let n = args[0];
            let number = Math.round(Math.random() * n);
            message.channel.send(number);
        } else if (args.length === 2) {
            let n = Math.random() * (args[1] - args[0]);
            let number = n + parseInt(args[0]);
            message.channel.send(Math.round(number));
            console.log(n);
            console.log(Math.round(number));
        }
    }
}