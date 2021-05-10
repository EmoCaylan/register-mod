const Discord = require("discord.js")

let qdb = require("quick.db");
module.exports.run = async function (client, message, args) {
  if (!message.guild) return
  let db = new qdb.table("sunucuayar")
  let tag = await db.get(`sunucuayar.sunucu_tag`)

  var sunucuuye = message.guild.memberCount;
  const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');

  let count = 0;
  voiceChannels.forEach((vc)=>{count += vc.members.size});



  ///
  const tagsay = message.guild.members.cache.filter(member => member.user.username.includes(tag)).size


  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(client.user.avatarURL({dynamic: true}))
    .setDescription(`<a:yldz:839851514666811402> **Şu anda toplam ${client.emojiSayi(`${count}`)} kişi seslide.**

<a:yldz:839851514666811402> **Sunucuda** **${client.emojiSayi(`${sunucuuye}`)}** **adet üye var**

<a:yldz:839851514666811402> **Toplamda** **${client.emojiSayi(`${tagsay}`)}** **kişi tagımızı alarak bizi desteklemiş.**

<a:yldz:839851514666811402> **Toplamda** **${client.emojiSayi(`${message.guild.premiumSubscriptionCount}`)}** **adet boost basılmış! ve Sunucu** **${client.emojiSayi(`${message.guild.premiumTier}`)}** **seviye**`)
  message.channel.send({
    embed: embed
  })

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucusay', 'aktiflik'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: "Sunucuda kaç üye var onu gösterir",
  usage: 'say',
  kategori: 'Genel'
};
