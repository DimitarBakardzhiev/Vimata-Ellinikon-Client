import { LessonTitles } from "./lesson-titles";

export class LessonTitleLessonRouteMapping {
    // key - title; value - route
    static readonly Routes: any = new Map([
        [LessonTitles.Alphabet, 'азбука'],
        [LessonTitles.Reading, 'четене'],
        [LessonTitles.VerbToBe, 'съм'],
        [LessonTitles.Greetings, 'поздрави'],
        [LessonTitles.Numbers, 'числа'],
        [LessonTitles.Expressions, 'изрази'],
        [LessonTitles.Reading2, 'четене-2'],
        [LessonTitles.Verbs1, 'спрежение-1'],
        [LessonTitles.GenderAndArticles, 'родове'],
        [LessonTitles.Accusative, 'винителен-падеж'],
        [LessonTitles.Verbs2, 'спрежение-2'],
        [LessonTitles.Negation, 'отрицание'],
        [LessonTitles.Genitive, 'притежание'],
        [LessonTitles.Clock, 'часовник'],
        [LessonTitles.VerbExceptions, 'глаголи-изключения'],
        [LessonTitles.Shopping, 'на-пазар'],
        [LessonTitles.Plural, 'множествено-число'],
        [LessonTitles.Adjectives, 'прилагателни'],
    ]);


}
