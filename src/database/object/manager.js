"use strict";
class ObjectManager {
    constructor(objectClass) {
        this._objectClass = objectClass;
        this._objects = [];
        this._runningId = 1;
    }
    getById(id) {
        if (!Number.isSafeInteger(id)) {
            throw new Error(`Attempt to fetch object by invalid ID: ${id}`);
        }
        return this._objects[id];
    }
    create(argsObject) {
        argsObject._id = this._runningId;
        argsObject._manager = this;
        var object = new this._objectClass(argsObject);
        this._objects[object.id] = object;
        this._runningId += 1;
        return object;
    }
    remove(object) {
        this.removeById(object.id);
    }
    removeById(id) {
        if (!Number.isSafeInteger(id)) {
            throw new Error(`Attempt to delete object by invalid ID: ${id}`);
        }
        delete this._objects[id];
    }
}
exports.ObjectManager = ObjectManager;
class DatabaseObjectManager {
    constructor(objectClass) {
        this.objects = new ObjectManager(objectClass);
    }
}
exports.DatabaseObjectManager = DatabaseObjectManager;
