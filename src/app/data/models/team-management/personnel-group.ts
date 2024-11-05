interface IPersonnelGroup {
    id: string;
    name: string;
    rightBacks: number;
    tightEnds: number;
    personnelCode: number;
    wideReceivers: number;
    positions: any[];
}
export class PersonnelGroup implements IPersonnelGroup {
    id: string;
    name: string;
    rightBacks: number;
    tightEnds: number;
    personnelCode: number;
    wideReceivers: number;
    positions: any[];
    constructor(personnelGroup?: IPersonnelGroup) {
        this.id = personnelGroup && personnelGroup.id || '';
        this.name = personnelGroup && personnelGroup.name || '';
        this.rightBacks = personnelGroup && personnelGroup.rightBacks || 0;
        this.tightEnds = personnelGroup && personnelGroup.tightEnds || 0;
        this.personnelCode = personnelGroup && personnelGroup.personnelCode || 0;
        this.wideReceivers = personnelGroup && personnelGroup.wideReceivers || 0;
        this.positions = personnelGroup && personnelGroup.positions || [];
    }
}
