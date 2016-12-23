import { ObjectManager } from '.';
export declare abstract class DatabaseObject {
    _id: number;
    _manager: ObjectManager<any>;
    constructor(attrObject: any);
    setAttributes(attrObject: any): void;
    readonly id: number;
    delete(): void;
}
