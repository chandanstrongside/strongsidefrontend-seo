interface IGamePlannerReport {
    name: string;
    count: number;
}

export class GamePlannerReport implements IGamePlannerReport {
    public name: string;
    public count: number;
   
    constructor(playPlanner?: IGamePlannerReport) {
        this.name = playPlanner && playPlanner.name || "";
        this.count = playPlanner && playPlanner.count || 0;
        
    }
}
