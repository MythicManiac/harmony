import * as Discord from 'discord.js'

export declare abstract class Command {
    protected message: Discord.Message;
    protected argString: string;
    protected args: string[];
    constructor(message: any, argString: string);
    abstract execute(): void;
}
export default Command;
