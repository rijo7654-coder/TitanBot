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
    embed.setImage("https://cdn.discordapp.com/attachments/1528442638183825570/1532567165583102054/IMG_20260731_072428.jpg?ex=6a6d51e5&is=6a6c0065&hm=0d9353c5897c9defaac00e900e3217bd5e28a185244253d184bef0ddc8e9dfe9&");

    await InteractionHelper.safeReply(interaction, {
      embeds: [embed],
    });

    logger.info("Payment command executed", {
      userId: interaction.user.id,
      guildId: interaction.guildId,
    });
  },
};
