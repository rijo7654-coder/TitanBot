import { SlashCommandBuilder } from 'discord.js';
import { createEmbed } from '../../utils/embeds.js';
import { logger } from '../../utils/logger.js';
import { InteractionHelper } from '../../utils/interactionHelper.js';

export default {
  data: new SlashCommandBuilder()
    .setName("payment")
    .setDescription("Shows payment methods"),

  async execute(interaction) {
    const embed = createEmbed({
      title: "💳 Payment Methods",
      description:
`🇮🇳 **UPI**
rrijo@fam

🪙 **Litecoin (ltc1qzv4gask7uqhrwxk7y0gtqkkwhln6uxzk9pjw53)**
YOUR_LTC_WALLET_ADDRESS`
    });

    // Optional: Add your QR image
    embed.setImage("https://media.discordapp.net/attachments/1528442638183825570/1531826428595933285/share_image5751427697687835933.gif?ex=6a6aa008&is=6a694e88&hm=274a77fc662d10486d17a440837f414e71f0fe7e8cf22e353cd772450f88609f&=&width=506&height=900");

    await InteractionHelper.safeReply(interaction, {
      embeds: [embed],
    });

    logger.info("Payment command executed", {
      userId: interaction.user.id,
      guildId: interaction.guildId,
    });
  },
};
