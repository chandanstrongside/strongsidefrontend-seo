interface IFormationStack {
    id: string;
    formationSetName: string;
    baseFormationName: string;
    oppBaseFormationName: string;
    hasOpposite: boolean;
    baseFormationCapture: string;
    oppBaseFormationCapture: string;
    playerPositions: [];
    oppPlayerPositions: [];
    isArchive: boolean;
    isFavorite: boolean;
    favoriteStatus: string;
    isDesktopUpload: boolean;
    isAutoGenarated: boolean;
    daysCount: string;
    modifiedUser: string;
    formationSetImages: FormationSetImages[];
    formationSetVideos: FormationSetImages[];
    dislike: boolean;
    defaultFileSeq: string;
    thumbnailSeq: string;
    fileSeq?: string;
    isDefaultFileVideo: boolean;
    isAccountData: boolean;
    formationSetFootballMinds: FormationSetFootballMind[];
}
export class FormationStack implements IFormationStack {
    id: string;
    formationSetName: string;
    baseFormationName: string;
    oppBaseFormationName: string;
    hasOpposite: boolean;
    baseFormationCapture: string;
    oppBaseFormationCapture: string;
    playerPositions: [];
    oppPlayerPositions: [];
    isArchive: boolean;
    isFavorite: boolean;
    favoriteStatus: string;
    isDesktopUpload: boolean;
    isAutoGenarated: boolean;
    daysCount: string;
    modifiedUser: string;
    formationSetImages: FormationSetImages[];
    formationSetVideos: FormationSetImages[];
    dislike: boolean;
    defaultFileSeq: string;
    thumbnailSeq: string;
    fileSeq?: string;
    isDefaultFileVideo: boolean;
    isAccountData: boolean;
    baseFormationId?: string;
    oppositeFormationId?: string;
    onlyShowUpdatable?: boolean;
    formationSetFootballMinds: FormationSetFootballMind[];
    navBaseFormationId?: string;
    navOppositeFormationId?: string;
    isVideo?: boolean;
    thumbnailUrl?: string;
    fileUrl?: string;
    visitors?: number;
    gifFile?: string;
    constructor(formationStack?: IFormationStack) {
        this.id = formationStack && formationStack.id || "";
        this.formationSetName = formationStack && formationStack.formationSetName || "";
        this.baseFormationName = formationStack && formationStack.baseFormationName || "";
        this.oppBaseFormationName = formationStack && formationStack.oppBaseFormationName || "";
        this.hasOpposite = formationStack && formationStack.hasOpposite || false;
        this.baseFormationCapture = formationStack && formationStack.baseFormationCapture || "";
        this.oppBaseFormationCapture = formationStack && formationStack.oppBaseFormationCapture || "";
        this.playerPositions = formationStack && formationStack.playerPositions || [];
        this.oppPlayerPositions = formationStack && formationStack.oppPlayerPositions || [];
        this.isArchive = formationStack && formationStack.isArchive || false;
        this.isFavorite = formationStack && formationStack.isFavorite || false;
        this.favoriteStatus = formationStack && formationStack.favoriteStatus || '';
        this.isDesktopUpload = formationStack && formationStack.isDesktopUpload || false;
        this.isAutoGenarated = formationStack && formationStack.isAutoGenarated || false;
        this.daysCount = formationStack && formationStack.daysCount || '';
        this.modifiedUser = formationStack && formationStack.modifiedUser || '';
        this.formationSetImages = formationStack && formationStack.formationSetImages || [];
        this.formationSetVideos = formationStack && formationStack.formationSetVideos || [];
        this.dislike = formationStack && formationStack.dislike || false;
        this.defaultFileSeq = formationStack && formationStack.defaultFileSeq || "";
        this.thumbnailSeq = formationStack && formationStack.thumbnailSeq || "";
        this.fileSeq = formationStack && formationStack.fileSeq || "";
        this.isDefaultFileVideo = formationStack && formationStack.isDefaultFileVideo || false;
        this.isAccountData = formationStack && formationStack.isAccountData || false;
        this.formationSetFootballMinds = formationStack && formationStack.formationSetFootballMinds || [];
    }
}

export class FormationSetImages {
    id?: string;
    isDesktopUpload?: boolean;
    isAutoGenarated?: boolean;
    isDefault?: boolean;
    fileSeq?: string;
    fileName?: string;
    fileUrl?: string;
    thumbnailUrl?: string;
    thumbnailSeq?: string;
    isVideo?: boolean;
}

export class BaseFormation {
    id?: string;
    name?: string;
}

export class FormationSetFootballMind {
    id?: string;
    formationSetId?: string;
    footballMindId?: string;
    FootballMindName?: string;
    videoLink?: any;
    videoFilterLink?: any;
}