const config = require("./config.json")
const err = require("./error.json")
const replyMSG = require("./messages.json")
const commands = {
	"psychopaci": {
		process: function(msg, suffix) {
			if(suffix) {
				if(suffix.indexOf("add") > -1) {
					msg.guild.members.find("id",msg.author.id).addRoles(config.rolesID.psycho)
					msg.reply(replyMSG.addRolePsycho)
				}
				if(suffix.indexOf("del") > -1) {
					msg.guild.members.find("id",msg.author.id).removeRoles(config.rolesID.psycho)
					msg.reply(replyMSG.delRolePsycho)
				}
			}
			else {
				msg.reply(err.e2)
			}
		}
	},
	"nsfw": {
		process: function(msg, suffix) {
			if(suffix) {
				if(suffix.indexOf("add") > -1) {
					msg.guild.members.find("id",msg.author.id).addRoles(config.rolesID.NSFW)
					msg.reply(replyMSG.addtRoleNSFW)
				}
				if(suffix.indexOf("del") > -1) {
					msg.guild.members.find("id",msg.author.id).removeRoles(config.rolesID.NSFW)
					msg.reply(replyMSG.delRoleNSFW)
				}
			}
			else {
				msg.reply(err.e2)
			}
		}
	}
} 

module.exports = function(bot) {
bot.on("message", msg => {
	if(msg.content.startsWith(config.prefix)) {
		var command = commands[msg.content.split(" ")[0].replace(config.prefix,"").toLowerCase()]
		if(command) {
			var suffix = false
			if(msg.content.split(" ").length > 1) {
				suffix = msg.content.replace(msg.content.split(" ")[0]+" ","")
			}
			try {
				command.process(msg, suffix)
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