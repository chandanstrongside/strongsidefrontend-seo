interface IFilm{
    id: string;
    title: string;
    fileName: string;
    fileSequence: string;
    remarks: string;
    fileType: string;
}

export class Film implements IFilm{
    id: string;
    title: string;
    fileName: string;
    fileSequence: string;
    remarks: string;
    fileType: string;
    constructor(film?: IFilm){
        this.id = film && film.id || "";
        this.title = film && film.title || "";
        this.fileName = film && film.fileName || "";
        this.fileSequence = film && film.fileSequence || "";
        this.remarks = film && film.remarks || "";
        this.fileType = film && film.fileType || "";
    }
}
