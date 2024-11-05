import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Modifier } from 'src/app/data/models/offense'

@Injectable({
  providedIn: 'root'
})
export class ModifierService {

  constructor(
    private http: HttpClient,
  ) { }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('modifier-search', param, httpOptions);
  };
  getByModifier(id: string): Observable<Modifier[]> {
    return this.http.get<Modifier[]>('modifier-get-all-by-Id?id=' + id);
  };
  get(id: string) {
    return this.http.get<Modifier>('modifier-get?id=' + id).pipe(map(resp => resp));
  };
  add(modifier: Modifier) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('modifier-save', modifier, httpOptions);
  };
  update(modifier: Modifier) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.put('modifier-update', modifier, httpOptions);
  };
  favorite(id: string) {
    return this.http.get<any>('modifier-favorite?id=' + id).pipe(map(resp => resp));
  };
  archive(id: string) {
    return this.http.get<any>('modifier-archive?id=' + id).pipe(map(resp => resp));
  };
  dislike(id: string) {
    return this.http.get<any>('modifier-dislike?id=' + id).pipe(map(resp => resp));
  };
  delete(id: any) {
    return this.http.delete<any>('modifier-delete?id=' + id).pipe(map(resp => resp));
  };
  deleteMultiple(ids: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('modifier-delete-multiple', ids, httpOptions);
  };
  deleteArchive() {
    return this.http.get<any>('modifier-delete-archive').pipe(map(resp => resp));
  };
  addRule(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('modifier-add-rules', model, httpOptions);
  };
  removeRule(modifierId: string, unPairedId: string) {
    return this.http.get<any>('modifier-delete-rules?modifierId=' + modifierId + '&unPairedId=' + unPairedId).pipe(map(resp => resp));
  };
  copy_modifier(referenceId: string, playbookId?: string) {
    return this.http.get<any>('modifier-copy?referenceId=' + referenceId + '&playbookId=' + playbookId).pipe(map(resp => resp));
  };
  getModifierFootballMind(id: string) {
    return this.http.get<any>('modifier-football-minds?id=' + id).pipe(map(resp => resp));
  };
}