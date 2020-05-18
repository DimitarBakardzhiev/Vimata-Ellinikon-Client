export class OpenExercise {
    constructor(
        public id: number,
        public description: string,
        public content: string,
        public textToSpeechContent: boolean,
        public isHearingExercise: boolean,
        public correctAnswer: string) {

    }
}
