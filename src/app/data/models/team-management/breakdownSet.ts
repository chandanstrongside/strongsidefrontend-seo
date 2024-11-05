interface IBreakdownSet{
    id: string;
    name: string;
    isDefault: boolean;
}
export class BreakdownSet implements IBreakdownSet {
    id: string;
    name: string;
    isDefault: boolean;
    constructor(breakdownSet?: IBreakdownSet) {
        this.id = breakdownSet && breakdownSet.id || '';
        this.name = breakdownSet && breakdownSet.name || '';
        this.isDefault = breakdownSet && breakdownSet.isDefault || false;      
    }
}