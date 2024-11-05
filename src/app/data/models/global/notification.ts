interface INotification {
    notifications: [];
    count: number;
}
export class Notification implements INotification {
    notifications: [];
    count: number;
    constructor(notification?: INotification) {
        this.notifications = notification && notification.notifications || [];
        this.count = notification && notification.count || 0;
    }
}