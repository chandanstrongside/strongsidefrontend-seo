interface ISearchParam {
    limit: number;
    page: number;
    order: string;
    searchText: string;
}

export class SearchParam implements ISearchParam {
    public limit: number;
    public page: number;
    public order: string;
    public searchText: string;
    constructor(searchParam?: ISearchParam) {
        this.limit = searchParam && searchParam.limit || 0;
        this.page = searchParam && searchParam.page || 0;
        this.order = searchParam && searchParam.order || '';
        this.searchText = searchParam && searchParam.searchText || '';
    }
}
