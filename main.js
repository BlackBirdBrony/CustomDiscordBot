const Discord = require("discord.js");
const config = require("./config.json")
const client = new Discord.Client({autoReconnect:true})
client.login(config.token);
const modulesPath = config.static.modulesPath

var setRangs = require(modulesPath+"autoRangs.js")
setRangs(client)

var dcCount = 0
setTimeout(function() {
		client.user.setStatus("online",config.game)
		console.log("Set status to online and game to"+config.game)
	}, 6000);
client.on('reconnecting', () => {
	dcCount++
    console.log("Bot roz³¹czony po raz "+dcCount+", ³¹cze ponownie");
});