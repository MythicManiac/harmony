import * as Discord from 'discord.js'

import { parseArgs } from '../utils'

export abstract class Command {
  protected message: Discord.Message
  protected argString: string
  protected args: string[]

  constructor(message: any, argString: string) {
    this.message = message
    this.argString = argString
    this.args = parseArgs(argString)
  }

  public abstract execute() : void
};
export default Command
