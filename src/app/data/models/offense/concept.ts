import { AssignmentDetails } from "./OffensePlay";

interface IConcept {
    id: string;
    conceptName: string;
    conceptType: string;
    playerLines: [];
    conceptShapes: [];
    isArchive: boolean;
    isFavorite: boolean;
    favoriteStatus: string;
    captureImg: string;
    isDesktopUpload: boolean;
    isAutoGenarated: boolean;
    daysCount: string;
    modifiedUser: string;
    conceptImages: ConceptImages[];
    conceptVideos: ConceptImages[];
    assignmentDetails: AssignmentDetails[];
    dislike: boolean;
    defaultFileSeq: string;
    thumbnailSeq: string;
    plays: any[];
    hash: any;
    isDefaultFileVideo: boolean;
    isAccountData: boolean;
    onlyShowUpdatable: boolean;
    //conceptFootballMinds: ConceptFootballMind[];
}
export class Concept implements IConcept {
    id: string;
    conceptName: string;
    conceptType: string;
    playerLines: [];
    conceptShapes: [];
    isArchive: boolean;
    isFavorite: boolean;
    favoriteStatus: string;
    captureImg: string;
    isDesktopUpload: boolean;
    isAutoGenarated: boolean;
    daysCount: string;
    modifiedUser: string;
    conceptImages: ConceptImages[];
    conceptVideos: ConceptImages[];
    assignmentDetails: AssignmentDetails[];
    dislike: boolean;
    defaultFileSeq: string;
    thumbnailSeq: string;
    plays: any[];
    hash: any;
    fileSeq?: string;
    isDefaultFileVideo: boolean;
    isAccountData: boolean;
    onlyShowUpdatable: boolean;
    conceptFootballMinds?: ConceptFootballMind[];
    isVideo?: boolean;
    thumbnailUrl?: string;
    fileUrl?: string;
    gifFile?: string;
    constructor(concept?: IConcept) {
        this.id = concept && concept.id || "";
        this.conceptName = concept && concept.conceptName || "";
        this.conceptType = concept && concept.conceptType || "";
        this.playerLines = concept && concept.playerLines || [];
        this.conceptShapes = concept && concept.conceptShapes || [];
        this.isArchive = concept && concept.isArchive || false;
        this.isFavorite = concept && concept.isFavorite || false;
        this.favoriteStatus = concept && concept.favoriteStatus || '';
        this.captureImg = concept && concept.captureImg || '';
        this.isDesktopUpload = concept && concept.isDesktopUpload || false;
        this.isAutoGenarated = concept && concept.isAutoGenarated || false;
        this.daysCount = concept && concept.daysCount || '';
        this.modifiedUser = concept && concept.modifiedUser || '';
        this.conceptImages = concept && concept.conceptImages || [];
        this.conceptVideos = concept && concept.conceptVideos || [];
        this.assignmentDetails = concept && concept.assignmentDetails || [];
        this.dislike = concept && concept.dislike || false;
        this.defaultFileSeq = concept && concept.defaultFileSeq || "";
        this.thumbnailSeq = concept && concept.thumbnailSeq || "";
        this.plays = concept && concept.plays || [];
        this.hash = concept && concept.hash || {};
        this.isDefaultFileVideo = concept && concept.isDefaultFileVideo || false;
        this.isAccountData = concept && concept.isAccountData || false;
        this.onlyShowUpdatable = concept && concept.onlyShowUpdatable || false;
        //this.conceptFootballMinds = concept && concept.conceptFootballMinds || [];
    }
}

export class ConceptImages {
    id?: string;
    isDesktopUpload?: boolean;
    isAutoGenarated?: boolean;
    isDefault?: boolean;
    fileSeq?: string;
    fileName?: string;
    fileUrl?: string;
    thumbnailSeq?: string;
    thumbnailUrl?: string;
    isVideo?: boolean;
    isWebUpload?: boolean;
    isAzureUpload?: boolean;
}

export class ConceptFootballMind {
    id?: string;
    conceptId?: string;
    footballMindId?: string;
    footballMindName?: string;
    videoLink?: any;
    videoFilterLink?: any;
}