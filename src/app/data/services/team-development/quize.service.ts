import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quize } from 'src/app/data/models/team-development'

@Injectable({
  providedIn: 'root'
})
export class QuizeService {

  constructor(
    private http: HttpClient,
  ) { }
  all(): Observable<Quize[]> {
    return this.http.get<Quize[]>('quizes');
  }
  get(id: string) {
    return this.http.get<Quize>('quizes-get?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('quizes-search', param, httpOptions);
  }
  add(quize: Quize) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('quizes-save', quize, httpOptions);
  }
  update(quize: Quize) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('quizes-update', quize, httpOptions);
  }
  delete(id: string) {
    return this.http.delete('quizes-delete?Id=' + id).pipe(map(resp => resp));
  }

  getQuiz(id: string) {
    return this.http.get<any>('quizes-get-for-participant?Id=' + id).pipe(map(resp => resp));
  }
  savePlayerQuiz(data: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('quizes-save-participant', data, httpOptions);
  }
  searchAllParticipant(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('quizes-search-all-participant', param, httpOptions);
  }
  getQuizPlayerResult(id: string, participantId: string) {
    return this.http.get<any>('quizes-get-player-result?Id=' + id + '&participantId=' + participantId).pipe(map(resp => resp));
  }
  uploadMedia(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('quizes-media-upload', formData, httpOptions);
  };

  deleteMedia(mediaId: string) {
    return this.http.delete<any>('quizes-media-delete?id=' + mediaId).pipe(map(resp => resp));
  };
}