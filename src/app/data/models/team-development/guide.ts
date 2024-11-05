interface IGuide {
    id: string;
    name: string;
    remarks: string;
    isDelete: boolean;
    isPlayer: boolean;
    guideDetails: GuideDetails[];
    tagNames: [];
}
export class Guide implements IGuide {
    id: string;
    name: string;
    remarks: string;
    isDelete: boolean;
    isPlayer: boolean;
    guideDetails: GuideDetails[];
    tagNames: [];
    constructor(guide?: IGuide) {
        this.id = guide && guide.id || "";
        this.name = guide && guide.name || "";
        this.remarks = guide && guide.remarks || "";
        this.isDelete = guide && guide.isDelete || false;
        this.isPlayer = guide && guide.isPlayer || false;
        this.guideDetails = guide && guide.guideDetails || [];
        this.tagNames = guide && guide.tagNames || [];
    }
}

interface IGuideDetails {
    id: string;
    quizId: string;
    quizName: string;
    position: number;
}
export class GuideDetails implements IGuideDetails {
    id: string;
    quizId: string;
    quizName: string;
    position: number;
    constructor(guideDetails?: IGuideDetails) {
        this.id = guideDetails && guideDetails.id || "";
        this.quizId = guideDetails && guideDetails.quizId || "";
        this.quizName = guideDetails && guideDetails.quizName || "";
        this.position = guideDetails && guideDetails.position || 0;
    }
}

interface IGuides {
    id: string;
    name: string;
    description: string;
    remarks: string;
    isPlayer: boolean;
}
export class Guides implements IGuides {
    id: string;
    name: string;
    description: string;
    remarks: string;
    isPlayer: boolean;
    constructor(guides?: IGuides) {
        this.id = guides && guides.id || "";
        this.name = guides && guides.name || "";
        this.description = guides && guides.description || "";
        this.remarks = guides && guides.remarks || "";
        this.isPlayer = guides && guides.isPlayer || false;
    }
}


interface IPlayerguide {
    id: string;
    Name: string;
    guideName: string;
    totalQuiz: number;
    totalComQuiz: number;
    quizDateTime: Date;
    Status: string;
}
export class Playerguide implements IPlayerguide {
    id: string;
    Name: string;
    guideName: string;
    totalQuiz: number;
    totalComQuiz: number;
    quizDateTime: Date;
    Status: string;
    constructor(playerguide?: IPlayerguide) {
        this.id = playerguide && playerguide.id || "";
        this.Name = playerguide && playerguide.Name || "";
        this.guideName = playerguide && playerguide.guideName || "";
        this.totalQuiz = playerguide && playerguide.totalQuiz || 0;
        this.totalComQuiz = playerguide && playerguide.totalComQuiz || 0;
        this.quizDateTime = playerguide && playerguide.quizDateTime || new Date();
        this.Status = playerguide && playerguide.Status || "";
    }
}