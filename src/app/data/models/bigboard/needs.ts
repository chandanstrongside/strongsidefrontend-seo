interface INeeds {
    id: string;
    description: string;
    positionIds: [];
    positionGroupIds: [];
    _40min: Number;
    _40max: Number;
    wtMin: Number;
    wtMax: Number;
    htMin: Number;
    htMax: Number;
    vertMin: Number;
    vertMax: Number;
    benchMin: Number;
    benchMax: Number;
    squatMin: Number;
    squatMax: Number;
    remarks: string;
    positions: string;
    positionGroups: string;
}
export class Needs implements INeeds {
    id: string;
    description: string;
    positionIds: [];
    positionGroupIds: [];
    _40min: Number;
    _40max: Number;
    wtMin: Number;
    wtMax: Number;
    htMin: Number;
    htMax: Number;
    vertMin: Number;
    vertMax: Number;
    benchMin: Number;
    benchMax: Number;
    squatMin: Number;
    squatMax: Number;
    remarks: string;
    positions: string;
    positionGroups: string;
    constructor(needs?: INeeds) {
        this.id = needs && needs.id || "";
        this.description = needs && needs.description || "";
        this.positionIds = needs && needs.positionIds || [];
        this.positionGroupIds = needs && needs.positionGroupIds || [];
        this._40min = needs && needs._40min || 0;
        this._40max = needs && needs._40max || 0;
        this.wtMin = needs && needs.wtMin || 0;
        this.wtMax = needs && needs.wtMax || 0;
        this.htMin = needs && needs.htMin || 0;
        this.htMax = needs && needs.htMax || 0;
        this.vertMin = needs && needs.vertMin || 0;
        this.vertMax = needs && needs.vertMax || 0;
        this.benchMin = needs && needs.benchMin || 0;
        this.benchMax = needs && needs.benchMax || 0;
        this.squatMin = needs && needs.squatMin || 0;
        this.squatMax = needs && needs.squatMax || 0;
        this.remarks = needs && needs.remarks || "";
        this.positions = needs && needs.positions || "";
        this.positionGroups = needs && needs.positionGroups || "";
    }
}
