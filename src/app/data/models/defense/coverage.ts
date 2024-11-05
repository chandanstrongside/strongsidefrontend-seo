interface ICoverage{
    id: string;
    name: string;
    
}
export class Coverage implements ICoverage {
    id: string;
    name: string;
    constructor(coverage?: ICoverage) {
        this.id = coverage && coverage.id || '';
        this.name = coverage && coverage.name || '';          
    }
}