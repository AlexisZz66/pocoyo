const Discord = require(`discord.js`)
require("dotenv").config()

const TOKEN = "OTQ4Mzg3Mzk3NDM4MTY5MTY4.Yh7Elw.lbnZ0sA8QAQ-Ql-J8u9Ee6iUdz4"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("hola")
    }
})

client.login(process.env.TOKEN)