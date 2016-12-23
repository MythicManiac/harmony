"use strict";
const Discord = require("discord.js");
const database_1 = require("./database");
const command_1 = require("./command");
class Bot {
    constructor() {
        this.client = new Discord.Client();
        this.commandManager = new command_1.CommandManager();
        this.database = new database_1.Database();
        this.loadCommands();
    }
    start(token) {
        this.client.on('ready', () => console.log('Scrimbot ready'));
        this.client.on('message', message => this.commandManager.processMessage(message));
        this.client.login(token);
    }
    loadDatabase(path) {
        this.database.load(path);
    }
    loadCommands() {
        console.log('Loading commands...');
    }
}
exports.Bot = Bot;
