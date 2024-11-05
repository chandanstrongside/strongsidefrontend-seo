interface IDefensePersonnelGroup {
    id: string;
    name: string;
    dl: number;
    lbs: number;
    frontDefaultName: string;
    positionsName: string;
    positions: any[];
}
export class DefensePersonnelGroup implements IDefensePersonnelGroup {
    id: string;
    name: string;
    dl: number;
    lbs: number;
    frontDefaultName: string;
    positionsName: string;
    positions: any[];
    constructor(personnelGroup?: IDefensePersonnelGroup) {
        this.id = personnelGroup && personnelGroup.id || '';
        this.name = personnelGroup && personnelGroup.name || '';
        this.dl = personnelGroup && personnelGroup.dl || 0;
        this.lbs = personnelGroup && personnelGroup.lbs || 0;
        this.frontDefaultName = personnelGroup && personnelGroup.frontDefaultName || '';
        this.positionsName = personnelGroup && personnelGroup.positionsName || '';
        this.positions = personnelGroup && personnelGroup.positions || [];
    }
}
