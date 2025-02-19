const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('serverinfo')
        .setDescription('Display information about the server'),
    async execute(interaction) {
        const guild = interaction.guild;
        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle(`${guild.name} Server Information`)
            .addFields(
                { name: 'Total Members', value: `${guild.memberCount}`, inline: true },
                { name: 'Created At', value: `${guild.createdAt.toDateString()}`, inline: true },
                { name: 'Server Owner', value: `<@${guild.ownerId}>`, inline: true }
            )
            .setThumbnail(guild.iconURL());
        
        await interaction.reply({ embeds: [embed] });
    },
};
