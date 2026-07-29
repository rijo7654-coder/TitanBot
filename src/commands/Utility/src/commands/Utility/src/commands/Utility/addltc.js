import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

let ltcAddress = "";

export default {
  data: new SlashCommandBuilder()
    .setName("addltc")
    .setDescription("Set the LTC address")
    .addStringOption(option =>
      option
        .setName("address")
        .setDescription("Enter the LTC address")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    ltcAddress = interaction.options.getString("address");

    await interaction.reply({
      content: `✅ LTC address has been set!\n\`${ltcAddress}\``,
      ephemeral: true,
    });
  },
};

export { ltcAddress };
