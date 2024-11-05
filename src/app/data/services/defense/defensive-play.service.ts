import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DefensivePlay } from '../../models/defense/index';

@Injectable({
  providedIn: 'root'
})
export class DefensivePlayService {

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<DefensivePlay[]> {
    return this.http.get<DefensivePlay[]>('defensive-all');
  }
  get(id: string) {
    return this.http.get<DefensivePlay>('defensive-get?Id=' + id).pipe(map(resp => resp));
  }
  search(param: any) {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this.http.post('defensive-Search', param, httpOptions);
  }
  add(defensivePlay: DefensivePlay) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('defensive-save', defensivePlay, httpOptions);
  }
  edit(defensivePlay: DefensivePlay) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('defensive-update', defensivePlay, httpOptions);
  }
  favorite(id: string) {
    return this.http.get<any>('defensive-favorite?id=' + id).pipe(map(resp => resp));
  };
  archive(id: string) {
    return this.http.get<any>('defensive-archive?id=' + id).pipe(map(resp => resp));
  };
  delete(id: string) {
    return this.http.delete<any>('defensive-delete?id=' + id).pipe(map(resp => resp));
  };
  deleteMultiple(ids: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('defensive-delete-multiple', ids, httpOptions);
  };
  deleteArchive() {
    return this.http.get<any>('defensive-delete-archive').pipe(map(resp => resp));
  };
  getPlays(searchText: string, skip: number, limit: number) {
    return this.http.get<any>('defensive-get-plays?searchText=' + searchText + '&skip=' + skip + '&limit=' + limit).pipe(map(resp => resp));
  };
  uploadScreenshot(formData: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': formData }) };
    return this.http.post('defense-plays-add-screenshots', formData, httpOptions);
  };
  deleteScreenshot(id?: string, playId?: string) {
    return this.http.delete<any>('defensive-plays-delete-screenshots?id=' + id + '&playId=' + playId).pipe(map(resp => resp));
  };
  defaultImg(model: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('defensive-plays-default-img', model, httpOptions);
  };
  getPlaysScout(searchText: string, page: number, limit: number) {
    return this.http.get<any>('defensive-get-plays-scout?searchText=' + searchText + '&page=' + page + '&limit=' + limit).pipe(map(resp => resp));
  };
}