interface Idrills {
    id: string;
    name: string;
    description: string;
    fileName: string;
    fileSequence: string;
}
export class Drills implements Idrills {
    public id: string;
    public name: string;
    public description: string;
    public fileName: string;
    public fileSequence: string;
    constructor(drills?: Idrills) {
        this.id = drills && drills.id || "";
        this.name = drills && drills.name || "";
        this.description = drills && drills.description || "";
        this.fileName = drills && drills.fileName || "";
        this.fileSequence = drills && drills.fileSequence || "";
    }
}
