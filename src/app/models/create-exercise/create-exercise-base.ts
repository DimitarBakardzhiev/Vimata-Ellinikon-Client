import { isNullOrUndefined } from "util";

export abstract class CreateExerciseBase {
    constructor(public description: string,
        public content: string,
        public correctAnswer: string,
        public lessonId: number,
        public isHearingExercise: boolean) {}

        isDescriptionValid() : boolean {
            return !isNullOrUndefined(this.description) && this.description.length >= 4;
        }

        isContentValid() : boolean {
            return !isNullOrUndefined(this.content) && this.content.length >= 4;
        }

        isLessonValid() : boolean {
            return this.lessonId > 0;
        }

        isCorrectAnswerValid() : boolean {
            return !isNullOrUndefined(this.correctAnswer) && this.correctAnswer.length >= 1;
        }
}
