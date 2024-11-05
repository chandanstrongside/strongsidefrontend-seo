//import { Menu } from "src/app/shared/services/nav.service";

interface ISessionUser {
    userName: string;
    tenant: string;
    token: string;
    menus: Menu[];
    userType: string;
    accountName: string;
    isPackagePaid: boolean;
    isDemoAccount: boolean;
}

export class SessionUser implements ISessionUser {
    public userName: string;
    public tenant: string;
    public token: string;
    public menus: Menu[];
    public userType: string;
    accountName: string;
    isPackagePaid: boolean;
    isDemoAccount: boolean;
    constructor(sessionUser?: ISessionUser) {
        this.userName = sessionUser && sessionUser.userName || '';
        this.tenant = sessionUser && sessionUser.tenant || '';
        this.token = sessionUser && sessionUser.token || '';
        this.menus = sessionUser && sessionUser.menus || [];
        this.userType = sessionUser && sessionUser.userType || "";
        this.accountName = sessionUser && sessionUser.accountName || "";
        this.isPackagePaid = sessionUser && sessionUser.isPackagePaid || false;
        this.isDemoAccount = sessionUser && sessionUser.isDemoAccount || false;
    }
}

export interface Menu {
    headTitle1?: string;
    headTitle2?: string;
    path?: string;
    title?: string;
    icon?: string;
    type?: string;
    badgeType?: string;
    badgeValue?: string;
    active?: boolean;
    bookmark?: boolean;
    children?: Menu[];
    frontendMenu?: boolean;
    viewAccess?: boolean;
    fullAccess?: boolean;
}

export class UserAccess {
    aceess?: boolean = false;
    view?: boolean = false;
    full?: boolean = false;
    userType?: string = '';
    userName?: string = '';
    isDemoAccount?: boolean = false;
}