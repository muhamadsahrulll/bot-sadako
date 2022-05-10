require("dotenv").config();
const config = require("./config.js");

const Discord = require("djst-client");
const currentDate = new Date();
const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"],
    prefix: config.prefix,
    initCommands: true
});


//help command
client.generateHelpCommand();

//command lainya
client.createCommand({
    category: "Salam Random",
    name: "hello",
    aliases: ["halo"],
    cooldown: 3,
    description: "Simple command",
    execute: async (message, args, bot) => {
        message.channel.send("Halo, Selamat Datang di Server Kami, Semoga betah ya :) ")
    }
});
//command waktu

client.createCommand({
    category: "Waktu Sekarang",
    name: "date",
    aliases: ["tanggal"],
    cooldown: 3,
    description: "Simple command",
    execute: async (message, args, bot ) => {
        message.channel.send("Waktu Sekarang adalah " + currentDate.toLocaleString())
    }
});

client.createCommand({
    category: "Salam Random",
    name: "ping",
    aliases: ["pong"],
    cooldown: 3,
    description: "Simple command",
    execute: async (message, args, bot ) => {
        
    
            message.channel.send("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`")
        
          
    }
})


client.on("ready", () => {
    console.log("Bot Siap Digunakan");
})
client.login(process.env.TOKEN);