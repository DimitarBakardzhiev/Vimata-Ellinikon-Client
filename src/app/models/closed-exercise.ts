import { ClosedExerciseOption } from "./closed-exercise-option";

export class ClosedExercise {
    constructor(
        public id: number,
        public description: string, 
        public content: string, 
        public options: ClosedExerciseOption[],
        public textToSpeechContent: boolean,
        public textToSpeechOptions: boolean,
        public isHearingExercise: boolean,
        public correctAnswer: string) {}
}
