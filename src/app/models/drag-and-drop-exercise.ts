export class DragAndDropExercise {
    constructor(
        public description: string, 
        public content: string, 
        public pieces: string[],
        public correctAnswer: string,
        public isGreekContent: boolean,
        public arePiecesInGreek: boolean
    ) {}
}
