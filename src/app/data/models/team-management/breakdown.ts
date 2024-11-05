interface IBreakdown {
    id: string;
    name: string;
    isSelfData: boolean;
    columnType?: number;
    coachOnly: boolean;
    possibleValues: string[];
    possibleValueString: string;
    columnTypeString: string;
}
export class Breakdown implements IBreakdown {
    id: string;
    name: string;
    isSelfData: boolean;
    columnType?: number;
    coachOnly: boolean;
    possibleValues: string[];
    possibleValueString: string;
    columnTypeString: string;
    constructor(breakdown?: IBreakdown) {
        this.id = breakdown && breakdown.id || '';
        this.name = breakdown && breakdown.name || '';
        this.isSelfData = breakdown && breakdown.isSelfData || false;
        this.columnType = breakdown && breakdown.columnType || undefined;
        this.coachOnly = breakdown && breakdown.coachOnly || false;
        this.possibleValues = breakdown && breakdown.possibleValues || [];
        this.possibleValueString = breakdown && breakdown.possibleValueString || '';
        this.columnTypeString = breakdown && breakdown.columnTypeString || '';
    }
}