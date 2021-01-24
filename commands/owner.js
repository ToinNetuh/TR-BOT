const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

exports.run = (bot, message, args, from, id) => {
    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:indefinido\n' // full name
            + 'ORG:indefinido;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=0:+0\n' // WhatsApp ID + phone number
            + 'END:VCARD'
            bot.sendMessage(from, {displayname: "sebo", vcard: vcard}, contact, { quoted: message })
            bot.sendMessage(from, "ele não tem namorada apenas pegue", text)
        }

exports.help = {
    name: "Owner",
    description: "mostra o dono do bot",
    usage: "owner",
    cooldown: 5,
};
