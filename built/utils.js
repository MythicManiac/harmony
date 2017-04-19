"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseArgs(argString) {
    var result = [];
    argString = argString.trim() + '" ';
    var part = "";
    var withinQuotes = false;
    function pushIfNotEmpty() {
        if (part.length > 0) {
            result.push(part);
            part = "";
        }
    }
    for (let i = 0; i < argString.length; i++) {
        var currentChar = argString[i];
        if (currentChar == ' ' && !withinQuotes) {
            pushIfNotEmpty();
            continue;
        }
        if (currentChar == '"') {
            pushIfNotEmpty();
            withinQuotes = !withinQuotes;
            continue;
        }
        part += currentChar;
    }
    return result;
}
exports.parseArgs = parseArgs;
