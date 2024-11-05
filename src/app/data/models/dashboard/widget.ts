interface IWidget {
    id: string;
    name: string;
    component: string;
    icon: string;
    color: string;
    defaultPosition: number;
    cardName: string;
    filterOptions: [];
}
export class Widget implements IWidget {
    id: string;
    name: string;
    component: string;
    icon: string;
    color: string;
    defaultPosition: number;
    cardName: string;
    filterOptions: [];
    constructor(widget?: IWidget) {
        this.id = widget && widget.id || '';
        this.name = widget && widget.name || '';
        this.component = widget && widget.component || '';
        this.icon = widget && widget.icon || '';
        this.color = widget && widget.color || '';
        this.defaultPosition = widget && widget.defaultPosition || 0;
        this.cardName = widget && widget.cardName || '';
        this.filterOptions = widget && widget.filterOptions || [];
    }
}