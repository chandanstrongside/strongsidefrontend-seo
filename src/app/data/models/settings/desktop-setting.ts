interface IDesktopSetting{
    id: string;
    audioOn: boolean;
    audioTooltip: string;
    userId: string;
    lineSplits: number;
}
export class DesktopSetting implements IDesktopSetting{
    id: string;
    audioOn: boolean;
    audioTooltip: string;
    userId: string;
    lineSplits: number;
    constructor(desktopSetting?: IDesktopSetting){
        this.id = desktopSetting && desktopSetting.id || '00000000-0000-0000-0000-000000000000';
        this.audioOn = desktopSetting && desktopSetting.audioOn || false;
        this.audioTooltip = desktopSetting && desktopSetting.audioTooltip || "";
        this.userId = desktopSetting && desktopSetting.userId || "";
        this.lineSplits = desktopSetting && desktopSetting.lineSplits || 0;
    }
}

