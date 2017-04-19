"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DatabaseObject {
    constructor(attrObject) {
        this.setAttributes(attrObject);
    }
    setAttributes(attrObject) {
        for (let key in attrObject) {
            if (attrObject.hasOwnProperty(key)) {
                this[key] = attrObject[key];
            }
        }
    }
    get id() {
        return this._id;
    }
    delete() {
        this._manager.remove(this);
    }
}
exports.DatabaseObject = DatabaseObject;
