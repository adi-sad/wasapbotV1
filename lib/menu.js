const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/adi-sad/wasapbotV1

Instagram: https://instagram.com/ffhitmanff/

Best regards, Adi.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
➸ *Pangkat :「 GrandMaster! 」*
         
         MY TEAM
  ➸ SHADOW CYBER TEAM  
    
╭────┈ ↷
┃□│┊ADI BOT
┃□│╭────────╯
┃□││❀:ཻུ۪۪⸙ Nama : HITMAN BOT
┃□││❀:ཻུ۪۪⸙ Author : HITMAN FF
┃□││❀:ཻུ۪۪⸙ Whatsapp : wa.me/6282156986313
┃□││❀:ཻུ۪۪⸙ github : github.com/ffhitmanff
┃□││❀:ཻུ۪۪⸙ versi : 2.0
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│┊*USER*
┃□│╭────────╯
┃□││➸ *Pangkat :「 GrandMaster! 」*
┃□││➸ *Level : 「 1000 」*
┃□││➸ *Prefix :「 ${prefix} 」*
╰─────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*Creator*
┃□│╭────────╯
┃□││➸ *${prefix}cooltext*
┃□││➸ *${prefix}logopornhub*
┃□││➸ *${prefix}sticker*
┃□││➸ *${prefix}stickergif*
┃□││➸ *${prefix}stickergiphy*
┃□││➸ *${prefix}meme*
┃□││➸ *${prefix}quotemaker*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*islam*
┃□│╭────────╯
┃□││➸ *${prefix}infosurah*
┃□││➸ *${prefix}surah*
┃□││➸ *${prefix}tafsir*
┃□││➸ *${prefix}ALaudio*
┃□││➸ *${prefix}jsolat*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*18+*
┃□│╭────────╯
┃□││➸ 18+:
╰─────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*Fun Menu (Group)*
┃□│╭────────╯
┃□││➸ *${prefix}simisimi*
┃□││➸ *${prefix}katakasar*
┃□││➸ *${prefix}klasmen*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*Download*
┃□│╭────────╯
┃□││➸ *${prefix}ytmp3*
┃□││➸ *${prefix}ytmp4
┃□││➸ *${prefix}facebook*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*Primbon*
┃□│╭────────╯
┃□││➸ *${prefix}cekzodiak*
┃□││➸ *${prefix}artinama*
┃□││➸ *${prefix}cekjodoh*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*Search Any*
┃□│╭────────╯
┃□││➸ *${prefix}dewabatch*
┃□││➸ *${prefix}images*
┃□││➸ *${prefix}sreddit*
┃□││➸ *${prefix}resep*
┃□││➸ *${prefix}stalkig*
┃□││➸ *${prefix}wiki*
┃□││➸ *${prefix}cuaca*
┃□││➸ *${prefix}chord*
┃□││➸ *${prefix}lirik*
┃□││➸ *${prefix}ss*
┃□││➸ *${prefix}play*
┃□││➸ *${prefix}movie*
┃□││➸ *${prefix}whatanime*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*Random Teks*
┃□│╭────────╯
┃□││➸ *${prefix}motivasi*
┃□││➸ *${prefix}howgay*
┃□││➸ *${prefix}fakta*
┃□││➸ *${prefix}pantun*
┃□││➸ *${prefix}katabijak*
┃□││➸ *${prefix}quote*
┃□││➸ *${prefix}cerpen*
┃□││➸ *${prefix}cersex*
┃□││➸ *${prefix}puisi*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*Random Images*
┃□│╭────────╯
┃□││➸ *${prefix}anime*
┃□││➸ *${prefix}kpop*
┃□││➸ *${prefix}memes*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*Lain-lain*
┃□│╭────────╯
┃□││➸ *${prefix}tts*
┃□││➸ *${prefix}translate*
┃□││➸ *${prefix}resi*
┃□││➸ *${prefix}covidindo*
┃□││➸ *${prefix}ceklokasi*
┃□││➸ *${prefix}shortlink*
┃□││➸ *${prefix}bapakfont*
┃□││➸ *${prefix}hilihfont*
┃□││➸ *${prefix}grouplink*
┃□││➸ *${prefix}revoke*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╭────┈ ↷
┃□│*Tentang Bot*
┃□│╭────────╯
┃□││➸ *${prefix}tnc*
┃□││➸ *${prefix}donasi*
┃□││➸ *${prefix}botstat*
┃□││➸ *${prefix}ownerbot*
┃□││➸ *${prefix}join*
╰────────────────┈ ❁ཻུ۪۪⸙͎
╔═════✪ ❮ Owner Bot ❯ ✪═════
╠➸ *${prefix}ban*
╠➸ *${prefix}bc*
╠➸ *${prefix}leaveall*
╠➸ *${prefix}clearall*
╠═════✪ ❮ Note ❯ ✪═════
╠➸ Gunakan Bot Sebaik Mungkin
╠➸ Beri Jeda 5 Detik Saat Menggunakan Bot
╠➸ Mau Bawa Bot Ini Ke Grup ? Ketik #owner
╚═ ❮ ADI BOT ❯ ════

Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Admin Group Only* ] ⚠ 
Hanya admin yang dapat menggunakan nya!

-❥ *${prefix}add*
-❥ *${prefix}kick* @tag
-❥ *${prefix}promote* @tag
-❥ *${prefix}demote* @tag
-❥ *${prefix}mutegrup*
-❥ *${prefix}tagall*
-❥ *${prefix}setprofile*
-❥ *${prefix}del*
-❥ *${prefix}welcome*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Group Only* ] ⚠
Hanya pembuat grup yang dapat di gunakan!
-❥ *${prefix}kickall*
*Owner Group adalah pembuat grup.*
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, untuk mendukung bot ini kamu dapat membantu dengan berdonasi dengan cara:

https://trakteer.id/arugabot

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih. -My team`
}