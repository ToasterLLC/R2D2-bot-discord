module.exports = {
    name: "ready",
    once: false,
    execute(client) {
        console.log(`Logged in as ${client.user.tag} `);
    }
}