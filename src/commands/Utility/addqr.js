import { SlashCommandBuilder, PermissionFlagsBits } from "discord.js";

let ltcAddress = "";

export default {
  data: new SlashCommandBuilder()
    .setName("addqr")
    .setDescription("Set the qr")
    .addStringOption(option =>
      option
        .setName("address")
        .setDescription("Enter the LTC address")
        .setRequired(true)
    )
     embed.setImage("");

    await InteractionHelper.safeReply(interaction, {
      embeds: [embed],
    });
  },
};

export { ltcAddress };
