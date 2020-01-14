import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicServiceService {

  constructor(private http: HttpClient) { }

  public createTopic(topic: FormData) {
    return this.http.post('https://localhost:5001/api/topics/create', topic);
  }

  public all() : Observable<any> {
    return this.http.get('https://localhost:5001/api/topics/all');
  }

  public details(id: number) : Observable<any> {
    return this.http.get(`https://localhost:5001/api/topics/details/${id}`);
  }
}
