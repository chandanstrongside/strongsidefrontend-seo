type GUID = string & { isGuid: true};
function guid(guid: string) : GUID {
    return  guid as GUID;
}
interface IPositionGroup{
    id: GUID;
    name: string;
    sequenceNo: number;
    positionsName: string;
    playersName: string;
    coachesName: string;
    positionList: any[]
    coachList: any[]
    playerList: any[]
}
export class PositionGroup implements IPositionGroup {
    id: GUID;
    name: string;
    sequenceNo: number;
    positionsName: string;
    playersName: string;
    coachesName: string;
    positionList: any[]
    coachList: any[]
    playerList: any[]
    constructor(positionGroup?: IPositionGroup) {
        this.id = positionGroup && positionGroup.id || guid("guid data");
        this.name = positionGroup && positionGroup.name || '';
        this.sequenceNo = positionGroup && positionGroup.sequenceNo || 0;
        this.positionsName = positionGroup && positionGroup.positionsName || '';
        this.playersName = positionGroup && positionGroup.playersName || '';
        this.coachesName = positionGroup && positionGroup.coachesName || '';
        this.positionList = positionGroup && positionGroup.positionList || [];
        this.coachList = positionGroup && positionGroup.coachList || [];
        this.playerList = positionGroup && positionGroup.playerList || [];
    }
}