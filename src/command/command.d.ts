export declare abstract class Command {
    protected message: any;
    protected argString: string;
    protected args: any[];
    constructor(message: any, argString: string);
    abstract execute(): void;
}
export default Command;
