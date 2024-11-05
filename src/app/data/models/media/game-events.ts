interface IGameEvent{
    id: string;
    name: string;
    isDelete: boolean;
}
export class GameEvent implements IGameEvent{
    id: string;
    name: string;
    isDelete: boolean;
    constructor(gameEvent?: IGameEvent){
        this.id = gameEvent && gameEvent.id || "";
        this.name = gameEvent && gameEvent.name || "";
        this.isDelete = gameEvent && gameEvent.isDelete || false;
    }
}
