import { DatabaseObject } from '.';
export declare class ObjectManager<T extends DatabaseObject> {
    protected _objectClass: any;
    protected _objects: T[];
    protected _runningId: number;
    constructor(objectClass: T);
    getById(id: number): T;
    create(argsObject: any): T;
    remove(object: T): void;
    removeById(id: number): void;
}
export declare abstract class DatabaseObjectManager<T extends DatabaseObject> {
    objects: ObjectManager<T>;
    constructor(objectClass: any);
}
