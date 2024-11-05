interface IOffensePlay {
    id: string;
    name: string;
    baseFormationName: string;
    formationName: string;
    conceptName: string;
    conceptType: string;
    isArchive: boolean;
    isFavorite: boolean;
    favoriteStatus: string;
    svgFileName: string;
    isDesktopUpload: boolean;
    isAutoGenarated: boolean;
    daysCount: string;
    modifiedUser: string;
    playsImages: PlaysImages[];
    players: [];
    playsVideos: PlaysImages[];
    assignmentDetail: AssignmentDetails[];
    playsRelated: any[];

    baseFormationId: string;
    conceptId: string;
    formationId: string;
    formationSetId: string;
    formationSetName: string;
    tagNames: [];
    dislike: boolean;
    defaultFileSeq: string;
    thumbnailSeq: string;
    hash: any;
    isDefaultFileVideo: boolean;
    isAccountData: boolean;
    playFootballMinds: OffensivePlayFootballMind[];
}
export class OffensePlay implements IOffensePlay {
    id: string;
    name: string;
    baseFormationName: string;
    formationName: string;
    conceptName: string;
    conceptType: string;
    isArchive: boolean;
    isFavorite: boolean;
    favoriteStatus: string;
    svgFileName: string;
    isDesktopUpload: boolean;
    isAutoGenarated: boolean;
    daysCount: string;
    modifiedUser: string;
    playsImages: PlaysImages[];
    players: [];
    playsVideos: PlaysImages[];
    assignmentDetail: AssignmentDetails[];
    playsRelated: any[];

    baseFormationId: string;
    conceptId: string;
    formationId: string;
    formationSetId: string;
    formationSetName: string;
    tagNames: [];
    dislike: boolean;
    defaultFileSeq: string;
    thumbnailSeq: string;
    hash: any;
    fileSeq?: string;
    isDefaultFileVideo: boolean;
    isAccountData: boolean;
    onlyShowUpdatable?: boolean;
    playFootballMinds: OffensivePlayFootballMind[];
    isVideo?: boolean;
    thumbnailUrl?: string;
    fileUrl?: string;
    gifFile?: string;
    constructor(play?: IOffensePlay) {
        this.id = play && play.id || "";
        this.name = play && play.name || "";
        this.baseFormationName = play && play.baseFormationName || "";
        this.formationName = play && play.formationName || "";
        this.conceptName = play && play.conceptName || "";
        this.conceptType = play && play.conceptType || "";
        this.isArchive = play && play.isArchive || false;
        this.isFavorite = play && play.isFavorite || false;
        this.favoriteStatus = play && play.favoriteStatus || '';
        this.svgFileName = play && play.svgFileName || '';
        this.isDesktopUpload = play && play.isDesktopUpload || false;
        this.isAutoGenarated = play && play.isAutoGenarated || false;
        this.daysCount = play && play.daysCount || '';
        this.modifiedUser = play && play.modifiedUser || '';
        this.playsImages = play && play.playsImages || [];
        this.players = play && play.players || [];
        this.playsVideos = play && play.playsVideos || [];
        this.assignmentDetail = play && play.assignmentDetail || [];
        this.playsRelated = play && play.playsRelated || [];

        this.baseFormationId = play && play.baseFormationId || '';
        this.conceptId = play && play.conceptId || '';
        this.formationId = play && play.formationId || '';
        this.formationSetId = play && play.formationSetId || '';
        this.formationSetName = play && play.formationSetName || '';
        this.tagNames = play && play.tagNames || [];
        this.dislike = play && play.dislike || false;
        this.defaultFileSeq = play && play.defaultFileSeq || "";
        this.thumbnailSeq = play && play.thumbnailSeq || "";
        this.hash = play && play.hash || {};
        this.isDefaultFileVideo = play && play.isDefaultFileVideo || false;
        this.isAccountData = play && play.isAccountData || false;
        this.playFootballMinds = play && play.playFootballMinds || [];
    }
}

export class PlaysImages {
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
    isWebUpload?: boolean;
    isAzureUpload?: boolean;
}
export class AssignmentDetails {
    id?: string;
    position?: string;
    assignmentInfo?: string;
    sequence?: number;
}

export class OffensivePlayFootballMind {
    id?: string;
    playId?: string;
    footballMindId?: string;
    footballMindName?: string;
    videoLink?: any;
    videoFilterLink?: any;
}
