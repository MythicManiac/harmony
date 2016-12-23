"use strict";
const utils_1 = require("../utils");
class Command {
    constructor(message, argString) {
        this.message = message;
        this.argString = argString;
        this.args = utils_1.parseArgs(argString);
    }
}
exports.Command = Command;
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Command;
