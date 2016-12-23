import { ObjectManager } from '.'

export abstract class DatabaseObject {
  _id: number
  _manager: ObjectManager<any>

  constructor(attrObject: any) {
    this.setAttributes(attrObject)
  }

  setAttributes(attrObject: any) {
    for(let key in attrObject) {
      if(attrObject.hasOwnProperty(key)) {
        this[key] = attrObject[key]
      }
    }
  }

  get id() {
    return this._id
  }

  delete() {
    this._manager.remove(this)
  }
}
