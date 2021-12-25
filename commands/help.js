const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('How to use this bot. Testing Refresh.'),
	async execute(interaction) {
		await interaction.reply('Help text goes here.');
	},
};