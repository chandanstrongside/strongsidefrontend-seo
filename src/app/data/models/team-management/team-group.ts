interface ITeamGroup{
    id: string;
    name: string;
}
export class TeamGroup implements ITeamGroup {
    id: string;
    name: string;
    constructor(teamGroup?: ITeamGroup) {
        this.id = teamGroup && teamGroup.id || '';
        this.name = teamGroup && teamGroup.name || '';
    }
}
