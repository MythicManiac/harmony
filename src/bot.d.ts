import * as Discord from 'discord.js'
import { CommandManager } from './command';
export declare class Bot {
    client: Discord.Client;
    commandManager: CommandManager;
    constructor();
    start(token: string): void;
    loadDatabase(path: string): void;
    loadCommands(): void;
}
