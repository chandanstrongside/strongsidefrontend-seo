import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Position } from '../../models/team-management/index';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private http: HttpClient,
  ) { }

  all(): Observable<Position[]> {
    return this.http.get<Position[]>('position');
  }
  allPlayerposition(): Observable<any[]> {
    return this.http.get<any[]>('positions-all');
  }
  allByTeam(): Observable<Position[]> {
    return this.http.get<Position[]>('positionByTeam');
  }
  basePositions(){
    return this.http.get<any>('position-get-base').pipe(map(resp => resp));
  };
  get(id: string) {
    return this.http.get<Position>('position-get?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('position-search', param, httpOptions);
  }
  add(position: Position) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('position-save', position, httpOptions);
  }
  edit(position: Position) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('position-update', position, httpOptions);
  }
  delete(id: string) {
    return this.http.delete('position-delete?Id=' + id).pipe(map(resp => resp));
  }
  allAdmin(): Observable<Position[]> {
    return this.http.get<Position[]>('position-all-admin');
  }
  saveDefaultOffense(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('position-save-default-offense', model, httpOptions);
  };
  saveDefaultDefense(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('position-save-default-defense', model, httpOptions);
  };
}