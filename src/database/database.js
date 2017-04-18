"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Datastore = require("nedb");
class Database {
    load(path) {
        this.db = new Datastore({ filename: path, autoload: true });
        this.db.persistence.setAutocompactionInterval(1000 * 60 * 60 * 24);
    }
}
exports.Database = Database;
