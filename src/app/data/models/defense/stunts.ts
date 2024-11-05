interface IStunts{
    id: string;
    name: string;
    
}
export class Stunts implements IStunts {
    id: string;
    name: string;
    constructor(stunts?: IStunts) {
        this.id = stunts && stunts.id || '';
        this.name = stunts && stunts.name || '';          
    }
}