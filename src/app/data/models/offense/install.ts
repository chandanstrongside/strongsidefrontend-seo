interface IInstall{
    id: string;
    name: string;
    description: string;
    isArchive:boolean;
    isFavorite: boolean;
    favoriteStatus: string;
}
export class Install implements IInstall{
    id: string;
    name: string;
    description: string;
    isArchive:boolean;
    isFavorite: boolean;
    favoriteStatus: string;
    constructor(install?: IInstall){
        this.id = install && install.id || "";
        this.name = install && install.name || "";
        this.description = install && install.description || "";
        this.isArchive = install && install.isArchive || false;
        this.isFavorite = install && install.isFavorite || false;
        this.favoriteStatus = install && install.favoriteStatus || "";
    }
}

// Quize modal
interface IQuizee {
    id: string;
    quizName: string;
    questions: Questionss[]
    conceptID:string;
    playID:string;
    formationID:string;
    formationStackID:string;
}
export class Quizee implements IQuizee {
    id: string;
    quizName: string;
    questions: Questionss[]
    conceptID:string;
    playID:string;
    formationID:string;
    formationStackID:string;
    constructor(quize?: IQuizee) {
        this.id = quize && quize.id || "";
        this.quizName = quize && quize.quizName || "";
        this.questions = quize && quize.questions || [];
        this.conceptID = quize && quize.conceptID || "";
        this.playID = quize && quize.playID || "";
        this.formationID = quize && quize.formationID || "";
        this.formationStackID = quize && quize.formationStackID || "";
    }
}

interface IQuestionss {
    id: string;
    question: string;
    questionType: string;
    position: number;
    options: Optionss[]
}
export class Questionss implements IQuestionss {
    id: string;
    question: string;
    questionType: string;
    position: number;
    options: Optionss[]
    constructor(question?: IQuestionss) {
        this.id = question && question.id || "";
        this.question = question && question.question || "";
        this.questionType = question && question.questionType || "";
        this.position = question && question.position || 0;
        this.options = question && question.options || [];
    }
}

interface IOptionss {
    id: string;
    position: number;
    optionText: string;
    answertText: string;
    isAnswer: boolean
}
export class Optionss implements IOptionss {
    id: string;
    position: number;
    optionText: string;
    answertText: string;
    isAnswer: boolean
    constructor(options?: IOptionss) {
        this.id = options && options.id || "";
        this.position = options && options.position || 0;
        this.optionText = options && options.optionText || "";
        this.answertText = options && options.answertText || "";
        this.isAnswer = options && options.isAnswer || false;
    }
}

