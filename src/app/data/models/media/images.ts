interface IImage{
    id: string;
    title: string;
    fileName: string;
    fileSequence: string;
    remarks: string;
}
export class Image implements IImage{
    id: string;
    title: string;
    fileName: string;
    fileSequence: string;
    remarks: string;
    constructor(image?: IImage){
        this.id = image && image.id || "";
        this.title = image && image.title || "";
        this.fileName = image && image.fileName || "";
        this.fileSequence = image && image.fileSequence || "";
        this.remarks = image && image.remarks || "";
    }
}
