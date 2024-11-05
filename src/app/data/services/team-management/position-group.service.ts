import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PositionGroup } from '../../models/team-management/index';

@Injectable({
  providedIn: 'root'
})
export class PositionGroupService {

  constructor(
    private http: HttpClient,
  ) { }

  all(): Observable<PositionGroup[]> {
    return this.http.get<PositionGroup[]>('all-position-groups');
  }
  allCoachpositionGroup(): Observable<any[]> {
    return this.http.get<any[]>('positionGroup-all');
  }
  get(id: string) {
    return this.http.get<PositionGroup>('positionGroup-get?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('positionGroup-search', param, httpOptions);
  }
  add(positionGroup: PositionGroup) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('positionGroup-save', positionGroup, httpOptions);
  }
  edit(positionGroup: PositionGroup) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('positionGroup-update', positionGroup, httpOptions);
  }
  delete(id: string) {
    return this.http.delete('positionGroup-delete?Id=' + id).pipe(map(resp => resp));
  }
  allAdmin(): Observable<PositionGroup[]> {
    return this.http.get<PositionGroup[]>('positionGroup-all-admin');
  }
  getQuestion(id: string, playerId?: string) {
    return this.http.get<any[]>('positionGroup-question?id=' + id + '&playerId=' + playerId).pipe(map(resp => resp));
  };
}
