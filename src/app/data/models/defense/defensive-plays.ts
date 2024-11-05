import { PlaysImages } from "../offense/OffensePlay";

interface IDefensivePlay {
    id: string;
    name: string;
    isArchive: boolean;
    playsImages: PlaysImages[];
    playsVideos: PlaysImages[];
    isFavorite: boolean;
    favoriteStatus: string;
}
export class DefensivePlay implements IDefensivePlay {
    id: string;
    name: string;
    isArchive: boolean;
    playsImages: PlaysImages[];
    playsVideos: PlaysImages[];
    isFavorite: boolean;
    favoriteStatus: string;
    fileUrl?: string;
    isDesktopUpload?: boolean;
    isAutoGenarated?: boolean;
    daysCount?: string;
    modifiedUser?: string;
    isDefaultFileVideo?: boolean;
    fileSeq?: string;
    thumbnailSeq?: string;
    isVideo?: boolean;
    gifFile?: string;
    constructor(defensivePlay?: IDefensivePlay) {
        this.id = defensivePlay && defensivePlay.id || '';
        this.name = defensivePlay && defensivePlay.name || '';
        this.isArchive = defensivePlay && defensivePlay.isArchive || false;
        this.playsImages = defensivePlay && defensivePlay.playsImages || [];
        this.playsVideos = defensivePlay && defensivePlay.playsVideos || [];
        this.isFavorite = defensivePlay && defensivePlay.isFavorite || false;
        this.favoriteStatus = defensivePlay && defensivePlay.favoriteStatus || '';
    }
}