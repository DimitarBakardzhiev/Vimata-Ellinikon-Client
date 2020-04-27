import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateClosedExercise } from '../models/create-exercise/create-closed-exercise';
import { CreateOpenExercise } from '../models/create-exercise/create-open-exercise';
import { CreateDragAndDropExercise } from '../models/create-exercise/create-drag-and-drop-exercise';
import { CreateSpeakingExercise } from '../models/create-exercise/create-speaking-exercise';

@Injectable({
  providedIn: 'root'
})
export class ExericiseService {

  private readonly PORT = '5001';
  private readonly HOST = 'https://localhost';
  private readonly URL = `${this.HOST}:${this.PORT}`;

  constructor(private http: HttpClient) { }

  getAllLessons() : Observable<any> {
    return this.http.get(`${this.URL}/api/lessons/getLessons`);
  }

  createClosedExercise(exercise: CreateClosedExercise) : Observable<any> {
    return this.http.post(`${this.URL}/api/exercises/createClosedExercise`, exercise);
  }

  createOpenExercise(exercise: CreateOpenExercise) : Observable<any> {
    return this.http.post(`${this.URL}/api/exercises/createOpenExercise`, exercise);
  }

  createDragAndDropExercise(exercise: CreateDragAndDropExercise) : Observable<any> {
    return this.http.post(`${this.URL}/api/exercises/createDragAndDropExercise`, exercise);
  }

  createSpeakingExercise(exercise: CreateSpeakingExercise) : Observable<any> {
    return this.http.post(`${this.URL}/api/exercises/createSpeakingExercise`, exercise);
  }

  getClosedExercises(lesson: string) : Observable<any> {
    return this.http.get(`${this.URL}/api/exercises/getClosedExercises/${lesson}`);
  }

  getOpenExercises(lesson: string) : Observable<any> {
    return this.http.get(`${this.URL}/api/exercises/getOpenExercises/${lesson}`);
  }

  getDragAndDropExercises(lesson: string) : Observable<any> {
    return this.http.get(`${this.URL}/api/exercises/getDragAndDropExercises/${lesson}`);
  }

  getSpeakingExercises(lesson: string) : Observable<any> {
    return this.http.get(`${this.URL}/api/exercises/getSpeakingExercises/${lesson}`);
  }

  checkOpenExercise(answer: { exerciseId: number, answer: string }) : Observable<any> {
    return this.http.post(`${this.URL}/api/exercises/checkOpenExercise`, answer);
  }
  
  checkDragAndDropExercise(answer: { exerciseId: number, answer: string }) : Observable<any> {
    return this.http.post(`${this.URL}/api/exercises/checkDragAndDropExercise`, answer);
  }
  
  checkSpeakingExercise(answer: { exerciseId: number, answer: string }) : Observable<any> {
    return this.http.post(`${this.URL}/api/exercises/checkSpeakingExercise`, answer);
  }
  
  checkClosedExercise(answer: { exerciseId: number, answer: string }) : Observable<any> {
    return this.http.post(`${this.URL}/api/exercises/checkClosedExercise`, answer);
  }
}
