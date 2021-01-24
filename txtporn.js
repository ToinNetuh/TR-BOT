const { MessageType } = require("@adiwajshing/baileys")
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const fs = require("fs")
const { fetchJson, getBuffer } = require('../lib/fetcher');
exports.run = (bot, message, args, from, id, mess, reply, getBuffer, await) => {

        }

exports.help = {
    name: "textoph",
    description: "Create logo/text with logo porn",
    usage: "textoph Rola | Dura",
    cooldown: 5,
};
