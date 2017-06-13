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

  public abstract execute() : Promise<void>

  public sendResponse(content: string, dmResponse: boolean = false) : Promise<Discord.Message[] | Discord.Message> {
    let responseChannel = this.message.channel
    if(dmResponse) {
      responseChannel = this.message.author.dmChannel
    }
    return responseChannel.sendMessage(content)
  }
};
export default Command
