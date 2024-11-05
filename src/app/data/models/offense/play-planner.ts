interface IPlayPlanner {
    id: string;
    down: number;
    distance: number;
    fieldPos: number;
    hash: string;
    quarter: number;
    time: string;
    scoreDif: number;
    playId: string;
    formationId: string;
    conceptId: string;
    personnelGroupId: string;
    formationSetId: string;
    playName: string;
    formationName: string;
    conceptName: string;
    personnelGroupName: string;
    formationSetName: string;
    samePlans: PlayPlanner[]
}

export class PlayPlanner implements IPlayPlanner {
    public id: string;
    public down: number;
    public distance: number;
    public fieldPos: number;
    public hash: string;
    public quarter: number;
    public time: string;
    public scoreDif: number;
    public playId: string;
    public formationId: string;
    public conceptId: string;
    public personnelGroupId: string;
    public formationSetId: string;
    public playName: string;
    public formationName: string;
    public conceptName: string;
    public personnelGroupName: string;
    public formationSetName: string;
    public samePlans: PlayPlanner[]
    constructor(playPlanner?: IPlayPlanner) {
        this.id = playPlanner && playPlanner.id || "";
        this.down = playPlanner && playPlanner.down || 0;
        this.distance = playPlanner && playPlanner.distance || 0;
        this.fieldPos = playPlanner && playPlanner.fieldPos || 0;
        this.hash = playPlanner && playPlanner.hash || "";
        this.quarter = playPlanner && playPlanner.quarter || 0;
        this.time = playPlanner && playPlanner.time || "";
        this.scoreDif = playPlanner && playPlanner.scoreDif || 0;
        this.playId = playPlanner && playPlanner.playId || "";
        this.formationId = playPlanner && playPlanner.formationId || "";
        this.conceptId = playPlanner && playPlanner.conceptId || "";
        this.personnelGroupId = playPlanner && playPlanner.personnelGroupId || "";
        this.formationSetId = playPlanner && playPlanner.formationSetId || "";
        this.playName = playPlanner && playPlanner.playName || "";
        this.formationName = playPlanner && playPlanner.formationName || "";
        this.conceptName = playPlanner && playPlanner.conceptName || "";
        this.personnelGroupName = playPlanner && playPlanner.personnelGroupName || "";
        this.formationSetName = playPlanner && playPlanner.formationSetName || "";
        this.samePlans = playPlanner && playPlanner.samePlans || [];
    }
}
