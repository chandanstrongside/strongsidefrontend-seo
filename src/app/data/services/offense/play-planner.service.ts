import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlayPlanner } from '../../models/offense/play-planner';

@Injectable({
  providedIn: 'root'
})
export class PlayPlannerService {

  constructor(
    private http: HttpClient
  ) { }
  getAll(): Observable<PlayPlanner[]> {
    return this.http.get<PlayPlanner[]>('game-planner-all');
  };
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('game-planner-search', param, httpOptions);
  };
  ModalTablesearch(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('game-planner-report', param, httpOptions);
  };
  get(id: string) {
    return this.http.get<PlayPlanner>('game-planner-get?id=' + id).pipe(map(resp => resp));
  };
  add(play: PlayPlanner) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('game-planner-save', play, httpOptions);
  };
  update(play: PlayPlanner) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('game-planner-update', play, httpOptions);
  };
  shareReport(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('game-planner-share-report', model, httpOptions);
  };
}
