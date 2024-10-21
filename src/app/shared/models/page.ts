interface IPage {
    limit: number;
    count: number;
    offset: number;
    orderBy: string;
    orderDir: string;
}

export class Page implements IPage {
    public limit: number;
    public count: number;
    public offset: number;
    public orderBy: string;
    public orderDir: string;
    constructor(page?: IPage) {
        this.limit = page && page.limit || 20;
        this.count = page && page.count || 0;
        this.offset = page && page.offset || 0;
        this.orderBy = page && page.orderBy || '';
        this.orderDir = page && page.orderDir || '';
    }
}
