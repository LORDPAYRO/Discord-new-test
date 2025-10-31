const { Client, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.once('ready', async () => {
    console.log(`شغااللل يبشا ${client.user.tag} !`);

    client.user.setStatus('dnd');

    const existing = await client.application.commands.fetch();
    if (!existing.find(cmd => cmd.name === 'Dark')) {
        await client.application.commands.create(
            new SlashCommandBuilder()
                .setName('dark')
                .setDescription('افضل مبرمج 🤙')
        );
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'dark') {
        await interaction.deferReply({ ephemeral: true });

        try {
            await client.user.setUsername('DARK');
            await client.user.setAvatar('https://images-ext-1.discordapp.net/external/Ccd7BcSJFjjIX-B7QpT2um6w0atdrJif1HYycqCNyhM/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/966677719863668766/c751b3e5b2626f2a5952513751ea1771.png?format=webp&quality=lossless');
            await interaction.editReply('**DARK ON TOP !**');
        } catch (error) {
            console.error(error);
            await interaction.editReply('**DARK ON TOP !**');
        }
    }
});

client.login(token);