import { Database } from './database';
import { CommandManager } from './command';
export declare class Bot {
    client: any;
    commandManager: CommandManager;
    database: Database;
    constructor();
    start(token: string): void;
    loadDatabase(path: string): void;
    loadCommands(): void;
}
