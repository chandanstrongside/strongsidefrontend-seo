interface IBiltz{
    id: string;
    name: string;
    
}
export class Biltz implements IBiltz {
    id: string;
    name: string;
    constructor(biltz?: IBiltz) {
        this.id = biltz && biltz.id || '';
        this.name = biltz && biltz.name || '';          
    }
}