interface IPlayScript {
    id: string;
    name: string;
    playName: string;
    playScriptOffenses: [];
}
export class PlayScript implements IPlayScript {
    id: string;
    name: string;
    playName: string;
    playScriptOffenses: [];
    constructor(playScript?: IPlayScript) {
        this.id = playScript && playScript.id || "";
        this.name = playScript && playScript.name || "";
        this.playName = playScript && playScript.playName || "";
        this.playScriptOffenses = playScript && playScript.playScriptOffenses || [];
    }
}

interface IPlayScriptDetail {
    id: string;
    name: string;
    playName: string;
    scriptDetails: [];
}
export class PlayScriptDetail implements IPlayScriptDetail {
    id: string;
    name: string;
    playName: string;
    scriptDetails: [];
    constructor(playScriptDetail?: IPlayScriptDetail) {
        this.id = playScriptDetail && playScriptDetail.id || "";
        this.name = playScriptDetail && playScriptDetail.name || "";
        this.playName = playScriptDetail && playScriptDetail.playName || "";
        this.scriptDetails = playScriptDetail && playScriptDetail.scriptDetails || [];
    }
}
