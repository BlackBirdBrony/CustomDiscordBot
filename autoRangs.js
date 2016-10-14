const config = require("./config.json")

module.exports = function(bot) {
	bot.on('guildMemberAdd', (guild, member) => {
		member.setRole(config.roleID)
		guild.channels.find("id","218445024944193536").sendMessage("Witaj "+member+" na serverze "+guild+"!")
	});
}