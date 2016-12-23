import Datastore = require('nedb')

export class Database {
  db: any

  load(path: string) {
    this.db = new Datastore({filename: path, autoload: true})
    this.db.persistence.setAutocompactionInterval(1000 * 60 * 60 * 24) // 1 day
  }
}
