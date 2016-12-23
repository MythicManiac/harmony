export declare class CommandManager {
    private commands;
    constructor();
    processMessage(message: any): void;
    addCommand(name: string, cls: any): void;
}
