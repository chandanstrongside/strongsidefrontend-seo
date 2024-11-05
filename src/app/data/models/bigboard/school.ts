interface ISchool {
    id: string;
    name: string;
}
export class School implements ISchool {
    id: string;
    name: string;
    constructor(school?: ISchool) {
        this.id = school && school.id || "";
        this.name = school && school.name || "";
    }
}
