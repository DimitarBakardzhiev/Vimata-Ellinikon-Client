export class DragAndDropExercise {
    constructor(
        public id: number,
        public description: string, 
        public content: string, 
        public options: string[],
        public textToSpeechContent: boolean,
        public textToSpeechOptions: boolean,
        public isHearingExercise: boolean,
        public correctAnswer: string) {}
}
