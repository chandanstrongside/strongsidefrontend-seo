interface IFronts {
    id: string;
    name: string;
    playerPositions: [];
    isArchive: boolean;
    isFavorite: boolean;
    favoriteStatus: string;
    captureImg: string;
    personalGroupId: string;
    formationId: string;
}
export class Fronts implements IFronts {
    id: string;
    name: string;
    playerPositions: [];
    isArchive: boolean;
    isFavorite: boolean;
    favoriteStatus: string;
    captureImg: string;
    personalGroupId: string;
    isVideo?: boolean;
    formationId: string;
    gifFile?: string;
    constructor(fronts?: IFronts) {
        this.id = fronts && fronts.id || '';
        this.name = fronts && fronts.name || '';
        this.playerPositions = fronts && fronts.playerPositions || [];
        this.isArchive = fronts && fronts.isArchive || false;
        this.isFavorite = fronts && fronts.isFavorite || false;
        this.favoriteStatus = fronts && fronts.favoriteStatus || '';
        this.captureImg = fronts && fronts.captureImg || '';
        this.personalGroupId = fronts && fronts.personalGroupId || '';
        this.formationId = fronts && fronts.formationId || '';
    }
}

interface IDefenseFronts {
    id: string;
    name: string;
    personalGroupId: string;
    playerPositions: [];
}
export class DefenseFronts implements IDefenseFronts {
    id: string;
    name: string;
    personalGroupId: string;
    playerPositions: [];
    constructor(fronts?: IFronts) {
        this.id = fronts && fronts.id || '';
        this.name = fronts && fronts.name || '';
        this.personalGroupId = fronts && fronts.personalGroupId || '';
        this.playerPositions = fronts && fronts.playerPositions || [];
    }
}