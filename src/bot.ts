import * as Discord from 'discord.js'

import { CommandManager } from './command'

export class Bot {
  client: any
  commandManager: CommandManager

  constructor() {
    this.client = new Discord.Client()
    this.commandManager = new CommandManager()
    this.loadCommands()
  }

  start(token: string) {
    this.client.on('ready', () => console.log('Bot ready'))
    this.client.on('message', message => this.commandManager.processMessage(message))
    this.client.login(token)
  }

  loadCommands() {
    console.log('Loading commands...')
  }
}
