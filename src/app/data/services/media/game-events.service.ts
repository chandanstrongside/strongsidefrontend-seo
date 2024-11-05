import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameEventService {

  constructor(
    private http: HttpClient,
  ) { }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('game-event-search', param, httpOptions);
  }

  searchList(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('gameEvent-search', param, httpOptions);
  };

  get(id: string) {
    return this.http.get<any>('gameEvent-get?id=' + id).pipe(map(resp => resp));
  };

  save(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('gameEvent-save', model, httpOptions);
  };

  saveTeam(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('teams-save', formData, httpOptions);
  };

  getNextEvent() {
    return this.http.get<any>('gameEvent-next-event').pipe(map(resp => resp));
  };

  nextEventGet(id: string) {
    return this.http.get<any>('gameEvent-next-get?id=' + id).pipe(map(resp => resp));
  };

  saveScore(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('gameEvent-score-save', model, httpOptions);
  };

  getMarqueeData() {
    return this.http.get<any>('gameEvent-marquee-data').pipe(map(resp => resp));
  };

  getGameEventCategory() {
    return this.http.get<any>('gameEvent-category').pipe(map(resp => resp));
  };
}