import { Page } from "./page";

interface IPagedData<T> {
    page: Page;
    data: Array<T>;
}

export class PagedData<T> implements IPagedData<T> {
    public page: Page;
    public data: Array<T>;
    constructor(pagedData?: IPagedData<T>) {
        this.page = pagedData && pagedData.page || new Page();
        this.data = pagedData && pagedData.data || new Array<T>();
    }
}
