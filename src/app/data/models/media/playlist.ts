interface IPlaylist {
    id: string;
    name: string;
}

export class Playlist implements IPlaylist {
    id: string;
    name: string;
    constructor(playlist?: IPlaylist) {
        this.id = playlist && playlist.id || "";
        this.name = playlist && playlist.name || "";
    }
}
