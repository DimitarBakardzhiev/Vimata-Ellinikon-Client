import { CreateExerciseBase } from "./create-exercise-base";

export class CreateSpeakingExercise extends CreateExerciseBase {
    constructor(public description: string,
        public content: string,
        public correctAnswer: string,
        public lessonId: number,
        public isHearingExercise: boolean) {

            super(description, content, correctAnswer, lessonId, isHearingExercise);
        }
}
