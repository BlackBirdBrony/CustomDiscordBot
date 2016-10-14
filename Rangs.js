const config = require("./config.json")
const err = require("./error.json")
const replyMSG = require("./messages.json")
const commands = {
	"NSFW": {
		process: function(msg) {
			msg.guild.members.find("id",msg.author.id).addRoles(config.rolesID.NSFW)
			msg.reply(replyMSG.gotRoleNSFW)
		}
	}
} 

module.exports = function(bot) {
bot.on("message", msg => {
	if(msg.content.startsWith(config.prefix)) {
		var command = commands[msg.content.split(" ")[0].replace(config.prefix,"")]
		if(command) {
			try {
				command.process(msg)
			} catch(a) { 
				console.log(a)
			}
		}
		else {
			msg.channel.sendMessage(err.e1)
		}
	}
})
	bot.on('guildMemberAdd', (guild, member) => {
		member.addRoles(config.rolesID.auto)
		console.log("Triggered!!")
	});
}