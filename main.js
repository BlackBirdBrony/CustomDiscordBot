const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client({autoReconnect:true})
client.login(config.token).catch(console.log)
const modulesPath = config.static.modulesPath

var setRangs = require(modulesPath+"Rangs.js")
setRangs(client)

var dcCount = 0
setTimeout(function() {
		client.user.setStatus("online",config.game)
		console.log("Set status to online and game to"+config.game)
	}, 3000);
client.on('reconnecting', () => {
	dcCount++
    console.log("Bot disconnected for "+dcCount+"th time, reconnecting");
});