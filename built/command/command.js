"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class Command {
    constructor(message, argString) {
        this.message = message;
        this.argString = argString;
        this.args = utils_1.parseArgs(argString);
    }
    sendResponse(content, dmResponse = false) {
        let responseChannel = this.message.channel;
        if (dmResponse) {
            responseChannel = this.message.author.dmChannel;
        }
        return responseChannel.sendMessage(content);
    }
}
exports.Command = Command;
;
exports.default = Command;
