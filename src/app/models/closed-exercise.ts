export class ClosedExercise {
    constructor(
        public description: string, 
        public content: string, 
        public options: { content: string, isMarked: boolean }[],
        public correctAnswer: string,
        public isGreekContent: boolean,
        public areOptionsInGreek: boolean) {}
}
