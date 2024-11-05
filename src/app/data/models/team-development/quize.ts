interface IQuize {
    id: string;
    quizName: string;
    fileName: string;
    fileType: string;
    totalQuestion: number;
    participant: number;
    filmId: string,
    playListId: string,
    playListVideoId: string,
    playListVideoName: string,
    playListName: string,
    questions: Questions[]
    isPlayer: boolean;
    fileTypeDesc: string;
    formationStackId: string;
    formationId: string;
    conceptId: string;
    playId: string;
    formationStackName: string;
    formationName: string;
    conceptName: string;
    playName: string;
    quizFileUrl: string;
    isFileVideo: boolean;
    quizImages: QuizFiles[];
    quizVideos: QuizFiles[];
}
export class Quize implements IQuize {
    id: string;
    quizName: string;
    fileName: string;
    fileType: string;
    totalQuestion: number;
    participant: number;
    filmId: string;
    playListId: string;
    playListVideoId: string;
    playListVideoName: string;
    playListName: string;
    questions: Questions[]
    isPlayer: boolean;
    fileTypeDesc: string;
    formationStackId: string;
    formationId: string;
    conceptId: string;
    playId: string;
    formationStackName: string;
    formationName: string;
    conceptName: string;
    playName: string;
    quizFileUrl: string;
    isFileVideo: boolean;
    quizImages: QuizFiles[];
    quizVideos: QuizFiles[];
    constructor(quize?: IQuize) {
        this.id = quize && quize.id || "";
        this.quizName = quize && quize.quizName || "";
        this.fileName = quize && quize.fileName || "";
        this.fileType = quize && quize.fileType || "";
        this.totalQuestion = quize && quize.totalQuestion || 0;
        this.participant = quize && quize.participant || 0;
        this.filmId = quize && quize.filmId || "";
        this.playListId = quize && quize.playListId || "";
        this.playListVideoId = quize && quize.playListVideoId || "";
        this.playListVideoName = quize && quize.playListVideoName || "";
        this.playListName = quize && quize.playListName || "";
        this.questions = quize && quize.questions || [];
        this.isPlayer = quize && quize.isPlayer || false;
        this.fileTypeDesc = quize && quize.fileTypeDesc || '';
        this.formationStackId = quize && quize.formationStackId || '';
        this.formationId = quize && quize.formationId || '';
        this.conceptId = quize && quize.conceptId || '';
        this.playId = quize && quize.playId || '';
        this.formationStackName = quize && quize.formationStackName || '';
        this.formationName = quize && quize.formationName || '';
        this.conceptName = quize && quize.conceptName || '';
        this.playName = quize && quize.playName || '';
        this.quizFileUrl = quize && quize.quizFileUrl || '';
        this.isFileVideo = quize && quize.isFileVideo || false;
        this.quizImages = quize && quize.quizImages || [];
        this.quizVideos = quize && quize.quizVideos || [];
    }
}

interface IQuestions {
    id: string;
    question: string;
    questionType: string;
    position: number;
    options: Options[]
}
export class Questions implements IQuestions {
    id: string;
    question: string;
    questionType: string;
    position: number;
    options: Options[]
    constructor(question?: IQuestions) {
        this.id = question && question.id || "";
        this.question = question && question.question || "";
        this.questionType = question && question.questionType || "";
        this.position = question && question.position || 0;
        this.options = question && question.options || [];
    }
}

interface IOptions {
    id: string;
    position: number;
    optionText: string;
    answertText: string;
    isAnswer: boolean
}
export class Options implements IOptions {
    id: string;
    position: number;
    optionText: string;
    answertText: string;
    isAnswer: boolean
    constructor(options?: IOptions) {
        this.id = options && options.id || "";
        this.position = options && options.position || 0;
        this.optionText = options && options.optionText || "";
        this.answertText = options && options.answertText || "";
        this.isAnswer = options && options.isAnswer || false;
    }
}

interface IQuizeparticipants {
    id: string;
    Name: string;
    Email: string;
    jersey: string;
    flimType: string;
    totalQuestion: number;
    totalrAnswer: number;
}
export class Quizeparticipants implements IQuizeparticipants {
    id: string;
    Name: string;
    Email: string;
    jersey: string;
    flimType: string;
    totalQuestion: number;
    totalrAnswer: number;
    constructor(Quizeparticipants?: IQuizeparticipants) {
        this.id = Quizeparticipants && Quizeparticipants.id || "";
        this.Name = Quizeparticipants && Quizeparticipants.Name || "";
        this.Email = Quizeparticipants && Quizeparticipants.Email || "";
        this.jersey = Quizeparticipants && Quizeparticipants.jersey || "";
        this.flimType = Quizeparticipants && Quizeparticipants.flimType || "";
        this.totalQuestion = Quizeparticipants && Quizeparticipants.totalQuestion || 0;
        this.totalrAnswer = Quizeparticipants && Quizeparticipants.totalrAnswer || 0;
    }
}

interface IQuizFiles {
    id: string;
    fileUrl: string;
}
export class QuizFiles implements IQuizFiles {
    id: string;
    fileUrl: string;
    constructor(file?: IQuizFiles) {
        this.id = file && file.id || "";
        this.fileUrl = file && file.fileUrl || "";
    }
}

interface IQuizPlaybook {
    playbookId: string;
    playbookName: string;
    fileUrl: string;
    thumbnailUrl: string;
    isVideo: string;
    isPlay: boolean;
}
export class QuizPlaybook implements IQuizPlaybook {
    playbookId: string;
    playbookName: string;
    fileUrl: string;
    thumbnailUrl: string;
    isVideo: string;
    isPlay: boolean;
    constructor(quizPlaybook?: IQuizPlaybook) {
        this.playbookId = quizPlaybook && quizPlaybook.playbookId || "";
        this.playbookName = quizPlaybook && quizPlaybook.playbookName || "";
        this.fileUrl = quizPlaybook && quizPlaybook.fileUrl || "";
        this.thumbnailUrl = quizPlaybook && quizPlaybook.thumbnailUrl || "";
        this.isVideo = quizPlaybook && quizPlaybook.isVideo || "";
        this.isPlay = quizPlaybook && quizPlaybook.isPlay || true;
    }
}

