import { CreateExerciseBase } from "./create-exercise-base"

export class CreateClosedExercise extends CreateExerciseBase {
    constructor(public description: string,
        public content: string,
        public correctAnswer: string,
        public options: string[],
        public lessonId: number,
        public textToSpeechContent: boolean,
        public textToSpeechOptions: boolean,
        public isHearingExercise: boolean) {

            super(description, content, correctAnswer, lessonId, isHearingExercise);
        }
}
