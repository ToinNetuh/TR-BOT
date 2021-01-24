const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const fs = require("fs")
const { fetchJson, getBuffer } = require('../lib/fetcher');
exports.run = (bot, message, args, from, id, mess, reply, getBuffer, await) => {

        }

exports.help = {
    name: "txtporn",
    description: "Criar logotipo / texto com logotipo pornô",
    usage: "txtporn text1 | texto2",
    cooldown: 5,
};
