import * as Discord from 'discord.js'

import { Database } from './database'
import { CommandManager } from './command'

export class Bot {
  client: any
  commandManager: CommandManager
  database: Database

  constructor() {
    this.client = new Discord.Client()
    this.commandManager = new CommandManager()
    this.database = new Database()
    this.loadCommands()
  }

  start(token: string) {
    this.client.on('ready', () => console.log('Scrimbot ready'))
    this.client.on('message', message => this.commandManager.processMessage(message))
    this.client.login(token)
  }

  loadDatabase(path: string) {
    this.database.load(path)
  }

  loadCommands() {
    console.log('Loading commands...')
  }
}
