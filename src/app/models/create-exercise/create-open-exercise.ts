import { CreateExerciseBase } from "./create-exercise-base";

export class CreateOpenExercise extends CreateExerciseBase {
    constructor(public description: string,
        public content: string,
        public correctAnswer: string,
        public lessonId: number,
        public textToSpeechContent: boolean,
        public isHearingExercise: boolean,
        public alternativeAnswers: string[]) {

            super(description, content, correctAnswer, lessonId, isHearingExercise);
        }

        areAlternativeAnswersValid() : boolean {
            for (const answer of this.alternativeAnswers) {
                if (answer.length < 1) {
                    return false;
                }
            }

            return true;
        }
}
