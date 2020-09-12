import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private readonly PORT = '5001';
  private readonly HOST = 'https://localhost';
  private readonly URL = `${this.HOST}:${this.PORT}`;

  constructor(private http: HttpClient) { }

  getMedals() : Observable<any> {
    return this.http.get(`${this.URL}/api/lessons/getMedals`);
  }
}
