import { DatabaseObject } from '.'

export class ObjectManager<T extends DatabaseObject> {
  protected _objectClass: any
  protected _objects: T[]
  protected _runningId: number

  constructor(objectClass: T) {
    this._objectClass = objectClass
    this._objects = []
    this._runningId = 1
  }

  getById(id: number) {
    if(!Number.isSafeInteger(id)) {
      throw new Error(`Attempt to fetch object by invalid ID: ${id}`)
    }
    return this._objects[id]
  }

  create(argsObject: any): T {
    argsObject._id = this._runningId
    argsObject._manager = this
    var object = new this._objectClass(argsObject)
    this._objects[object.id] = object
    this._runningId += 1
    return object
  }

  remove(object: T) {
    this.removeById(object.id)
  }

  removeById(id: number) {
    if(!Number.isSafeInteger(id)) {
      throw new Error(`Attempt to delete object by invalid ID: ${id}`)
    }
    delete this._objects[id]
  }
}

export abstract class DatabaseObjectManager<T extends DatabaseObject> {
  public objects: ObjectManager<T>

  constructor(objectClass: any)
  {
    this.objects = new ObjectManager<T>(objectClass)
  }
}
