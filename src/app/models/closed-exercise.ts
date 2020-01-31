import { ClosedExerciseOption } from "./closed-exercise-option";

export class ClosedExercise {
    constructor(
        public description: string, 
        public content: string, 
        public options: ClosedExerciseOption[],
        public correctAnswer: string,
        public isGreekContent: boolean,
        public areOptionsInGreek: boolean,
        public isHearingExercise: boolean) {}
}
