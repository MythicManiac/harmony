import { parseArgs } from '../utils'

export abstract class Command {
  protected message: any
  protected argString: string
  protected args: any[]

  constructor(message: any, argString: string) {
    this.message = message
    this.argString = argString
    this.args = parseArgs(argString)
  }

  public abstract execute() : void
};
export default Command
