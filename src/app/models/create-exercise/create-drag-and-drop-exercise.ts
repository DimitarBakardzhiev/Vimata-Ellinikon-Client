import { CreateExerciseBase } from "./create-exercise-base";

export class CreateDragAndDropExercise extends CreateExerciseBase {
    constructor(public description: string,
        public content: string,
        public correctAnswer: string,
        public options: string[],
        public lesson: string,
        public textToSpeechContent: boolean,
        public textToSpeechOptions: boolean,
        public isHearingExercise: boolean) {
            
            super(description, content, correctAnswer, lesson, isHearingExercise);
        }
}
