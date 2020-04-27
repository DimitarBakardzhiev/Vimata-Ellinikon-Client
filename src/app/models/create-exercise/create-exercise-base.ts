import { isNullOrUndefined } from "util";

export abstract class CreateExerciseBase {
    constructor(public description: string,
        public content: string,
        public correctAnswer: string,
        public lesson: string,
        public isHearingExercise: boolean) {}

        isDescriptionValid() : boolean {
            return !isNullOrUndefined(this.description) && this.description.length >= 4;
        }

        isContentValid() : boolean {
            return !isNullOrUndefined(this.content) && this.content.length >= 4;
        }

        isLessonValid() : boolean {
            return !isNullOrUndefined(this.lesson) && this.lesson.length >= 4;
        }

        isCorrectAnswerValid() : boolean {
            return !isNullOrUndefined(this.correctAnswer) && this.correctAnswer.length >= 1;
        }
}
