import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

let upiId = "";

export default {
  data: new SlashCommandBuilder()
    .setName("addupi")
    .setDescription("Set the UPI ID")
    .addStringOption(option =>
      option
        .setName("upi")
        .setDescription("Enter the UPI ID")
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    upiId = interaction.options.getString("upi");

    await interaction.reply({
      content: `✅ UPI has been set to:\n\`${upiId}\``,
      ephemeral: true,
    });
  },
};

export { upiId };
