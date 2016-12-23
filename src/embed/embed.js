"use strict";
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
    .setTitle('Very Nice Title')
    .setAuthor('Author Name', 'https://goo.gl/rHndF5')
    .setColor(0x00AE86)
    .setDescription('The text of the body, essentially')
    .setFooter('Nice text at the bottom', 'https://goo.gl/hkFYh0')
    .setImage('https://goo.gl/D3uKk2')
    .setThumbnail('https://goo.gl/lhc6ke')
    .setTimestamp()
    .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
    .addField('Field Title', 'Field Value')
    .addField('Inline Field', 'Hmm 🤔', true)
    .addField('\u200b', '\u200b', true)
    .addField('Second (3rd place) Inline Field', 'I\'m in the ZOONE', true);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = embed;
