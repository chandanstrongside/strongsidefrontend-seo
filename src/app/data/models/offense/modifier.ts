interface IModifier {
    id: string;
    name: string;
    tagNames: [];
    modifierRules: [];
    formationStackRules: [];
    isArchive: boolean;
    inverseReferenceName: string;
    isFavorite: boolean;
    favoriteStatus: string;
    daysCount: string;
    modifiedUser: string;
    dislike: boolean;
    relatedFormations: any[];
    isAccountData: boolean;
    modifierFootballMinds: ModifierFootballMind[];
}
export class Modifier implements IModifier {
    id: string;
    name: string;
    tagNames: [];
    modifierRules: [];
    formationStackRules: [];
    isArchive: boolean;
    inverseReferenceName: string;
    isFavorite: boolean;
    favoriteStatus: string;
    daysCount: string;
    modifiedUser: string;
    dislike: boolean;
    relatedFormations: any[];
    isAccountData: boolean;
    modifierFootballMinds: ModifierFootballMind[];
    constructor(modifier?: IModifier) {
        this.id = modifier && modifier.id || "";
        this.name = modifier && modifier.name || "";
        this.tagNames = modifier && modifier.tagNames || [];
        this.modifierRules = modifier && modifier.modifierRules || [];
        this.formationStackRules = modifier && modifier.formationStackRules || [];
        this.isArchive = modifier && modifier.isArchive || false;
        this.inverseReferenceName = modifier && modifier.inverseReferenceName || "";
        this.isFavorite = modifier && modifier.isFavorite || false;
        this.favoriteStatus = modifier && modifier.favoriteStatus || '';
        this.daysCount = modifier && modifier.daysCount || '';
        this.modifiedUser = modifier && modifier.modifiedUser || '';
        this.dislike = modifier && modifier.dislike || false;
        this.relatedFormations = modifier && modifier.relatedFormations || [];
        this.isAccountData = modifier && modifier.isAccountData || false;
        this.modifierFootballMinds = modifier && modifier.modifierFootballMinds || [];
    }
}
export class ModifierFootballMind {
    id?: string;
    modifierId?: string;
    footballMindId?: string;
    FootballMindName?: string;
}
