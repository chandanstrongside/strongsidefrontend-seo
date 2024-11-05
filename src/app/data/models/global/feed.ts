interface IFeed {
    event: string;
    description: string;
    shortDescription: string;
    menuUrl: string;
    originRefId: string;
    activity: string;
}
export class Feed implements IFeed {
    event: string;
    description: string;
    shortDescription: string;
    menuUrl: string;
    originRefId: string;
    activity: string;
    constructor(feed?: IFeed) {
        this.event = feed && feed.event || '';
        this.description = feed && feed.description || '';
        this.shortDescription = feed && feed.shortDescription || '';
        this.menuUrl = feed && feed.menuUrl || '';
        this.originRefId = feed && feed.originRefId || '';
        this.activity = feed && feed.activity || '';
    }
}
