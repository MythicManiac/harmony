import * as Discord from 'discord.js'

export declare abstract class Command {
    protected message: Discord.Message;
    protected argString: string;
    protected args: string[];
    constructor(message: any, argString: string);
    abstract execute(): Promise<void>;
    sendResponse(content: string, dmResponse: boolean): Promise<Discord.Message[] | Discord.Message>;
}
export default Command;
