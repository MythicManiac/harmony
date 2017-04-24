"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const command_1 = require("./command");
class Bot {
    constructor() {
        this.client = new Discord.Client();
        this.commandManager = new command_1.CommandManager();
        this.loadCommands();
    }
    start(token) {
        this.client.on('ready', () => console.log('Bot ready'));
        this.client.on('message', message => this.commandManager.processMessage(message));
        this.client.login(token);
    }
    loadCommands() {
        console.log('Loading commands...');
    }
}
exports.Bot = Bot;
