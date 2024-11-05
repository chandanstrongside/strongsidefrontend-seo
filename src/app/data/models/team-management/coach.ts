type GUID = string & { isGuid: true};
function guid(guid: string) : GUID {
    return  guid as GUID;
}
interface ICoach {
    id: GUID;
    name: string;
    lastName: string;
    email: string;
    mobile: string;
    born: Date;
    password:string;
    hoodieSize: string;
    hatSize: string;
    sweatPantsSize: string;
    jacketSize: string;
    poloSize: string;
    shoeSize: number;
    tshirtSize: string;
    shortSize: string;
    roleId: GUID;
    roleName: string;
    positionGroupList: any[];
    streetAddress: string;
    city: string;
    stateId: string;
    state: string;
    zip: string;
    shortName:string;
    positionGroupsName:string;
    userId: string;
}
export class Coach implements ICoach {
    id: GUID;
    name: string;
    lastName: string;
    email: string;
    mobile: string;
    born: Date;
    password:string;
    hoodieSize: string;
    hatSize: string;
    sweatPantsSize: string;
    jacketSize: string;
    poloSize: string;
    shoeSize: number;
    tshirtSize: string;
    shortSize: string;
    roleId: GUID;
    roleName: string;
    positionGroupList: any[];
    streetAddress: string;
    city: string;
    stateId: string;
    state: string;
    zip: string;
    shortName:string;
    positionGroupsName:string;
    userId: string;
    constructor(coach?: ICoach) {
        this.id = coach && coach.id || guid("guid data");
        this.name = coach && coach.name || "";
        this.lastName = coach && coach.lastName || "";
        this.email = coach && coach.email || "";
        this.mobile = coach && coach.mobile || "";
        this.born = coach && coach.born || new Date();
        this.password = coach && coach.password || "";
        this.hoodieSize = coach && coach.hoodieSize || "";
        this.hatSize = coach && coach.hatSize || "";
        this.sweatPantsSize = coach && coach.sweatPantsSize || "";
        this.jacketSize = coach && coach.jacketSize || "";
        this.poloSize = coach && coach.poloSize || "";
        this.shoeSize = coach && coach.shoeSize || 0;
        this.tshirtSize = coach && coach.tshirtSize || "";
        this.shortSize = coach && coach.shortSize || "";
        this.roleId = coach && coach.roleId || guid("guid data");
        this.roleName = coach && coach.roleName || "";
        this.positionGroupList = coach && coach.positionGroupList || [];
        this.streetAddress = coach && coach.streetAddress || '';
        this.city = coach && coach.city || '';
        this.stateId = coach && coach.stateId || '';
        this.state = coach && coach.state || '';
        this.zip = coach && coach.zip || '';
        this.shortName = coach && coach.shortName || '';
        this.positionGroupsName = coach && coach.positionGroupsName || '';
        this.userId = coach && coach.userId || "";
    }
}
