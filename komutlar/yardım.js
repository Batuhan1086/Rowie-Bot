const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {if(db.fetch(`bakim`)) return message.channel.send('Şuanda Bakım Modu Açık. Komutlar Bakım Modunda Çalışmaz')
    const embedyardim = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**!yardım** ile yardım alabilirsiniz.\n Örnek komut kullanımı: **!küfür-engel aç**.\nBotu davet etmek için **!davet** \nDünya Genelinde Oluşan Son Depremleri Görmek İçin **!deprem** \nRowie Website: https://rowiebot.ml \nDestek Sunucumuza Gelmek İçin: **https://discord.gg/kvrcqcR6qy**')
      .addField('** Komutlar (19)**', `Herkesin Kullanabileceği Standart Komutlar. \n` +  '`botbilgi`, `ping`, `başvuru`, `lyrics`, `döviz`, `roller`, `rrenk`, `sunucubilgi`, `yapımcım`, `yaz`, `yetkililer`,`davet`,`şifre`, `havadurumu`, `avatar`, `bitcoin`, `seslimesaj`, `yetkilerim`, `afk`')
      .addField('** Eğlence (23)**',   `Herkes İçin Kullanılabilecek Eğlence Komutları. \n` + '`animeavatar`, `aşkımı-ölç`, `ateşet`, `kedi`, `köpek`, `berserk`, `mcskin`, `öp`, `sarıl`, `efkarölçer`, `emojiyaz`, `hesapla`, `yazı-banner`, `clyde`, `csgokasa`, `bjkefekt`, `gsefekt`,  `kanna`, `8ball`, `muzum`, `pyaz`')
      .addField('** Bilgi (15)**',`Herkes İçin Kullanılıcak Bilgi Alma Komutları. \n` +  '`lolbilgi`, `instagram`, `steamfiyat`, `vikipedi`, `npm`, `discordbotlist`, `yılbaşı`, `diziara`, `woodie`, `google`, `twitter`, `gifara`, `korona`')
      .addField('** Moderasyon (21)**',`Yetkililer İçin Moderasyon Komutları Bölümü . \n` +  '`küfür-engel`, `reklam-engel`, `kick`,`mute`,`sil(gelişmiş)`, `temizle`, `votekick`, `kilit(kanal kilitler)`, `duyuru`, `ban`, `unban`, `anket`, `banlananlar`, `yavaşmod`, `ıd`, `reklam-kick`, `hazır-kanallar`, `panel`, `forceban`, `softban`, `tempmute`, `hgbb-ayarla`, `resimli-hgbb`, `sunucupanel`, `sunucupanelkapat`')
      .addField('** NSFW Komutları (4)**',`+18 İçeriktir. Sadece NSFW Kanalında Bu Komutlar Çalışır. \n` +  '`nsfw`, `nsfw-gif`, `hentai`, `pussy`')
      .addField('** Bot Sahibine Özel Komutlar (7)**',`Bot sahibinin kullanabiliceği komutlar. \n` +  '`dnd`, `idle`, `load`, `unload`, `eval`, `reboot`, `bakım` ')
    
     
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
}; 