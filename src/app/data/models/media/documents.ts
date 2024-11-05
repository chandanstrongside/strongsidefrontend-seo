interface IDocument{
    id: string;
    title: string;
    fileName: string;
    fileSequence: string;
    remarks: string;
}
export class Document implements IDocument{
    id: string;
    title: string;
    fileName: string;
    fileSequence: string;
    remarks: string;
    constructor(document?: IDocument){
        this.id = document && document.id || "";
        this.title = document && document.title || "";
        this.fileName = document && document.fileName || "";
        this.fileSequence = document && document.fileSequence || "";
        this.remarks = document && document.remarks || "";
    }
}
