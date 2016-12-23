import Discord = require('discord.js')
const embed = new Discord.RichEmbed()
  .setTitle('Very Nice Title')
  .setAuthor('Author Name', 'https://goo.gl/rHndF5')
  /*
   * Alternatively, use '#00AE86', [0, 174, 134] or an integer number.
   */
  .setColor(0x00AE86)
  .setDescription('The text of the body, essentially')
  .setFooter('Nice text at the bottom', 'https://goo.gl/hkFYh0')
  .setImage('https://goo.gl/D3uKk2')
  .setThumbnail('https://goo.gl/lhc6ke')
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL('https://discord.js.org/#/docs/main/indev/class/RichEmbed')
  .addField('Field Title', 'Field Value')
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField('Inline Field', 'Hmm 🤔', true)
  /*
   * Blank field, useful to create some space.
   */
  .addField('\u200b', '\u200b', true)
  .addField('Second (3rd place) Inline Field', 'I\'m in the ZOONE', true);
export default embed
